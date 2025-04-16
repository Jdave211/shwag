import { AvatarCreatorConfig } from '@readyplayerme/react-avatar-creator';

// ReadyPlayerMe configuration
export const RPM_SUBDOMAIN = 'demo'; // Replace with your subdomain when you have one

// Default configuration for the avatar creator
export const getDefaultConfig = (
  bodyType?: 'fullbody' | 'halfbody',
  gender?: 'male' | 'female'
): AvatarCreatorConfig => {
  return {
    clearCache: true,
    bodyType: bodyType || 'fullbody',
    quickStart: true,
    language: 'en',
    // Additional parameters can be added based on gender if needed
  };
};

// Convert measurements to RPM compatible format if needed
export const formatMeasurements = (measurements: {
  height?: string;
  weight?: string;
  chest?: string;
  waist?: string;
  hips?: string;
}) => {
  // This function can be expanded to convert measurements 
  // to a format expected by RPM if necessary
  return {
    height: measurements.height ? parseInt(measurements.height) : undefined,
    weight: measurements.weight ? parseInt(measurements.weight) : undefined,
    chest: measurements.chest ? parseInt(measurements.chest) : undefined,
    waist: measurements.waist ? parseInt(measurements.waist) : undefined,
    hips: measurements.hips ? parseInt(measurements.hips) : undefined,
  };
};

// Parse RPM avatar URL to extract avatar ID
export const extractAvatarId = (url: string): string | null => {
  // URL format: https://models.readyplayer.me/[avatarId].glb
  const match = url.match(/\/([^/]+)\.glb$/);
  return match ? match[1] : null;
};

// Function to generate a screenshot URL from the avatar URL
export const getAvatarImageUrl = (avatarUrl: string): string => {
  const avatarId = extractAvatarId(avatarUrl);
  if (!avatarId) return '';
  
  // Return the URL for a 2D render of the avatar
  return `https://api.readyplayer.me/v1/avatars/${avatarId}.png?scene=fullbody-portrait-v1`;
};

// Function to handle errors in avatar creation
export const handleAvatarError = (error: any): string => {
  console.error('Avatar creation error:', error);
  
  if (typeof error === 'string') {
    return error;
  }
  
  if (error?.message) {
    return error.message;
  }
  
  return 'An error occurred during avatar creation. Please try again.';
}; 