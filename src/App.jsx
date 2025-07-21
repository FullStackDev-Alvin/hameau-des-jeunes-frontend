import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Dashboard, { AdminLogin } from './Pages/DashboardComponents';
import Gallery from './Pages/Gallery';
import Blogs from './Pages/Blogs';
import Loader from './Components/Loader';
import FatherHermannBlog from './Pages/FatherHermannBlog';
import ETSKMushaShowcase from './Pages/ETSKMusha';
import ContactSection from './Pages/ContactUs';
import ScrollToTop from './Components/ScrollToTop';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('authToken');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake delay to simulate loading (replace with real data load if needed)
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <Navbar />
      <div className="max-w-screen ">
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/father-hermann" element={<FatherHermannBlog/>}></Route>
          <Route path="/etsk-musha" element={<ETSKMushaShowcase/>}></Route>
          <Route path="/Contacts" element={<ContactSection/>}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
