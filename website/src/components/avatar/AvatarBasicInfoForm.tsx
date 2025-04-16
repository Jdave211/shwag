'use client';

import { useState } from 'react';
import { RadioGroup } from './FormControls';
import CustomDropdown from './CustomDropdown';

interface AvatarBasicInfoFormProps {
  avatarName: string;
  setAvatarName: (name: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  measurements: {
    height: string;
    weight: string;
    chest: string;
    waist: string;
    hips: string;
  };
  handleMeasurementChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  bodyType: string;
  setBodyType: (type: string) => void;
  error: string | null;
  onSubmit: (e: React.FormEvent) => void;
}

export default function AvatarBasicInfoForm({
  avatarName,
  setAvatarName,
  gender,
  setGender,
  measurements,
  handleMeasurementChange,
  bodyType,
  setBodyType,
  error,
  onSubmit
}: AvatarBasicInfoFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-6">
        <div className="p-5 border-l-4 border-blue-500 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Basic Information</h2>
          <p className="text-sm text-gray-600">Let's start by collecting some basic information about your avatar.</p>
        </div>
        
        <div className="space-y-1">
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Avatar Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            value={avatarName}
            onChange={(e) => setAvatarName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Enter a name for your avatar"
          />
        </div>
        
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Gender <span className="text-red-600">*</span>
          </label>
          <RadioGroup
            name="gender"
            options={[
              { 
                value: 'male', 
                label: 'Male',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="10.5" cy="6" r="5" />
                    <path d="M20 21v-2a7 7 0 0 0-7-7h-5a7 7 0 0 0-7 7v2" />
                  </svg>
                )
              },
              { 
                value: 'female', 
                label: 'Female',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="6" r="5" />
                    <path d="M12 11v8M9 16h6" />
                  </svg>
                )
              }
            ]}
            value={gender}
            onChange={setGender}
            required={true}
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Height (cm) <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              name="height"
              value={measurements.height}
              onChange={handleMeasurementChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Enter height"
            />
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Body Type <span className="text-red-600">*</span>
            </label>
            <CustomDropdown
              options={["Slim", "Average", "Athletic", "Curvy", "Muscular"]}
              value={bodyType}
              onChange={setBodyType}
            />
          </div>
        </div>
        
        <div className="px-4 py-3 bg-gray-50 rounded-lg">
          <h3 className="text-md font-medium text-gray-700 mb-2">Additional Measurements</h3>
          <p className="text-sm text-gray-500 mb-3">These measurements help create a more accurate avatar (optional)</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Weight (kg)
              </label>
              <input
                type="number"
                name="weight"
                value={measurements.weight}
                onChange={handleMeasurementChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter weight"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Chest (cm)
              </label>
              <input
                type="number"
                name="chest"
                value={measurements.chest}
                onChange={handleMeasurementChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter chest size"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Waist (cm)
              </label>
              <input
                type="number"
                name="waist"
                value={measurements.waist}
                onChange={handleMeasurementChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter waist size"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Hips (cm)
              </label>
              <input
                type="number"
                name="hips"
                value={measurements.hips}
                onChange={handleMeasurementChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter hip size"
              />
            </div>
          </div>
        </div>
      </div>
      
      {error && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg animate-pulse">
          {error}
        </div>
      )}
      
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
        >
          Next Step
        </button>
      </div>
    </form>
  );
} 