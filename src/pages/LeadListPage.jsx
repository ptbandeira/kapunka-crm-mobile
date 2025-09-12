import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LeadListPage({ leads }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredLeads = leads.filter(lead => {
    if (activeFilter === 'All') return true;
    return lead.status === activeFilter;
  });

  return (
    <div>
      <div className="flex gap-2 mb-4 overflow-x-auto">
        {['All', 'New', 'Qualified', 'Contacted'].map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 text-sm font-medium ${
              activeFilter === filter ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div>
        {filteredLeads.map(lead => (
          <Link to={`/lead/${lead.id}`} key={lead.id} className="flex items-center py-4 border-b border-gray-200">
            <div className="flex-grow">
              <p className="font-bold text-lg">{lead.name}</p>
              <p className="text-gray-500 text-sm">{lead.status} | {lead.source}</p>
            </div>
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LeadListPage;
