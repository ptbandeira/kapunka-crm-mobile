import React from 'react';
import { Link } from 'react-router-dom';

function ClientListPage({ clients }) { // Receive clients as a prop
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Clients</h1>
        <Link to="/clients/new" className="bg-[#1193d4] text-white px-4 py-2 rounded-xl text-base font-bold">
          Add New Client
        </Link>
      </div>
      <div className="bg-white shadow rounded-lg">
        <ul className="divide-y divide-gray-200">
          {clients.map((client) => (
            <li key={client.id}>
              <Link to={`/client/${client.id}`} className="block hover:bg-gray-50">
                <div className="p-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    <p className="text-lg font-medium text-[#0d171b]">{client.name}</p>
                    <p className="text-sm text-[#4c809a]">{client.businessType}</p>
                  </div>
                  <div className="text-[#0d171b]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M181.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ClientListPage;
