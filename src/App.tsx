import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { PackageProvider } from './context/PackageContext';

// Components
import { DemoHeaderNotice } from './components/DemoHeaderNotice';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PackageComparisonModal } from './components/PackageComparisonModal';
import { FloatingCompareButton } from './components/FloatingCompareButton';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Mission } from './pages/Mission';
import { Leadership } from './pages/Leadership';
import { LabourRights } from './pages/LabourRights';
import { Activities } from './pages/Activities';
import { News } from './pages/News';
import { Packages } from './pages/Packages';
import { ComplaintRegister } from './pages/ComplaintRegister';
import { ComplaintTrack } from './pages/ComplaintTrack';
import { Package2Dashboard } from './pages/Package2Dashboard';
import { Package3Dashboard } from './pages/Package3Dashboard';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <PackageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
            {/* Top Concept Demo Notice + Interactive Package Mode Switcher */}
            <DemoHeaderNotice />

            {/* Main Navigation Header */}
            <Header />

            {/* Page Routes */}
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mission" element={<Mission />} />
                <Route path="/leadership" element={<Leadership />} />
                <Route path="/rights" element={<LabourRights />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/news" element={<News />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/complaints/register" element={<ComplaintRegister />} />
                <Route path="/complaints/track" element={<ComplaintTrack />} />
                <Route path="/admin/p2" element={<Package2Dashboard />} />
                <Route path="/admin/national" element={<Package3Dashboard />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </div>

            {/* Institutional Footer & Concept Disclaimer */}
            <Footer />

            {/* Floating Quick Comparison Button */}
            <FloatingCompareButton />

            {/* Globally Accessible Package Comparison Matrix Modal */}
            <PackageComparisonModal />
          </div>
        </BrowserRouter>
      </PackageProvider>
    </LanguageProvider>
  );
}
