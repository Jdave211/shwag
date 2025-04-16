import { AvatarCreationParams, AvatarMeasurements, AvatarResponse } from './types';

const RPM_API_BASE = 'https://api.readyplayer.me/v1';

/**
 * Convert height from inches to meters
 * @param heightInInches Height in inches
 * @returns Height in meters
 */
export function convertHeightToMeters(heightInInches: number): number {
  return heightInInches * 0.0254;
}

/**
 * Create body measurements based on height and body type
 * @param height Height in inches
 * @param bodyType Body type (slim, average, athletic)
 * @returns Object with body measurements
 */
export function createBodyMeasurements(height: number, bodyType: string): AvatarMeasurements {
  const heightInMeters = convertHeightToMeters(height);
  
  // Base measurements scaled by height
  let chestSize = heightInMeters * 0.52;
  let waistSize = heightInMeters * 0.43;
  let hipSize = heightInMeters * 0.53;
  let shoulderWidth = heightInMeters * 0.45;
  let legLength = heightInMeters * 0.48;
  
  // Adjust measurements based on body type
  switch (bodyType) {
    case 'slim':
      chestSize *= 0.95;
      waistSize *= 0.9;
      hipSize *= 0.95;
      shoulderWidth *= 0.95;
      break;
    case 'athletic':
      chestSize *= 1.05;
      waistSize *= 0.95;
      hipSize *= 1.02;
      shoulderWidth *= 1.08;
      break;
    case 'curvy':
      chestSize *= 1.08;
      waistSize *= 0.9;
      hipSize *= 1.1;
      shoulderWidth *= 1.02;
      break;
    // Default 'average' uses the base calculations
  }
  
  return {
    height: heightInMeters,
    chestSize,
    waistSize,
    hipSize,
    shoulderWidth,
    legLength
  };
}

/**
 * Prepare parameters for avatar creation
 * @param name Avatar name
 * @param gender Avatar gender
 * @param height Height in inches
 * @param bodyType Body type
 * @returns Parameters for avatar creation
 */
export function prepareAvatarParams(
  name: string,
  gender: 'male' | 'female' | 'neutral',
  height: number,
  bodyType: 'slim' | 'athletic' | 'curvy'
): AvatarCreationParams {
  return {
    name,
    gender,
    height,
    bodyType
  };
}

/**
 * Creates a new avatar using Ready Player Me
 */
export async function createAvatar(params: AvatarCreationParams): Promise<AvatarResponse> {
  try {
    const response = await fetch('/api/avatar/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to create avatar');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating avatar:', error);
    throw error;
  }
}

/**
 * Gets the status of an avatar creation process
 */
export async function getAvatarStatus(avatarId: string): Promise<AvatarResponse> {
  try {
    const response = await fetch(`/api/avatar/status?id=${avatarId}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to get avatar status');
    }

    return await response.json();
  } catch (error) {
    console.error('Error getting avatar status:', error);
    throw error;
  }
}

/**
 * Default configuration for the avatar visualizer
 */
export const defaultVisageConfig = {
  canvasBackground: "transparent",
  renderEngine: {
    antialias: true,
    pixelRatio: 1.5
  },
  environment: {
    hdri: "https://cdn.jsdelivr.net/npm/@visage/studio-environment@latest/assets/hdri/neutral.hdr",
    exposure: 1.0,
    rotation: 0.0,
    lighting: 1.0,
    shadow: {
      enabled: true,
      type: "PCF",
      bias: 0.0001,
      normalBias: 0.0001,
      intensity: 0.6,
      radius: 1.5,
      blurSamples: 8
    }
  },
  animation: {
    enabled: true,
    idle: "idle"
  },
  avatar: {
    halfBody: false,
    useHands: true,
    loading: {
      spinner: true
    },
    position: {
      x: 0,
      y: 0,
      z: 0
    }
  },
  zoom: {
    default: 1.2,
    min: 0.8,
    max: 2.0,
    speed: 1.0
  },
  rotation: {
    enabled: true,
    speed: 0.5
  }
};

/**
 * Get avatar model URL by ID
 * @param avatarId Avatar ID
 * @returns URL to the 3D model
 */
export function getAvatarModelUrl(avatarId: string): string {
  return `https://models.readyplayer.me/${avatarId}.glb`;
} 