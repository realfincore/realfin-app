import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Lend from './pages/Lend';
import Bonds from './pages/Bonds';
import Stocks from './pages/Stocks';
import Crypto from './pages/Crypto';
import RWA from './pages/RWA';
import ChainData from './pages/ChainData';
import { WalletProvider } from './context/WalletContext';

function App() {
  return (
    <WalletProvider>
      <Router>
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
          <Routes>
            <Route path="/login" element={<Login />} />
                 <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="lend" element={<Lend />} />
              <Route path="bonds" element={<Bonds />} />
              <Route path="stocks" element={<Stocks />} />
              <Route path="crypto" element={<Crypto />} />
              <Route path="rwa" element={<RWA />} />
              <Route path="chain-data" element={<ChainData />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </WalletProvider>
  );
}

export default App;
