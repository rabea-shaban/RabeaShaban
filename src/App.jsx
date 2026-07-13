import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navbar from '@/components/Navbar';
import MobileDock from '@/components/MobileDock';
import BackToTop from '@/components/BackToTop';
import FloatingContact from '@/components/FloatingContact';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Projects from '@/pages/Projects';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import Certificates from '@/pages/Certificates';
import NotFound from '@/pages/NotFound';
import Footer from '@/components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <MobileDock />
          <BackToTop />
          <FloatingContact />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Certificates" element={<Certificates />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;