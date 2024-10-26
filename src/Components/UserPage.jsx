import React, { useState } from 'react';

// Dummy data for client companies and occasions
const companies = [
  {
    name: 'Company 1',
    logo: 'https://via.placeholder.com/50',
    tagline: 'Your trusted partner',
    contact: '123-456-7890',
    website: 'www.company1.com',
    email: 'info@company1.com',
  },
  {
    name: 'Company 2',
    logo: 'https://via.placeholder.com/50',
    tagline: 'Excellence in service',
    contact: '098-765-4321',
    website: 'www.company2.com',
    email: 'contact@company2.com',
  },
];

const occasions = [
  {
    name: 'Diwali',
    image: 'https://via.placeholder.com/250',
    quote: 'Wishing you a joyful Diwali!',
  },
  {
    name: 'Christmas',
    image: 'https://via.placeholder.com/250',
    quote: 'Merry Christmas and Happy New Year!',
  },
];

const UserPage = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleGenerateCard = () => {
    setShowPreview(true);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Greeting Card Generator</h1>

      {/* Company Selection */}
      <select
        onChange={(e) =>
          setSelectedCompany(companies.find((company) => company.name === e.target.value))
        }
        className="mt-4 p-2 border"
      >
        <option value="">Select Company</option>
        {companies.map((company, index) => (
          <option key={index} value={company.name}>
            {company.name}
          </option>
        ))}
      </select>

      {/* Occasion Selection */}
      <select
        onChange={(e) =>
          setSelectedOccasion(occasions.find((occasion) => occasion.name === e.target.value))
        }
        className="mt-4 p-2 border"
      >
        <option value="">Select Occasion</option>
        {occasions.map((occasion, index) => (
          <option key={index} value={occasion.name}>
            {occasion.name}
          </option>
        ))}
      </select>

      {/* Generate Button */}
      <button
        onClick={handleGenerateCard}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Generate Card
      </button>

      {/* Greeting card preview */}
      {showPreview && selectedCompany && selectedOccasion && (
  <div
    className="mt-8 p-4 border rounded"
    style={{
      width: '558px',
      height: '396px',
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid #000',
      backgroundColor: '#fff', // Optional: to ensure visibility
    }}
  >
    {/* Top left: Company logo */}
    <img
      src={selectedCompany.logo}
      alt="Company Logo"
      style={{
        width: '50px',
        position: 'absolute',
        top: '10px', // Adjust as necessary
        left: '10px', // Adjust as necessary
      }}
    />

    {/* Top middle: Company name and tagline */}
    <div
      style={{
        position: 'absolute',
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
      }}
    >
      <h2 className="font-bold text-xl">{selectedCompany.name}</h2>
      {selectedCompany.tagline && <p>{selectedCompany.tagline}</p>}
    </div>

    {/* Middle section: Occasion image and quote */}
    <div
      className="flex"
      style={{
        position: 'absolute',
        top: '70px', // Adjust as necessary
        left: '0',
        right: '0',
      }}
    >
      <img
        src={selectedOccasion.image}
        alt="Occasion"
        style={{ width: '50%', height: 'auto' }} // Maintain aspect ratio
      />
      <div
        style={{
          width: '50%',
          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        <p className="text-lg italic">{selectedOccasion.quote}</p>
      </div>
    </div>

    {/* Bottom: Client's contact, website, and email */}
    <div
      className="text-center"
      style={{
        position: 'absolute',
        bottom: '70px', // Adjust as necessary
        left: '0',
        right: '0',
      }}
    >
      <p>
        {selectedCompany.contact} | {selectedCompany.website} | {selectedCompany.email}
      </p>
    </div>

    {/* Bottom-most part: Promotional line */}
    <div
      className="text-center"
      style={{
        position: 'absolute',
        bottom: '10px', // Adjust as necessary
        left: '0',
        right: '0',
        fontSize: '12px',
        color: '#666',
      }}
    >
      <p>
        We provide free personalized greeting cards for individuals, professionals, and organizations. 
        For enquiry contact: www.mistpl.com, info@mistpl.com.
      </p>
    </div>
  </div>
)}

    </div>
  );
};

export default UserPage;
