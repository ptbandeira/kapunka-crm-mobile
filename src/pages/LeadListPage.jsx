import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LeadListPage({ leads }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredLeads = leads.filter(lead => {
    if (activeFilter === 'All') return true;
    return lead.status === activeFilter;
  });

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Leads</h1>
        <Link to="/leads/new" className="text-3xl font-bold text-gray-700">+</Link>
      </div>

      <div className="flex gap-3 p-3 overflow-x-auto">
        {['All', 'New', 'Qualified', 'Contacted'].map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl px-4 text-sm font-medium ${
              activeFilter === filter ? 'bg-blue-500 text-white' : 'bg-[#e7eff3] text-[#0d171b]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div>
        {filteredLeads.map(lead => (
          <Link to={`/lead/${lead.id}`} key={lead.id} className="flex items-center p-4 mb-2 bg-white rounded-lg shadow">
            <div className="flex-grow">
              <p className="font-bold text-lg">{lead.name}</p>
              <p className="text-gray-500">{lead.status} | {lead.source}</p>
            </div>
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LeadListPage;
