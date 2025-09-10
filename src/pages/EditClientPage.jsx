import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditClientPage({ clients, onUpdateClient }) { // Receive props
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the client to edit from the props
  const clientToEdit = clients.find((c) => c.id === id);

  // State for form fields
  const [name, setName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [yearsInBusiness, setYearsInBusiness] = useState('');
  const [notes, setNotes] = useState('');

  // Pre-populate the form when the component mounts or clientToEdit changes
  useEffect(() => {
    if (clientToEdit) {
      setName(clientToEdit.name);
      setBusinessType(clientToEdit.businessType);
      setEmail(clientToEdit.contact.email);
      setPhone(clientToEdit.contact.phone);
      setAddress(clientToEdit.contact.address);
      setYearsInBusiness(clientToEdit.overview.yearsInBusiness);
      setNotes(clientToEdit.overview.notes);
    }
  }, [clientToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedClient = {
      id: clientToEdit.id,
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
    onUpdateClient(updatedClient); // Call the handler from App.jsx
    alert('Client updated successfully!');
    navigate(`/client/${id}`); // Redirect to client detail page
  };

  if (!clientToEdit) {
    return <div>Client not found</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit {clientToEdit.name}</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 max-w-lg">
        {/* Simplified form for brevity */}
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
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditClientPage;
