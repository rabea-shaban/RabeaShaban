import BackToTop from '@/components/BackToTop';
import FloatingContact from '@/components/FloatingContact';
import Footer from '@/components/Footer';
import MobileDock from '@/components/MobileDock';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { useEffect, lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';

// Lazy load pages for code splitting (reduces initial JS payload)
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Projects = lazy(() => import('@/pages/Projects'));
const Services = lazy(() => import('@/pages/Services'));
const Contact = lazy(() => import('@/pages/Contact'));
const Certificates = lazy(() => import('@/pages/Certificates'));
const NotFound = lazy(() => import('@/pages/NotFound'));

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
            <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"></div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
