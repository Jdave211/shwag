'use client';

import { useState, useEffect } from 'react';
import { AvatarCreator, AvatarCreatorConfig, AvatarExportedEvent } from '@readyplayerme/react-avatar-creator';
import { RPM_SUBDOMAIN, getDefaultConfig } from '@/utils/readyplayerme/config';

interface AvatarCreatorWrapperProps {
  bodyType?: 'fullbody' | 'halfbody';
  gender?: 'male' | 'female';
  onAvatarCreated: (avatarUrl: string) => void;
  onCancel: () => void;
}

export default function AvatarCreatorWrapper({
  bodyType = 'fullbody',
  gender,
  onAvatarCreated,
  onCancel
}: AvatarCreatorWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Get configuration
  const config = getDefaultConfig(bodyType, gender);
  
  // Style for the iframe
  const style = { 
    width: '100%', 
    height: '70vh', 
    border: 'none',
    borderRadius: '0.5rem',
    backgroundColor: '#f9fafb'
  };

  // Handle when avatar is exported
  const handleAvatarExported = (event: AvatarExportedEvent) => {
    setIsLoading(false);
    if (event.data.url) {
      onAvatarCreated(event.data.url);
    } else {
      setError('Failed to generate avatar URL');
    }
  };

  // Handle iframe loading events
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Set a timeout in case the iframe loading takes too long

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 bg-opacity-75 z-10 rounded-lg">
          <div className="text-center">
            <svg className="animate-spin h-10 w-10 text-blue-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-gray-700">Loading Avatar Creator...</p>
          </div>
        </div>
      )}
      
      {error && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg mb-4">
          {error}
        </div>
      )}
      
      <div className="mb-4">
        <AvatarCreator 
          subdomain={RPM_SUBDOMAIN} 
          config={config} 
          style={style} 
          onAvatarExported={handleAvatarExported} 
        />
      </div>
      
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-300 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back
        </button>
      </div>
    </div>
  );
} 