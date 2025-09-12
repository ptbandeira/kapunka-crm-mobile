import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ClientListPage({ clients }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search clients"
          className="w-full p-3 pl-10 bg-white border-none rounded-full shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>

      <div>
        {filteredClients.map(client => (
          <Link to={`/client/${client.id}`} key={client.id} className="flex items-center p-4 mb-2 bg-transparent">
            <img src={`https://i.pravatar.cc/150?u=${client.id}`} alt={client.name} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold text-lg">{client.name}</p>
              <p className="text-gray-500">{client.businessType}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ClientListPage;
