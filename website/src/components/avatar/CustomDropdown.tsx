'use client';

import { useState } from 'react';

interface CustomDropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export default function CustomDropdown({ options, value, onChange }: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white text-gray-700 flex justify-between items-center"
      >
        {value || 'Select Body Type'}
        <svg className="fill-current h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
      </button>
      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          {options.map((option: string) => (
            <div
              key={option}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onChange(option);
                setIsOpen(false);
              }}
              className="p-3 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 