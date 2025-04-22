import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
Navigate
} from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Dashboard from "./components/Pages/Dashboard";
import OnlineMandi from "./components/Pages/OnlineMandi";
import SoilTesting from "./components/Pages/SoilTesting";
import IrrigationCalendar from "./components/Pages/IrrigationCalendar";
import AboutUs from "./components/Pages/AboutUs";
import CallbackEmail from "./components/Pages/CallbackAuthEmail";
import Navbar from "./components/ui/navbar";
import { supabase } from "./components/lib/supabaseClient";
function LayoutWrapper({ children }) {
  const location = useLocation();
  const hideNavbarOn = ["/login", "/register", "/auth/callback", "/dashboard"];
  const hideNavbar = hideNavbarOn.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main>{children}</main>
    </>
  );
}

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    // Show loading indicator while checking auth status
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};
function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/online-mandi" element={<OnlineMandi />} />
          <Route path="/soil-testing" element={<SoilTesting />} />
          <Route path="/irrigation-calendar" element={<IrrigationCalendar />} />
          <Route path="/auth/callback" element={<CallbackEmail />} />
          <Route path="/about-us" element={<AboutUs />} />{" "}
          {/* Redirect to Home for any unknown routes */}
          {/* Add more routes as needed */}
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
