// src/App.jsx
import React, { useState } from 'react';
import UserCardGenerator from './Components/UserCardGenerator';
import AdminDashboard from './Components/AdminDashboard';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);  // Toggle between User and Admin

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Greeting Card Generator</h1>

      {/* Toggle between User and Admin views */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setIsAdmin(false)}
          className={`px-4 py-2 mx-2 ${!isAdmin ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} border border-blue-500 rounded`}
        >
          User
        </button>
        <button
          onClick={() => setIsAdmin(true)}
          className={`px-4 py-2 mx-2 ${isAdmin ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} border border-blue-500 rounded`}
        >
          Admin
        </button>
      </div>

      {/* Display UserCardGenerator or AdminDashboard based on isAdmin state */}
      <div>
        {isAdmin ? <AdminDashboard /> : <UserCardGenerator />}
      </div>
    </div>
  );
}

export default App;
