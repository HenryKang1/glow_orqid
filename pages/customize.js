import Layout from '../components/Layout';
import Header from '../components/Header';
import { useState } from 'react';

const skinTypes = [
  { id: 'dry', name: 'Dry' },
  { id: 'oily', name: 'Oily' },
  { id: 'combination', name: 'Combination' },
  { id: 'sensitive', name: 'Sensitive' },
  { id: 'normal', name: 'Normal' }
];

const skinConcerns = [
  { id: 'acne', name: 'Acne & Breakouts' },
  { id: 'aging', name: 'Fine Lines & Wrinkles' },
  { id: 'dryness', name: 'Dryness & Flakiness' },
  { id: 'dullness', name: 'Dullness & Uneven Tone' },
  { id: 'redness', name: 'Redness & Sensitivity' }
];

export default function Customize() {
  const [selectedSkinType, setSelectedSkinType] = useState('');
  const [selectedConcerns, setSelectedConcerns] = useState([]);

  const handleSkinTypeChange = (skinTypeId) => {
    setSelectedSkinType(skinTypeId);
  };

  const handleConcernToggle = (concernId) => {
    setSelectedConcerns(prevConcerns => {
      if (prevConcerns.includes(concernId)) {
        return prevConcerns.filter(id => id !== concernId);
      } else {
        return [...prevConcerns, concernId];
      }
    });
  };

  const savePreferences = () => {
    // In a real app, this would save to an API or local storage
    alert('Your preferences have been saved!');
  };

  return (
    <Layout activeItem="customize">
      <Header 
        title="Customize Your Routine" 
        subtitle="Personalize for your skin needs" 
      />
      
      <div className="flex-1 px-6 pt-6 pb-24">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">Skin Type</h2>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            {skinTypes.map((type) => (
              <div key={type.id} className="mb-2 last:mb-0">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="skinType"
                    className="form-radio h-5 w-5 text-blue-600"
                    value={type.id}
                    checked={selectedSkinType === type.id}
                    onChange={() => handleSkinTypeChange(type.id)}
                  />
                  <span className="ml-2 text-black">{type.name}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">Skin Concerns</h2>
          <p className="text-sm text-black mb-4">Select all that apply</p>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            {skinConcerns.map((concern) => (
              <div key={concern.id} className="mb-2 last:mb-0">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    value={concern.id}
                    checked={selectedConcerns.includes(concern.id)}
                    onChange={() => handleConcernToggle(concern.id)}
                  />
                  <span className="ml-2 text-black">{concern.name}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={savePreferences}
          className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Save Preferences
        </button>
      </div>
    </Layout>
  );
}
