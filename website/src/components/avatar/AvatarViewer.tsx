'use client';

import { useState, useEffect } from 'react';
import { Avatar } from '@readyplayerme/visage';
import { getAvatarImageUrl } from '@/utils/readyplayerme/config';

interface AvatarViewerProps {
  avatarUrl: string;
  avatarName: string;
  isLoading?: boolean;
}

export default function AvatarViewer({ 
  avatarUrl, 
  avatarName, 
  isLoading = false 
}: AvatarViewerProps) {
  const [is3DLoading, setIs3DLoading] = useState(true);
  const [showFallback, setShowFallback] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>('');
  
  // Get the 2D image URL for fallback
  useEffect(() => {
    if (avatarUrl) {
      const imgUrl = getAvatarImageUrl(avatarUrl);
      setImageUrl(imgUrl);
    }
  }, [avatarUrl]);
  
  // Set a timer to check if loading takes too long
  useEffect(() => {
    const timer = setTimeout(() => {
      if (is3DLoading) {
        console.warn('3D model loading timeout reached');
        setShowFallback(true);
        setIs3DLoading(false);
      }
    }, 10000); // 10 second timeout

    return () => clearTimeout(timer);
  }, [is3DLoading]);

  // Handle errors with an error boundary approach
  useEffect(() => {
    const handleError = () => {
      console.error('Error in 3D avatar rendering detected');
      setShowFallback(true);
      setIs3DLoading(false);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  return (
    <div className="aspect-square w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-lg relative">
      {/* Loading state */}
      {(isLoading || is3DLoading) && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 bg-opacity-75 z-10">
          <div className="text-center">
            <svg className="animate-spin h-10 w-10 text-blue-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-gray-700">Loading {avatarName}'s Avatar...</p>
          </div>
        </div>
      )}
      
      {/* 3D Avatar */}
      {!showFallback && avatarUrl && (
        <div className="w-full h-full bg-gray-50">
          <Avatar 
            modelSrc={avatarUrl} 
            className="w-full h-full"
          />
          <div className="hidden">
            {/* This will trigger the loading complete effect */}
            <img 
              src={avatarUrl} 
              alt="Loading monitor" 
              onLoad={() => setIs3DLoading(false)} 
              onError={() => setShowFallback(true)}
            />
          </div>
        </div>
      )}
      
      {/* Fallback 2D image if 3D fails */}
      {showFallback && imageUrl && (
        <div className="w-full h-full bg-gray-50 flex items-center justify-center">
          <img 
            src={imageUrl}
            alt={`${avatarName}'s avatar`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
      
      {/* Fallback if both 3D and 2D fail */}
      {showFallback && !imageUrl && (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center p-6 text-center">
          <div>
            <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">{avatarName}'s Avatar</h3>
            <p className="text-sm text-gray-500 mt-2">
              The 3D model could not be displayed.
            </p>
            <p className="text-xs text-gray-400 mt-2 font-mono break-all">
              {avatarUrl}
            </p>
          </div>
        </div>
      )}
    </div>
  );
} 