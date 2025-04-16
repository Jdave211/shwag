'use client';

import AvatarViewer from './AvatarViewer';

interface AvatarResultDisplayProps {
  result: {
    avatarUrl: string;
    avatarName: string;
    gender: string;
    bodyType: string;
    measurements: {
      height: string;
      weight: string;
      chest: string;
      waist: string;
      hips: string;
    };
  };
  onCreateNew: () => void;
}

export default function AvatarResultDisplay({
  result,
  onCreateNew
}: AvatarResultDisplayProps) {
  return (
    <div className="mt-4 space-y-6">
      <div className="p-5 border-l-4 border-green-500 bg-green-50 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Your 3D Avatar</h2>
        <p className="text-sm text-gray-600">Your custom avatar has been created successfully!</p>
      </div>
      
      {/* Avatar display */}
      <AvatarViewer 
        avatarUrl={result.avatarUrl} 
        avatarName={result.avatarName}
      />
      
      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium mb-3 text-gray-800">Avatar Details</h3>
        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
          <div className="text-gray-500">Name:</div>
          <div className="font-medium text-gray-900">{result.avatarName}</div>
          
          <div className="text-gray-500">Gender:</div>
          <div className="font-medium text-gray-900">{result.gender === 'male' ? 'Male' : 'Female'}</div>
          
          <div className="text-gray-500">Body Type:</div>
          <div className="font-medium text-gray-900">{result.bodyType || 'Not specified'}</div>
          
          <div className="text-gray-500">Height:</div>
          <div className="font-medium text-gray-900">{result.measurements.height} cm</div>
          
          {result.measurements.weight && (
            <>
              <div className="text-gray-500">Weight:</div>
              <div className="font-medium text-gray-900">{result.measurements.weight} kg</div>
            </>
          )}
          
          {result.measurements.chest && (
            <>
              <div className="text-gray-500">Chest:</div>
              <div className="font-medium text-gray-900">{result.measurements.chest} cm</div>
            </>
          )}
          
          {result.measurements.waist && (
            <>
              <div className="text-gray-500">Waist:</div>
              <div className="font-medium text-gray-900">{result.measurements.waist} cm</div>
            </>
          )}
          
          {result.measurements.hips && (
            <>
              <div className="text-gray-500">Hips:</div>
              <div className="font-medium text-gray-900">{result.measurements.hips} cm</div>
            </>
          )}
        </div>
      </div>
      
      <div className="flex justify-center mt-8">
        <button
          type="button"
          onClick={onCreateNew}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
          </svg>
          Create Another Avatar
        </button>
      </div>
    </div>
  );
} 