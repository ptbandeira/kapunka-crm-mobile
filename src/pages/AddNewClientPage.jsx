import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function AddNewClientPage({ onAddClient }) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClient = {
      name,
      businessType,
      contact: {
        phone,
        email,
        address: '', // Address is not in the form
      },
      overview: {
        yearsInBusiness: 0, // Years in business is not in the form
        notes,
      },
    };
    onAddClient(newClient);
    navigate('/clients');
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 justify-between overflow-x-hidden">
      <div>
        <div className="flex items-center bg-slate-50 p-4 pb-2 justify-between">
          <Link to="/clients" className="text-[#0d171b] flex size-12 shrink-0 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
            </svg>
          </Link>
          <h2 className="text-[#0d171b] text-lg font-bold leading-tight flex-1 text-center pr-12">Add New Client</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <input
              placeholder="Client Name"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d171b] focus:outline-0 focus:ring-0 border-none bg-[#e7eff3] h-14 placeholder:text-[#4c809a] p-4 text-base font-normal leading-normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <select
              className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d171b] focus:outline-0 focus:ring-0 border-none bg-[#e7eff3] h-14 placeholder:text-[#4c809a] p-4 text-base font-normal leading-normal"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              required
            >
              <option value="" disabled>Business Type</option>
              <option value="Retailer">Retailer</option>
              <option value="Spa">Spa</option>
              <option value="Hotel">Hotel</option>
              <option value="Wholesale">Wholesale</option>
              <option value="E-commerce">E-commerce</option>
            </select>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <input
              placeholder="Phone Number"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d171b] focus:outline-0 focus:ring-0 border-none bg-[#e7eff3] h-14 placeholder:text-[#4c809a] p-4 text-base font-normal leading-normal"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <input
              placeholder="Email Address"
              type="email"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d171b] focus:outline-0 focus:ring-0 border-none bg-[#e7eff3] h-14 placeholder:text-[#4c809a] p-4 text-base font-normal leading-normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <textarea
              placeholder="Notes"
              className="form-textarea flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d171b] focus:outline-0 focus:ring-0 border-none bg-[#e7eff3] min-h-36 placeholder:text-[#4c809a] p-4 text-base font-normal leading-normal"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>
          <div className="flex px-4 py-3">
            <button
              type="submit"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#1193d4] text-slate-50 text-base font-bold"
            >
              <span className="truncate">Save Client</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewClientPage;
