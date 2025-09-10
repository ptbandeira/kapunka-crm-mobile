<<<<<<< HEAD
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { clients as mockClients } from './data/clients';
import HomeDashboard from './pages/HomeDashboard';
import ProductMixCalculator from './pages/ProductMixCalculator';
import ClientListPage from './pages/ClientListPage';
import ClientDetailPage from './pages/ClientDetailPage';
import AddNewClientPage from './pages/AddNewClientPage';
import EditClientPage from './pages/EditClientPage';

function App() {
  const [clients, setClients] = useState(mockClients);

  const handleAddNewClient = (newClient) => {
    // In a real app, we'd get a real ID from the backend
    const clientWithId = { ...newClient, id: Date.now().toString() };
    setClients((prevClients) => [...prevClients, clientWithId]);
  };

  const handleUpdateClient = (updatedClient) => {
    setClients((prevClients) =>
      prevClients.map((client) =>
        client.id === updatedClient.id ? updatedClient : client
      )
    );
  };

=======
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeDashboard from './pages/HomeDashboard';
import ProductMixCalculator from './pages/ProductMixCalculator';

function App() {
>>>>>>> a23fc9c (fix: Ensure product mix is displayed in calculator results)
  return (
    <Router>
      <div className="bg-slate-50 min-h-screen font-sans">
        <nav className="bg-slate-800 text-white p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
<<<<<<< HEAD
              <Link to="/clients">Clients</Link>
            </li>
            <li>
=======
>>>>>>> a23fc9c (fix: Ensure product mix is displayed in calculator results)
              <Link to="/calculator">Calculator</Link>
            </li>
          </ul>
        </nav>

        <main className="p-4">
          <Routes>
            <Route path="/" element={<HomeDashboard />} />
            <Route path="/calculator" element={<ProductMixCalculator />} />
<<<<<<< HEAD
            <Route path="/clients" element={<ClientListPage clients={clients} />} />
            <Route path="/client/:id" element={<ClientDetailPage clients={clients} />} />
            <Route path="/clients/new" element={<AddNewClientPage onAddClient={handleAddNewClient} />} />
            <Route path="/client/:id/edit" element={<EditClientPage clients={clients} onUpdateClient={handleUpdateClient} />} />
=======
>>>>>>> a23fc9c (fix: Ensure product mix is displayed in calculator results)
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
