import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeDashboard from './pages/HomeDashboard';
import ProductMixCalculator from './pages/ProductMixCalculator';

function App() {
  return (
    <Router>
      <div className="bg-slate-50 min-h-screen font-sans">
        <nav className="bg-slate-800 text-white p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
          </ul>
        </nav>

        <main className="p-4">
          <Routes>
            <Route path="/" element={<HomeDashboard />} />
            <Route path="/calculator" element={<ProductMixCalculator />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
