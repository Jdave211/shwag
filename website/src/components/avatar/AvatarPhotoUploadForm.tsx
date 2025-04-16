'use client';

import { useState } from 'react';

interface AvatarPhotoUploadFormProps {
  frontImage: string | null;
  sideImage: string | null;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>, type: 'front' | 'side') => void;
  loading: boolean;
  error: string | null;
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function AvatarPhotoUploadForm({
  frontImage,
  sideImage,
  handleImageChange,
  loading,
  error,
  onBack,
  onSubmit
}: AvatarPhotoUploadFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-5">
        <div className="p-5 border-l-4 border-blue-500 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Upload Photos</h2>
          <p className="text-sm text-gray-600">Upload photos to help us create your personalized avatar.</p>
        </div>
        
        <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Front View <span className="text-red-600">*</span>
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, 'front')}
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {frontImage && (
            <div className="mt-3 w-32 h-32 relative">
              <img 
                src={frontImage} 
                alt="Front view" 
                className="object-cover w-full h-full rounded-lg shadow-md"
              />
            </div>
          )}
        </div>
        
        <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Side View (Optional)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, 'side')}
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {sideImage && (
            <div className="mt-3 w-32 h-32 relative">
              <img 
                src={sideImage} 
                alt="Side view" 
                className="object-cover w-full h-full rounded-lg shadow-md"
              />
            </div>
          )}
        </div>
      </div>
      
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-5 py-2.5 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-300 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back
        </button>
        <button
          type="submit"
          disabled={loading || !frontImage}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-105 flex items-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            <>
              Continue
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </>
          )}
        </button>
      </div>
      
      {error && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg animate-pulse">
          {error}
        </div>
      )}
    </form>
  );
} 