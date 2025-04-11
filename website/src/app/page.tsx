"use client";

import { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface PhotoPreview {
  frontView: string;
  sideView?: string;
  additionalView?: string;
}

interface Measurements {
  height: string;
  weight: string;
  bodyType: 'slim' | 'athletic' | 'average' | 'full';
  chest: string;
  waist: string;
  hips: string;
  shoulders: string;
  inseam: string;
}

export default function Home() {
  const [name, setName] = useState('');
  const [photos, setPhotos] = useState<PhotoPreview>({ frontView: '' });
  const [measurements, setMeasurements] = useState<Measurements>({
    height: '',
    weight: '',
    bodyType: 'average',
    chest: '',
    waist: '',
    hips: '',
    shoulders: '',
    inseam: '',
  });

  const handlePhotoUpload = (type: keyof PhotoPreview) => (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPhotos(prev => ({
          ...prev,
          [type]: event.target?.result as string
        }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleDeploy = async () => {
    // TODO: Implement extension communication
    console.log('Deploying avatar:', { name, photos, measurements });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shwag Avatar Creator</h1>
          <p className="mt-2 text-gray-600">Customize your virtual try-on avatar</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Photo Upload Section */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Photos</h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="frontView">Front View (Required)</Label>
                <Input
                  id="frontView"
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload('frontView')}
                  className="mt-1"
                />
                {photos.frontView && (
                  <div className="mt-2 relative h-40 w-full">
                    <Image
                      src={photos.frontView}
                      alt="Front view"
                      fill
                      className="object-contain rounded-md"
                    />
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="sideView">Side View (Optional)</Label>
                <Input
                  id="sideView"
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload('sideView')}
                  className="mt-1"
                />
                {photos.sideView && (
                  <div className="mt-2 relative h-40 w-full">
                    <Image
                      src={photos.sideView}
                      alt="Side view"
                      fill
                      className="object-contain rounded-md"
                    />
                  </div>
                )}
              </div>
            </div>
          </Card>

          {/* Measurements Section */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Measurements</h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                  placeholder="Avatar name"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  value={measurements.height}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setMeasurements(prev => ({ ...prev, height: e.target.value }))}
                  placeholder="175"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="bodyType">Body Type</Label>
                <Select
                  value={measurements.bodyType}
                  onValueChange={(value: 'slim' | 'athletic' | 'average' | 'full') => 
                    setMeasurements(prev => ({ ...prev, bodyType: value }))
                  }
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select body type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="slim">Slim</SelectItem>
                    <SelectItem value="athletic">Athletic</SelectItem>
                    <SelectItem value="average">Average</SelectItem>
                    <SelectItem value="full">Full</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  value={measurements.weight}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setMeasurements(prev => ({ ...prev, weight: e.target.value }))}
                  placeholder="70"
                  className="mt-1"
                />
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            size="lg"
            onClick={handleDeploy}
            className="bg-black text-white hover:bg-gray-800"
          >
            Deploy to Extension
          </Button>
        </div>
      </div>
    </div>
  );
}
