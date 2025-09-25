import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { WalletProvider } from "./context/WalletContext";
import { lazy } from "react";

const Layout = lazy(() => import("./components/Layout").then(module => ({ default: module.default })));
const Login = lazy(() => import("./pages/Login").then(module => ({ default: module.default })));
const Dashboard = lazy(() => import("./pages/Dashboard").then(module => ({ default: module.default })));
const Lend = lazy(() => import("./pages/Lend").then(module => ({ default: module.default })));
const Bonds = lazy(() => import("./pages/Bonds").then(module => ({ default: module.default })));
const Stocks = lazy(() => import("./pages/Stocks").then(module => ({ default: module.default })));
const Crypto = lazy(() => import("./pages/Crypto").then(module => ({ default: module.default })));
const RWA = lazy(() => import("./pages/RWA").then(module => ({ default: module.default })));
const ChainData = lazy(() => import("./pages/ChainData").then(module => ({ default: module.default })));
const Stake = lazy(() => import("./pages/Stake").then(module => ({ default: module.default })));

function App() {
  return (
    <WalletProvider>
      <Router>
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
          <Routes>
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/"
              element={<Layout />}
            >
              <Route
                index
                element={
                  <Navigate
                    to="/dashboard"
                    replace
                  />
                }
              />
              <Route
                path="dashboard"
                element={<Dashboard />}
              />
              <Route
                path="lend"
                element={<Lend />}
              />
              <Route
                path="bonds"
                element={<Bonds />}
              />
              <Route
                path="stocks"
                element={<Stocks />}
              />
              <Route
                path="crypto"
                element={<Crypto />}
              />
              <Route
                path="rwa"
                element={<RWA />}
              />
              <Route
                path="chain-data"
                element={<ChainData />}
              />
              <Route
                path="stake"
                element={<Stake />}
              />
            </Route>
          </Routes>
        </div>
      </Router>
    </WalletProvider>
  );
}

export default App;
