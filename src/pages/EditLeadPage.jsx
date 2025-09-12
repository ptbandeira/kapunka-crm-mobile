import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function EditLeadPage({ leads, onUpdateLead }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const leadToEdit = leads.find((l) => l.id === id);

  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [source, setSource] = useState('');

  useEffect(() => {
    if (leadToEdit) {
      setName(leadToEdit.name);
      setStatus(leadToEdit.status);
      setSource(leadToEdit.source);
    }
  }, [leadToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedLead = {
      id,
      name,
      status,
      source,
    };
    onUpdateLead(updatedLead);
    navigate(`/lead/${id}`);
  };

  if (!leadToEdit) {
    return <div>Lead not found</div>;
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 justify-between overflow-x-hidden">
      <div>
        <div className="flex items-center bg-slate-50 p-4 pb-2 justify-between">
          <Link to={`/lead/${id}`} className="text-[#0d171b] flex size-12 shrink-0 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </Link>
          <h2 className="text-[#0d171b] text-lg font-bold leading-tight flex-1 text-center pr-12">Edit Lead</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Lead Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2">
                <option value="New">New</option>
                <option value="Qualified">Qualified</option>
                <option value="Contacted">Contacted</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Source</label>
              <input type="text" value={source} onChange={(e) => setSource(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
            </div>
          </div>
          <div className="flex px-4 py-3 gap-2">
            <button type="submit" className="flex flex-1 items-center justify-center rounded-xl h-12 px-5 bg-[#1193d4] text-slate-50 text-base font-bold">
              Save Changes
            </button>
            <Link to={`/lead/${id}`} className="flex flex-1 items-center justify-center rounded-xl h-12 px-5 bg-gray-200 text-gray-800 text-base font-bold">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditLeadPage;
