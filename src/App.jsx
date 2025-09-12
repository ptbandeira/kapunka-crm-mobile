// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeDashboard from './pages/HomeDashboard';
import PlusIcon from './components/icons/PlusIcon';
import ProductMixCalculator from './pages/ProductMixCalculator';
import ClientListPage from './pages/ClientListPage';
import AddNewClientPage from './pages/AddNewClientPage';
import ClientDetailPage from './pages/ClientDetailPage';
import EditClientPage from './pages/EditClientPage';
import LeadListPage from './pages/LeadListPage';
import AddNewLeadPage from './pages/AddNewLeadPage';
import LeadDetailPage from './pages/LeadDetailPage';
import EditLeadPage from './pages/EditLeadPage';
import ProductListPage from './pages/ProductListPage';
import AddNewProductPage from './pages/AddNewProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import EditProductPage from './pages/EditProductPage';
import SalesPage from './pages/SalesPage';
import ResultsPage from './pages/ResultsPage';
import { clients as initialClients } from './data/clients';
import { leads as initialLeads } from './data/leads';
import { products as initialProducts } from './data/products';
import MainLayout from './components/MainLayout';

const RouteWithLayout = ({ title, action, children }) => (
  <MainLayout title={title} action={action}>{children}</MainLayout>
);

function App() {
  const getInitialState = (key, initialData) => {
    const savedData = localStorage.getItem(key);
    return savedData ? JSON.parse(savedData) : initialData;
  };

  const [clients, setClients] = useState(() => getInitialState('clients', initialClients));
  const [leads, setLeads] = useState(() => getInitialState('leads', initialLeads));
  const [products, setProducts] = useState(() => getInitialState('products', initialProducts));
  const [savedResults, setSavedResults] = useState(() => getInitialState('savedResults', []));

  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients));
  }, [clients]);

  useEffect(() => {
    localStorage.setItem('leads', JSON.stringify(leads));
  }, [leads]);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('savedResults', JSON.stringify(savedResults));
  }, [savedResults]);

  const handleSaveResult = (result) => {
    setSavedResults((prev) => [...prev, { ...result, id: `result${Date.now()}`, savedAt: new Date().toISOString() }]);
  };

  const handleAddClient = (newClient) => {
    setClients((prev) => [...prev, { ...newClient, id: Date.now().toString() }]);
  };

  const handleUpdateClient = (updatedClient) => {
    setClients((prev) => prev.map((c) => (c.id === updatedClient.id ? updatedClient : c)));
  };

  const handleAddLead = (newLead) => {
    setLeads((prev) => [...prev, { ...newLead, id: `lead${Date.now()}` }]);
  };

  const handleUpdateLead = (updatedLead) => {
    setLeads((prev) => prev.map((l) => (l.id === updatedLead.id ? updatedLead : l)));
  };

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [...prev, { ...newProduct, id: `prod${Date.now()}` }]);
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts((prev) => prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RouteWithLayout title="Dashboard"><HomeDashboard /></RouteWithLayout>} />
        <Route path="/calculator" element={<RouteWithLayout title="Calculator"><ProductMixCalculator onSave={handleSaveResult} /></RouteWithLayout>} />

        <Route path="/clients" element={<RouteWithLayout title="Clients" action={<Link to="/clients/new"><PlusIcon /></Link>}><ClientListPage clients={clients} /></RouteWithLayout>} />
        <Route path="/clients/new" element={<RouteWithLayout title="Add Client"><AddNewClientPage onAddClient={handleAddClient} /></RouteWithLayout>} />
        <Route path="/client/:id" element={<RouteWithLayout title="Client Details"><ClientDetailPage clients={clients} /></RouteWithLayout>} />
        <Route path="/client/:id/edit" element={<RouteWithLayout title="Edit Client"><EditClientPage clients={clients} onUpdateClient={handleUpdateClient} /></RouteWithLayout>} />

        <Route path="/leads" element={<RouteWithLayout title="Leads" action={<Link to="/leads/new"><PlusIcon /></Link>}><LeadListPage leads={leads} /></RouteWithLayout>} />
        <Route path="/leads/new" element={<RouteWithLayout title="Add Lead"><AddNewLeadPage onAddLead={handleAddLead} /></RouteWithLayout>} />
        <Route path="/lead/:id" element={<RouteWithLayout title="Lead Details"><LeadDetailPage leads={leads} /></RouteWithLayout>} />
        <Route path="/lead/:id/edit" element={<RouteWithLayout title="Edit Lead"><EditLeadPage leads={leads} onUpdateLead={handleUpdateLead} /></RouteWithLayout>} />

        <Route path="/products" element={<RouteWithLayout title="Products"><ProductListPage products={products} /></RouteWithLayout>} />
        <Route path="/products/new" element={<RouteWithLayout title="Add Product"><AddNewProductPage onAddProduct={handleAddProduct} /></RouteWithLayout>} />
        <Route path="/product/:id" element={<RouteWithLayout title="Product Details"><ProductDetailPage products={products} /></RouteWithLayout>} />
        <Route path="/product/:id/edit" element={<RouteWithLayout title="Edit Product"><EditProductPage products={products} onUpdateProduct={handleUpdateProduct} /></RouteWithLayout>} />

        <Route path="/results" element={<RouteWithLayout title="Results"><ResultsPage results={savedResults} /></RouteWithLayout>} />
        <Route path="/sales" element={<RouteWithLayout title="Sales"><SalesPage /></RouteWithLayout>} />
      </Routes>
    </Router>
  );
}

export default App;