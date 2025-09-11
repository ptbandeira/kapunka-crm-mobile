import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ClientDetailPage({ clients }) { // Receive clients as a prop
  const { id } = useParams();
  const client = clients.find((c) => c.id === id);

  if (!client) {
    return <div>Client not found</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{client.name}</h1>
        <Link to={`/client/${client.id}/edit`} className="bg-[#1193d4] text-white px-4 py-2 rounded-xl text-base font-bold">
          Edit Client
        </Link>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#0d171b] mb-2">Contact Information</h3>
          <p><strong>Email:</strong> {client.contact.email}</p>
          <p><strong>Phone:</strong> {client.contact.phone}</p>
          <p><strong>Address:</strong> {client.contact.address}</p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#0d171b] mb-2">Business Overview</h3>
          <p><strong>Business Type:</strong> {client.businessType}</p>
          <p><strong>Years in Business:</strong> {client.overview.yearsInBusiness}</p>
          <p><strong>Notes:</strong> {client.overview.notes}</p>
        </div>
      </div>
    </div>
  );
}

export default ClientDetailPage;
