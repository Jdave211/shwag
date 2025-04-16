'use client';

import React from 'react';

interface RadioOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface RadioGroupProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  name: string;
  required?: boolean;
}

export function RadioGroup({ 
  options, 
  value, 
  onChange, 
  name, 
  required = false 
}: RadioGroupProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {options.map((option) => (
        <label 
          key={option.value} 
          className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 cursor-pointer transition-all
            ${value === option.value 
              ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md transform -translate-y-1' 
              : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'}`}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className="sr-only"
            required={required && !value}
          />
          {option.icon}
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
} 