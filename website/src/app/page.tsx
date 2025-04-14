'use client';

import { useState } from 'react';

function CustomDropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white text-gray-700 flex justify-between items-center"
      >
        {value || 'Select Body Type'}
        <svg className="fill-current h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
      </button>
      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
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

export default function Home() {
  const [step, setStep] = useState(1);
  const [avatarName, setAvatarName] = useState('');
  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [sideImage, setSideImage] = useState<string | null>(null);
  const [measurements, setMeasurements] = useState({
    height: '',
    weight: '',
    chest: '',
    waist: '',
    hips: ''
  });
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [bodyType, setBodyType] = useState('');
  
  // Avatar generation state
  const [showAvatarCreator, setShowAvatarCreator] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'front' | 'side') => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (type === 'front') {
        setFrontImage(event.target?.result as string);
      } else {
        setSideImage(event.target?.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleMeasurementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMeasurements(prev => ({ ...prev, [name]: value }));
  };

  const simulateAvatarCreation = () => {
    setLoading(true);
    // Simulate API call with a timeout
    setTimeout(() => {
      // Example avatar URL - in a real implementation, this would come from Ready Player Me
      const dummyAvatarUrl = 'https://models.readyplayer.me/64859eccc301145f0fe1cf01.glb';
      setAvatarUrl(dummyAvatarUrl);
      setResult({
        avatarUrl: dummyAvatarUrl,
        avatarName,
        bodyType,
        measurements
      });
      setLoading(false);
      setStep(3);
    }, 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!frontImage) {
      setError('Front image is required');
      return;
    }

    if (!measurements.height) {
      setError('Height measurement is required');
      return;
    }

    // Show the avatar creator UI
    setShowAvatarCreator(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
      <div className="bg-white shadow-md rounded-lg max-w-2xl w-full p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Swag Avatar Generator</h1>
        
        {step === 1 && (
          <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Basic Information</h2>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Avatar Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={avatarName}
                  onChange={(e) => setAvatarName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Height (cm) <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    name="height"
                    value={measurements.height}
                    onChange={handleMeasurementChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Body Type
                  </label>
                  <CustomDropdown
                    options={["Slim", "Average", "Athletic", "Curvy", "Muscular"]}
                    value={bodyType}
                    onChange={setBodyType}
                  />
                </div>
              </div>
              <hr className="my-4 border-gray-300" />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    name="weight"
                    value={measurements.weight}
                    onChange={handleMeasurementChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Chest (cm)
                  </label>
                  <input
                    type="number"
                    name="chest"
                    value={measurements.chest}
                    onChange={handleMeasurementChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Waist (cm)
                  </label>
                  <input
                    type="number"
                    name="waist"
                    value={measurements.waist}
                    onChange={handleMeasurementChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Hips (cm)
                  </label>
                  <input
                    type="number"
                    name="hips"
                    value={measurements.hips}
                    onChange={handleMeasurementChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300"
              >
                Next
              </button>
            </div>
          </form>
        )}

        {step === 2 && !showAvatarCreator && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Upload Photos</h2>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Front View (Required)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, 'front')}
                  className="block w-full text-sm border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                {frontImage && (
                  <div className="mt-2 w-32 h-32 relative">
                    <img 
                      src={frontImage} 
                      alt="Front view" 
                      className="object-cover w-full h-full rounded-lg shadow-md"
                    />
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Side View (Optional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, 'side')}
                  className="block w-full text-sm border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                {sideImage && (
                  <div className="mt-2 w-32 h-32 relative">
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
                onClick={() => setStep(1)}
                className="px-6 py-3 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition duration-300"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={loading || !frontImage}
                className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading ? 'Generating Avatar...' : 'Generate Avatar'}
              </button>
            </div>
            {error && (
              <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                {error}
              </div>
            )}
          </form>
        )}

        {step === 2 && showAvatarCreator && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Customize Your Avatar</h2>
            <p className="text-gray-600">Based on your photos and measurements, customize your 3D avatar:</p>
            
            <div className="border-2 border-gray-200 rounded-lg p-8 bg-gray-50 text-center">
              <div className="mb-4">
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium">Ready Player Me Avatar Creator</h3>
                <p className="text-gray-500 mt-2">
                  In a real implementation, the Ready Player Me avatar creator would appear here.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-col items-start gap-2 text-left">
                  <span className="text-sm font-medium text-gray-700">Avatar Name: {avatarName}</span>
                  <span className="text-sm font-medium text-gray-700">Height: {measurements.height} cm</span>
                  {bodyType && <span className="text-sm font-medium text-gray-700">Body Type: {bodyType}</span>}
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setShowAvatarCreator(false)}
                className="px-6 py-3 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition duration-300"
              >
                Back
              </button>
              <button
                type="button"
                onClick={simulateAvatarCreation}
                className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300"
                disabled={loading}
              >
                {loading ? 'Creating Avatar...' : 'Create My Avatar'}
              </button>
            </div>
          </div>
        )}

        {step === 3 && result && (
          <div className="mt-4 space-y-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Your 3D Avatar</h2>
            
            <div className="aspect-square w-full max-w-md mx-auto mb-6 bg-gray-50 rounded-lg overflow-hidden flex flex-col items-center justify-center p-4">
              <div className="text-center">
                <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-24 h-24 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium">{avatarName}'s 3D Avatar</h3>
                <p className="text-gray-500 mt-2 mb-4">
                  In a real implementation, your 3D avatar would be displayed here.
                </p>
                <p className="text-sm text-gray-400">
                  Avatar URL: <span className="font-mono text-xs">{result.avatarUrl}</span>
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-gray-700">Avatar Details</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <div className="text-gray-600">Name:</div>
                <div className="font-medium">{avatarName}</div>
                
                <div className="text-gray-600">Body Type:</div>
                <div className="font-medium">{bodyType || 'Not specified'}</div>
                
                <div className="text-gray-600">Height:</div>
                <div className="font-medium">{measurements.height} cm</div>
                
                {measurements.weight && (
                  <>
                    <div className="text-gray-600">Weight:</div>
                    <div className="font-medium">{measurements.weight} kg</div>
                  </>
                )}
                
                {measurements.chest && (
                  <>
                    <div className="text-gray-600">Chest:</div>
                    <div className="font-medium">{measurements.chest} cm</div>
                  </>
                )}
                
                {measurements.waist && (
                  <>
                    <div className="text-gray-600">Waist:</div>
                    <div className="font-medium">{measurements.waist} cm</div>
                  </>
                )}
                
                {measurements.hips && (
                  <>
                    <div className="text-gray-600">Hips:</div>
                    <div className="font-medium">{measurements.hips} cm</div>
                  </>
                )}
              </div>
            </div>
            
            <div className="flex justify-center mt-4">
              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  setAvatarName('');
                  setFrontImage(null);
                  setSideImage(null);
                  setMeasurements({ height: '', weight: '', chest: '', waist: '', hips: '' });
                  setBodyType('');
                  setResult(null);
                  setError(null);
                  setAvatarUrl('');
                  setShowAvatarCreator(false);
                }}
                className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300"
              >
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
