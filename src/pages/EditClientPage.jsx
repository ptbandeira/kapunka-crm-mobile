import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function EditClientPage({ clients, onUpdateClient }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const clientToEdit = clients.find((c) => c.id === id);

  const [name, setName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [yearsInBusiness, setYearsInBusiness] = useState('');
  const [notes, setNotes] = useState('');

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
      id,
      name,
      businessType,
      contact: { phone, email, address },
      overview: { yearsInBusiness: parseInt(yearsInBusiness, 10) || 0, notes },
    };
    onUpdateClient(updatedClient);
    navigate(`/client/${id}`);
  };

  if (!clientToEdit) {
    return <div>Client not found</div>;
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 justify-between overflow-x-hidden">
      <div>
        <div className="flex items-center bg-slate-50 p-4 pb-2 justify-between">
          <Link to={`/client/${id}`} className="text-[#0d171b] flex size-12 shrink-0 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </Link>
          <h2 className="text-[#0d171b] text-lg font-bold leading-tight flex-1 text-center pr-12">Edit Client</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Client Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Business Type</label>
              <input type="text" value={businessType} onChange={(e) => setBusinessType(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Years in Business</label>
              <input type="number" value={yearsInBusiness} onChange={(e) => setYearsInBusiness(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Notes</label>
              <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
            </div>
          </div>
          <div className="flex px-4 py-3 gap-2">
            <button type="submit" className="flex flex-1 items-center justify-center rounded-xl h-12 px-5 bg-[#1193d4] text-slate-50 text-base font-bold">
              Save Changes
            </button>
            <Link to={`/client/${id}`} className="flex flex-1 items-center justify-center rounded-xl h-12 px-5 bg-gray-200 text-gray-800 text-base font-bold">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditClientPage;
