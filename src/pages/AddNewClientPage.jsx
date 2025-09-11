import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddNewClientPage({ onAddClient }) { // Receive onAddClient as a prop
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, _setAddress] = useState('');
  const [yearsInBusiness, _setYearsInBusiness] = useState('');
  const [notes, _setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClient = {
      name,
      businessType,
      contact: {
        phone,
        email,
        address,
      },
      overview: {
        yearsInBusiness: parseInt(yearsInBusiness, 10),
        notes,
      },
    };
    onAddClient(newClient); // Call the handler from App.jsx
    alert('Client added successfully!');
    navigate('/clients'); // Redirect to client list after submission
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add New Client</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 max-w-lg">
        {/* Simplified form for brevity. Add all fields as needed. */}
        <div className="mb-4">
          <label className="block text-[#0d171b] text-base font-medium mb-2" htmlFor="name">
            Client Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input w-full rounded-xl border-gray-300 h-12 p-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#0d171b] text-base font-medium mb-2" htmlFor="businessType">
            Business Type
          </label>
          <input
            id="businessType"
            type="text"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="form-input w-full rounded-xl border-gray-300 h-12 p-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#0d171b] text-base font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input w-full rounded-xl border-gray-300 h-12 p-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#0d171b] text-base font-medium mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-input w-full rounded-xl border-gray-300 h-12 p-3"
          />
        </div>
        <div className="flex items-center justify-end">
          <button type="submit" className="bg-[#1193d4] text-white px-6 py-3 rounded-xl text-base font-bold">
            Add Client
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewClientPage;
