import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ClientDetailPage({ clients }) {
  const { id } = useParams();
  const client = clients.find((c) => c.id === id);

  if (!client) {
    return <div>Client not found</div>;
  }

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 justify-between group/design-root overflow-x-hidden">
      <div>
        <div className="flex items-center bg-slate-50 p-4 pb-2 justify-between">
          <Link to="/clients" className="text-[#0d171b] flex size-12 shrink-0 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </Link>
          <h2 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Client Details</h2>
        </div>
        <div className="flex p-4 @container">
          <div className="flex w-full flex-col gap-4 items-center">
            <div className="flex gap-4 flex-col items-center">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                style={{ backgroundImage: `url(https://i.pravatar.cc/150?u=${client.id})` }}
              ></div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-[#0d171b] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">{client.name}</p>
                <p className="text-[#4c809a] text-base font-normal leading-normal text-center">{client.businessType}</p>
                <p className="text-[#4c809a] text-base font-normal leading-normal text-center">ID: {client.id}</p>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Contact Information</h3>
        <div className="p-4 grid grid-cols-[100px_1fr] gap-x-6">
          <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#cfdfe7] py-5">
            <p className="text-[#4c809a] text-sm font-normal leading-normal">Phone</p>
            <p className="text-[#0d171b] text-sm font-normal leading-normal">{client.contact.phone}</p>
          </div>
          <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#cfdfe7] py-5">
            <p className="text-[#4c809a] text-sm font-normal leading-normal">Email</p>
            <p className="text-[#0d171b] text-sm font-normal leading-normal">{client.contact.email}</p>
          </div>
          <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#cfdfe7] py-5">
            <p className="text-[#4c809a] text-sm font-normal leading-normal">Address</p>
            <p className="text-[#0d171b] text-sm font-normal leading-normal">{client.contact.address}</p>
          </div>
        </div>
        <h3 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Business Overview</h3>
        <div className="p-4 grid grid-cols-[150px_1fr] gap-x-6">
          <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#cfdfe7] py-5">
            <p className="text-[#4c809a] text-sm font-normal leading-normal">Business Type</p>
            <p className="text-[#0d171b] text-sm font-normal leading-normal">{client.businessType}</p>
          </div>
          <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#cfdfe7] py-5">
            <p className="text-[#4c809a] text-sm font-normal leading-normal">Years in Business</p>
            <p className="text-[#0d171b] text-sm font-normal leading-normal">{client.overview.yearsInBusiness} years</p>
          </div>
        </div>
        <h3 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Notes</h3>
        <p className="text-[#0d171b] text-base font-normal leading-normal pb-3 pt-1 px-4">
          {client.overview.notes}
        </p>
        <div className="flex px-4 py-3">
          <Link to={`/client/${client.id}/edit`} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#1193d4] text-slate-50 text-base font-bold">
            <span className="truncate">Edit Client</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ClientDetailPage;
