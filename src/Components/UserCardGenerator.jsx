// src/components/UserCardGenerator.jsx
import React, { useState } from 'react';

const UserCardGenerator = () => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedOccasion, setSelectedOccasion] = useState('');

  // Dummy data for companies
  const companies = [
    {
      name: 'Company 1',
      logo: 'https://via.placeholder.com/100',  // Placeholder logo
      tagline: 'Excellence in Service',
      contact: '123-456-7890',
      website: 'www.company1.com',
      email: 'contact@company1.com',
    },
    {
      name: 'Company 2',
      logo: 'https://via.placeholder.com/100',  // Placeholder logo
      tagline: 'Innovation and Trust',
      contact: '987-654-3210',
      website: 'www.company2.com',
      email: 'info@company2.com',
    },
  ];

  // Dummy data for occasions
  const occasions = [
    {
      name: 'Diwali',
      image: 'https://via.placeholder.com/300x200',  // Placeholder image
      quote: 'Wishing you a Diwali filled with happiness and prosperity!',
    },
    {
      name: 'Christmas',
      image: 'https://via.placeholder.com/300x200',  // Placeholder image
      quote: 'Merry Christmas! May your holidays be filled with joy.',
    },
  ];

  // Handle generating the greeting card preview
  const handleGenerate = () => {
    if (selectedCompany && selectedOccasion) {
      alert(`Generating card for ${selectedCompany} for ${selectedOccasion}!`);
    } else {
      alert('Please select both a company and an occasion.');
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Generate Greeting Card</h2>

      {/* Company Selection */}
      <div className="mb-4">
        <label className="block font-bold mb-2">Select Company:</label>
        <select
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="">Select a company</option>
          {companies.map((company, index) => (
            <option key={index} value={company.name}>
              {company.name}
            </option>
          ))}
        </select>
      </div>

      {/* Occasion Selection */}
      <div className="mb-4">
        <label className="block font-bold mb-2">Select Occasion:</label>
        <select
          value={selectedOccasion}
          onChange={(e) => setSelectedOccasion(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="">Select an occasion</option>
          {occasions.map((occasion, index) => (
            <option key={index} value={occasion.name}>
              {occasion.name}
            </option>
          ))}
        </select>
      </div>

      {/* Generate Button */}
      <button
        onClick={handleGenerate}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Generate Card
      </button>

      {/* Card Preview */}
      {selectedCompany && selectedOccasion && (
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-2">Card Preview</h3>
          <div className="border p-4 rounded-lg bg-gray-50 shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <img
                src={
                  companies.find((company) => company.name === selectedCompany)
                    ?.logo
                }
                alt="Company Logo"
                className="w-16 h-16"
              />
              <div>
                <h4 className="text-lg font-bold">
                  {
                    companies.find((company) => company.name === selectedCompany)
                      ?.name
                  }
                </h4>
                <p>
                  {
                    companies.find((company) => company.name === selectedCompany)
                      ?.tagline
                  }
                </p>
              </div>
            </div>

            <div className="flex">
              <img
                src={
                  occasions.find((occasion) => occasion.name === selectedOccasion)
                    ?.image
                }
                alt="Occasion"
                className="w-48 h-32 mr-4"
              />
              <p className="text-lg">
                {
                  occasions.find((occasion) => occasion.name === selectedOccasion)
                    ?.quote
                }
              </p>
            </div>

            <div className="mt-4">
              <p>
                Contact: {
                  companies.find((company) => company.name === selectedCompany)
                    ?.contact
                },{' '}
                {
                  companies.find((company) => company.name === selectedCompany)
                    ?.email
                },{' '}
                {
                  companies.find((company) => company.name === selectedCompany)
                    ?.website
                }
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              We provide free personalized greeting cards for individuals,
              professionals, and organizations. For enquiry contact:{' '}
              <a href="https://www.mistpl.com" className="text-blue-600">
                www.mistpl.com
              </a>
              , info@mistpl.com
            </p>
          </div>

          {/* Non-functional Download Button for Now */}
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Download Card (Feature Pending)
          </button>
        </div>
      )}
    </div>
  );
};

export default UserCardGenerator;
