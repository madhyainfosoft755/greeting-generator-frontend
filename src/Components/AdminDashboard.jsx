import React, { useState } from 'react';

const AdminDashboard = () => {
  const [clientCompanies, setClientCompanies] = useState([]);
  const [occasions, setOccasions] = useState([]);
  const [companyFormData, setCompanyFormData] = useState({
    name: '',
    logo: '',
    tagline: '',
    contact: '',
    website: '',
    email: '',
  });
  const [occasionFormData, setOccasionFormData] = useState({
    name: '',
    image: '',
    quote: '',
  });

  const [showClientForm, setShowClientForm] = useState(false);
  const [showOccasionForm, setShowOccasionForm] = useState(false);

  // Handle form changes for client companies
  const handleCompanyInputChange = (e) => {
    const { name, value } = e.target;
    setCompanyFormData({ ...companyFormData, [name]: value });
  };

  // Handle form changes for occasions
  const handleOccasionInputChange = (e) => {
    const { name, value } = e.target;
    setOccasionFormData({ ...occasionFormData, [name]: value });
  };

  // Submit client company
  const handleCompanySubmit = (e) => {
    e.preventDefault();
    setClientCompanies([...clientCompanies, companyFormData]);
    setCompanyFormData({
      name: '',
      logo: '',
      tagline: '',
      contact: '',
      website: '',
      email: '',
    });
  };

  // Submit occasion
  const handleOccasionSubmit = (e) => {
    e.preventDefault();
    setOccasions([...occasions, occasionFormData]);
    setOccasionFormData({
      name: '',
      image: '',
      quote: '',
    });
  };

  // Delete client company with confirmation
  const deleteClientCompany = (index) => {
    if (window.confirm('Are you sure you want to delete this client company?')) {
      const updatedCompanies = [...clientCompanies];
      updatedCompanies.splice(index, 1);
      setClientCompanies(updatedCompanies);
    }
  };

  // Delete occasion with confirmation
  const deleteOccasion = (index) => {
    if (window.confirm('Are you sure you want to delete this occasion?')) {
      const updatedOccasions = [...occasions];
      updatedOccasions.splice(index, 1);
      setOccasions(updatedOccasions);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* Add Client Company */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setShowClientForm(!showClientForm)}
      >
        Add Client Company
      </button>
      {showClientForm && (
        <form onSubmit={handleCompanySubmit} className="mt-4">
          <input
            type="text"
            name="name"
            placeholder="Company Name"
            value={companyFormData.name}
            onChange={handleCompanyInputChange}
            className="block mb-2 p-2 border rounded"
            required
          />
          <input
            type="url"
            name="logo"
            placeholder="Logo URL"
            value={companyFormData.logo}
            onChange={handleCompanyInputChange}
            className="block mb-2 p-2 border rounded"
            required
          />
          <input
            type="text"
            name="tagline"
            placeholder="Tagline (Optional)"
            value={companyFormData.tagline}
            onChange={handleCompanyInputChange}
            className="block mb-2 p-2 border rounded"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={companyFormData.contact}
            onChange={handleCompanyInputChange}
            className="block mb-2 p-2 border rounded"
            required
          />
          <input
            type="url"
            name="website"
            placeholder="Website"
            value={companyFormData.website}
            onChange={handleCompanyInputChange}
            className="block mb-2 p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={companyFormData.email}
            onChange={handleCompanyInputChange}
            className="block mb-2 p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded mt-2"
          >
            Submit
          </button>
        </form>
      )}

      {/* Add Occasion */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        onClick={() => setShowOccasionForm(!showOccasionForm)}
      >
        Add Occasion
      </button>
      {showOccasionForm && (
        <form onSubmit={handleOccasionSubmit} className="mt-4">
          <input
            type="text"
            name="name"
            placeholder="Occasion Name"
            value={occasionFormData.name}
            onChange={handleOccasionInputChange}
            className="block mb-2 p-2 border rounded"
            required
          />
          <input
            type="url"
            name="image"
            placeholder="Occasion Image URL"
            value={occasionFormData.image}
            onChange={handleOccasionInputChange}
            className="block mb-2 p-2 border rounded"
            required
          />
          <input
            type="text"
            name="quote"
            placeholder="Occasion Quote"
            value={occasionFormData.quote}
            onChange={handleOccasionInputChange}
            className="block mb-2 p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded mt-2"
          >
            Submit
          </button>
        </form>
      )}

      {/* Client Companies List */}
      <h2 className="text-xl font-bold mt-8">Client Companies</h2>
      {clientCompanies.length === 0 ? (
        <p>No client companies added yet.</p>
      ) : (
        <ul className="mt-4">
          {clientCompanies.map((company, index) => (
            <li
              key={index}
              className="border p-4 mb-2 flex justify-between items-center"
            >
              <div>
                <p><strong>Name:</strong> {company.name}</p>
                <p><strong>Contact:</strong> {company.contact}</p>
                <p><strong>Website:</strong> {company.website}</p>
                <p><strong>Email:</strong> {company.email}</p>
              </div>
              <button
                onClick={() => deleteClientCompany(index)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Occasions List */}
      <h2 className="text-xl font-bold mt-8">Occasions</h2>
      {occasions.length === 0 ? (
        <p>No occasions added yet.</p>
      ) : (
        <ul className="mt-4">
          {occasions.map((occasion, index) => (
            <li
              key={index}
              className="border p-4 mb-2 flex justify-between items-center"
            >
              <div>
                <p><strong>Name:</strong> {occasion.name}</p>
                <p><strong>Quote:</strong> {occasion.quote}</p>
              </div>
              <button
                onClick={() => deleteOccasion(index)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminDashboard;
