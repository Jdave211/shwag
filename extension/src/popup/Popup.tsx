import React, { useState } from 'react';

const Popup: React.FC = () => {
  const [step, setStep] = useState<'welcome' | 'photos' | 'measurements' | 'complete'>('welcome');

  return (
    <div className="w-80 p-4 bg-white">
      <h1 className="text-xl font-bold text-center text-gray-800 mb-4">Swag</h1>
      
      {step === 'welcome' && (
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-700">Welcome to Swag!</h2>
          <p className="text-sm text-gray-600">Create your avatar to try on clothes from any online store.</p>
          <button 
            onClick={() => setStep('photos')}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition duration-200"
          >
            Create Avatar
          </button>
        </div>
      )}
      
      {step === 'photos' && (
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-700">Upload Your Photos</h2>
          <p className="text-sm text-gray-600">We need 2-3 photos to create your avatar.</p>
          {/* Photo upload UI will go here */}
          <div className="mt-3">
            <button 
              onClick={() => setStep('measurements')}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition duration-200"
            >
              Next
            </button>
          </div>
        </div>
      )}
      
      {step === 'measurements' && (
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-700">Your Measurements</h2>
          <p className="text-sm text-gray-600">Add your measurements for the most accurate fit.</p>
          {/* Measurements form will go here */}
          <div className="mt-3">
            <button 
              onClick={() => setStep('complete')}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition duration-200"
            >
              Create Avatar
            </button>
          </div>
        </div>
      )}
      
      {step === 'complete' && (
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-700">Avatar Created!</h2>
          <p className="text-sm text-gray-600">Your avatar is ready to try on clothes.</p>
          {/* Preview will go here */}
          <div className="mt-3 bg-gray-100 p-4 rounded-lg h-32 flex items-center justify-center">
            <p className="text-sm text-gray-500 italic">Avatar preview will appear here</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;