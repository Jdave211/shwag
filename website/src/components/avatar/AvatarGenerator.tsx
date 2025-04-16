'use client';

import { useState } from 'react';
import AvatarBasicInfoForm from './AvatarBasicInfoForm';
import AvatarPhotoUploadForm from './AvatarPhotoUploadForm';
import AvatarResultDisplay from './AvatarResultDisplay';
import AvatarCreatorWrapper from './AvatarCreatorWrapper';

export default function AvatarGenerator() {
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
  const [gender, setGender] = useState('');
  
  // Avatar URL state
  const [avatarUrl, setAvatarUrl] = useState('');
  const [showAvatarCreator, setShowAvatarCreator] = useState(false);

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

  const handleAvatarCreated = (url: string) => {
    setAvatarUrl(url);
    setResult({
      avatarUrl: url,
      avatarName,
      gender,
      bodyType,
      measurements
    });
    setStep(3);
  };

  const handleBasicInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!bodyType) {
      setError('Body type is required');
      return;
    }
    
    if (!gender) {
      setError('Gender is required');
      return;
    }
    
    if (!avatarName) {
      setError('Avatar name is required');
      return;
    }
    
    if (!measurements.height) {
      setError('Height measurement is required');
      return;
    }
    
    setStep(2);
    setError(null);
  };

  const handlePhotoUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!frontImage) {
      setError('Front image is required');
      return;
    }

    // Show the avatar creator UI
    setShowAvatarCreator(true);
  };

  const resetForm = () => {
    setStep(1);
    setAvatarName('');
    setFrontImage(null);
    setSideImage(null);
    setMeasurements({ height: '', weight: '', chest: '', waist: '', hips: '' });
    setBodyType('');
    setGender('');
    setResult(null);
    setError(null);
    setAvatarUrl('');
    setShowAvatarCreator(false);
  };

  const getProgressWidth = () => {
    if (step === 1) return 'w-1/3';
    if (step === 2 && !showAvatarCreator) return 'w-2/3';
    if (step === 2 && showAvatarCreator) return 'w-3/4';
    return 'w-full';
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200 p-8">
      <div className="bg-white shadow-xl rounded-2xl max-w-2xl w-full p-8">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div className={`bg-blue-600 h-2 rounded-full transition-all duration-500 ${getProgressWidth()}`}></div>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-gray-800 via-blue-600 to-gray-800 text-transparent bg-clip-text">Swag Avatar Generator</h1>
        
        {step === 1 && (
          <AvatarBasicInfoForm
            avatarName={avatarName}
            setAvatarName={setAvatarName}
            gender={gender}
            setGender={setGender}
            measurements={measurements}
            handleMeasurementChange={handleMeasurementChange}
            bodyType={bodyType}
            setBodyType={setBodyType}
            error={error}
            onSubmit={handleBasicInfoSubmit}
          />
        )}

        {step === 2 && !showAvatarCreator && (
          <AvatarPhotoUploadForm
            frontImage={frontImage}
            sideImage={sideImage}
            handleImageChange={handleImageChange}
            loading={loading}
            error={error}
            onBack={() => setStep(1)}
            onSubmit={handlePhotoUploadSubmit}
          />
        )}

        {step === 2 && showAvatarCreator && (
          <div className="space-y-6">
            <div className="p-5 border-l-4 border-blue-500 bg-blue-50 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Customize Your Avatar</h2>
              <p className="text-sm text-gray-600">Based on your photos and measurements, customize your 3D avatar.</p>
            </div>
            
            <AvatarCreatorWrapper
              bodyType={bodyType === 'Slim' || bodyType === 'Athletic' ? 'fullbody' : 'fullbody'}
              gender={gender as 'male' | 'female'}
              onAvatarCreated={handleAvatarCreated}
              onCancel={() => setShowAvatarCreator(false)}
            />
          </div>
        )}

        {step === 3 && result && (
          <AvatarResultDisplay
            result={result}
            onCreateNew={resetForm}
          />
        )}
      </div>
    </main>
  );
} 