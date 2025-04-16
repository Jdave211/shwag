// Custom types for Ready Player Me integration

// Renderer engine types
export type VisageRenderEngine = 'webgl' | 'webgpu';

// Avatar environment configuration
export interface EnvironmentConfig {
  background?: {
    color?: string;
  };
  lighting?: {
    intensity?: number;
  };
  gradient?: {
    enabled?: boolean;
    topColor?: string;
    bottomColor?: string;
  };
  ambientOcclusion?: {
    intensity?: number;
  };
}

// Animation configuration
export interface AnimationConfig {
  enabled?: boolean;
  defaultAnimation?: string;
  animationSelectorEnabled?: boolean;
}

// Avatar configuration
export interface AvatarConfig {
  outfitVersion?: string;
  morph?: {
    enabled?: boolean;
  };
  lod?: number;
  pose?: string;
  position?: {
    x?: number;
    y?: number;
    z?: number;
  };
  scale?: number;
  shadows?: boolean;
}

// Zoom configuration
export interface ZoomConfig {
  default?: number;
  min?: number;
  max?: number;
  sensitivity?: number;
}

// Rotation configuration
export interface RotationConfig {
  enabled?: boolean;
  speed?: number;
  autoRotate?: boolean;
}

// Camera preset
export interface CameraPreset {
  fov: number;
  position: { x: number; y: number; z: number };
  target: { x: number; y: number; z: number };
}

// Animation preset
export interface AnimationPreset {
  name: string;
  label: string;
}

// Types for avatar creation parameters
export interface AvatarCreationParams {
  name: string;
  gender: 'male' | 'female' | 'neutral';
  height: number; // Height in inches
  bodyType: 'slim' | 'athletic' | 'curvy';
}

// Types for avatar measurements used for body customization
export interface AvatarMeasurements {
  height: number; // Height in meters
  shoulderWidth: number;
  chestSize: number;
  waistSize: number;
  hipSize: number;
  legLength: number;
}

// Response from the avatar creation API
export interface AvatarResponse {
  id: string;
  modelUrl: string;
  imageUrl: string;
  status: 'processing' | 'completed' | 'failed';
}

// Configuration for the Visage viewer
export interface VisageConfig {
  canvasBackground: string;
  renderEngine: {
    antialias: boolean;
    pixelRatio: number;
  };
  environment: {
    hdri: string;
    exposure: number;
    rotation: number;
    lighting: number;
    shadow: {
      enabled: boolean;
      type: string;
      bias: number;
      normalBias: number;
      intensity: number;
      radius: number;
      blurSamples: number;
    };
  };
  animation: {
    enabled: boolean;
    idle: string;
  };
  avatar: {
    halfBody: boolean;
    useHands: boolean;
    loading: {
      spinner: boolean;
    };
    position: {
      x: number;
      y: number;
      z: number;
    }
  };
  zoom: {
    default: number;
    min: number;
    max: number;
    speed: number;
  };
  rotation: {
    enabled: boolean;
    speed: number;
  };
}

// Animation option for avatar
export interface AnimationOption {
  name: string;
  label: string;
} 