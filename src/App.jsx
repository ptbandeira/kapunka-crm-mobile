import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeDashboard from './pages/HomeDashboard';
import ProductMixCalculator from './pages/ProductMixCalculator';
import ClientListPage from './pages/ClientListPage';
import AddNewClientPage from './pages/AddNewClientPage';
import ClientDetailPage from './pages/ClientDetailPage';
import EditClientPage from './pages/EditClientPage';
import { clients as initialClients } from './data/clients';
import BottomNav from './components/BottomNav';

function App() {
  const [clients, setClients] = useState(initialClients);

  const handleAddClient = (newClient) => {
    setClients((prevClients) => [...prevClients, { ...newClient, id: Date.now().toString() }]);
  };

  const handleUpdateClient = (updatedClient) => {
    setClients((prevClients) =>
      prevClients.map((client) => (client.id === updatedClient.id ? updatedClient : client))
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
            <Route path="/results" element={<div>Results Page</div>} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
