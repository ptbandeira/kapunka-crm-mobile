import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeDashboard from './pages/HomeDashboard';
import ProductMixCalculator from './pages/ProductMixCalculator';
import ClientListPage from './pages/ClientListPage';
import AddNewClientPage from './pages/AddNewClientPage';
import ClientDetailPage from './pages/ClientDetailPage';
import EditClientPage from './pages/EditClientPage';
import LeadListPage from './pages/LeadListPage';
import AddNewLeadPage from './pages/AddNewLeadPage';
import LeadDetailPage from './pages/LeadDetailPage';
import EditLeadPage from './pages/EditLeadPage';
import { clients as initialClients } from './data/clients';
import { leads as initialLeads } from './data/leads';
import BottomNav from './components/BottomNav';

function App() {
  const [clients, setClients] = useState(initialClients);
  const [leads, setLeads] = useState(initialLeads);

  const handleAddClient = (newClient) => {
    setClients((prevClients) => [...prevClients, { ...newClient, id: Date.now().toString() }]);
  };

  const handleUpdateClient = (updatedClient) => {
    setClients((prevClients) =>
      prevClients.map((client) => (client.id === updatedClient.id ? updatedClient : client))
    );
  };

  const handleAddLead = (newLead) => {
    setLeads((prevLeads) => [...prevLeads, { ...newLead, id: `lead${Date.now()}` }]);
  };

  const handleUpdateLead = (updatedLead) => {
    setLeads((prevLeads) =>
      prevLeads.map((lead) => (lead.id === updatedLead.id ? updatedLead : lead))
    );
  };

  return (
    <Router>
      <div className="bg-slate-50 min-h-screen font-sans pb-16">
        <main className="p-4">
          <Routes>
            <Route path="/" element={<HomeDashboard />} />
            <Route path="/calculator" element={<ProductMixCalculator />} />
            <Route path="/clients" element={<ClientListPage clients={clients} />} />
            <Route path="/clients/new" element={<AddNewClientPage onAddClient={handleAddClient} />} />
            <Route path="/client/:id" element={<ClientDetailPage clients={clients} />} />
            <Route path="/client/:id/edit" element={<EditClientPage clients={clients} onUpdateClient={handleUpdateClient} />} />
            <Route path="/leads" element={<LeadListPage leads={leads} />} />
            <Route path="/leads/new" element={<AddNewLeadPage onAddLead={handleAddLead} />} />
            <Route path="/lead/:id" element={<LeadDetailPage leads={leads} />} />
            <Route path="/lead/:id/edit" element={<EditLeadPage leads={leads} onUpdateLead={handleUpdateLead} />} />
            <Route path="/results" element={<div>Results Page</div>} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
