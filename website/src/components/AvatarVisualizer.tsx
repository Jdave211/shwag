'use client';

import { useEffect, useRef } from 'react';
import { VisageConfig } from '../utils/readyplayerme/types';

interface AvatarVisualizerProps {
  avatarUrl?: string;
  config?: Partial<VisageConfig>;
}

export default function AvatarVisualizer({ 
  avatarUrl,
  config = {}
}: AvatarVisualizerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  
  // Default configuration
  const defaultConfig: VisageConfig = {
    canvasBackground: "#eee8d5", // Beige background to match theme
    renderEngine: {
      antialias: true, // Example value
      pixelRatio: 1.0  // Example value
    },
    environment: {
      hdri: 'studio_hdri', // Example value
      exposure: 1.0, // Example value
      rotation: 0, // Example value
      lighting: 1.2, // Example value
      shadow: {
        enabled: true,
        type: 'soft', // Example value
        bias: 0.01, // Example value
        normalBias: 0.02, // Example value
        intensity: 0.5, // Example value
        radius: 1.0, // Example value
        blurSamples: 8 // Example value
      }
    },
    animation: {
      enabled: true,
      idle: "idle_animation" // Example value
    },
    avatar: {
      halfBody: true, // Example value
      useHands: true, // Example value
      loading: {
        spinner: true // Example value
      },
      position: { x: 0, y: -0.8, z: 0 }
    },
    zoom: {
      default: 1.2,
      min: 0.8,
      max: 3,
      speed: 0.5
    },
    rotation: {
      enabled: true,
      speed: 0.5
    }
  };

  // Merge default config with provided config
  const finalConfig = { ...defaultConfig, ...config };
  
  useEffect(() => {
    if (!avatarUrl || !containerRef.current) return;
    
    // Load the Ready Player Me Visage iframe viewer
    if (!iframeRef.current) {
      const iframe = document.createElement('iframe');
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = 'none';
      iframe.allow = 'camera *; microphone *';
      
      // Set the iframe source to the RPM Visage viewer with our avatar URL
      iframe.src = `https://visage.readyplayer.me/?avatar=${encodeURIComponent(avatarUrl)}&config=${encodeURIComponent(JSON.stringify(finalConfig))}`;
      
      containerRef.current.appendChild(iframe);
      iframeRef.current = iframe;
    }
    
    return () => {
      if (iframeRef.current && containerRef.current) {
        containerRef.current.removeChild(iframeRef.current);
        iframeRef.current = null;
      }
    };
  }, [avatarUrl, finalConfig]);
  
  return (
    <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden" ref={containerRef}>
      {!avatarUrl && (
        <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500">
          Complete the form to generate your avatar
        </div>
      )}
    </div>
  );
}