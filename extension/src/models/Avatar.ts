export interface UserPhotos {
  frontView: string;  // base64 or URL
  sideView?: string;  // optional
  additionalView?: string;  // optional
}

export interface BodyMeasurements {
  height: number;  // in cm
  weight?: number;  // in kg (optional)
  bodyType: 'slim' | 'athletic' | 'average' | 'full';
  
  // Optional detailed measurements
  chest?: number;
  waist?: number;
  hips?: number;
  shoulders?: number;
  inseam?: number;
}

export interface Avatar {
  id: string;
  name: string;
  photos: UserPhotos;
  measurements: BodyMeasurements;
  created: number;  // timestamp
  updated: number;  // timestamp
}

export function createAvatar(name: string, photos: UserPhotos, measurements: BodyMeasurements): Avatar {
  const now = Date.now();
  return {
    id: `avatar_${now}_${Math.random().toString(36).substring(2, 9)}`,
    name,
    photos,
    measurements,
    created: now,
    updated: now
  };
}