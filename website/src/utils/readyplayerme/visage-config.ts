import { VisageConfig, VisageRenderEngine, CameraPreset, AnimationPreset } from './types';

/**
 * Get default render configuration for Ready Player Me Visage renderer
 * @returns VisageConfig object
 */
export const getDefaultRenderConfig = (): VisageConfig => {
  return {
    canvasBackground: 'transparent',
    renderEngine: {
      antialias: true,
      pixelRatio: 1.0
    },
    environment: {
      hdri: 'default_hdri', // Example value
      exposure: 1.0, // Example value
      rotation: 0, // Example value
      lighting: 1.2, // Ensure this is a number
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
      idle: 'idle_animation' // Example value
    },
    avatar: {
      halfBody: true, // Example value
      useHands: true, // Example value
      loading: {
        spinner: true // Example value
      },
      position: {
        x: 0,
        y: 0,
        z: 0
      }
    },
    zoom: {
      default: 1.6,
      min: 0.8,
      max: 3,
      speed: 0.5
    },
    rotation: {
      enabled: true,
      speed: 0.5
    }
  };
};

/**
 * Camera presets for different avatar views
 */
export const cameraPresets: Record<string, CameraPreset> = {
  default: {
    fov: 35,
    position: { x: 0, y: 1.4, z: 2.5 },
    target: { x: 0, y: 1.4, z: 0 },
  },
  closeup: {
    fov: 20,
    position: { x: 0, y: 1.6, z: 0.8 },
    target: { x: 0, y: 1.6, z: 0 },
  },
  fullbody: {
    fov: 45,
    position: { x: 0, y: 0.8, z: 3 },
    target: { x: 0, y: 0.8, z: 0 },
  },
};

/**
 * Standard animations for the avatar
 */
export const animations: AnimationPreset[] = [
  { name: 'idle', label: 'Idle' },
  { name: 'wave', label: 'Wave' },
  { name: 'jump', label: 'Jump' },
  { name: 'dance', label: 'Dance' },
]; 