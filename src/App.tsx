/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Process from './pages/Process';
import Corporate from './pages/Corporate';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import KVKK from './pages/KVKK';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePreferences from './pages/CookiePreferences';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';
import ProjectDetail from './pages/ProjectDetail';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import SEO from './components/SEO';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <HelmetProvider>
          <Router>
            <SEO />
            <ScrollToTop />
            <BackToTop />
            <div className="min-h-screen flex flex-col selection:bg-primary selection:text-on-primary">
              <Navbar />

              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projeler" element={<Projects />} />
                  <Route path="/projeler/:id" element={<ProjectDetail />} />
                  <Route path="/surec" element={<Process />} />
                  <Route path="/kurumsal" element={<Corporate />} />
                  <Route path="/iletisim" element={<Contact />} />
                  <Route path="/teklif-al" element={<Quote />} />
                  <Route path="/kvkk" element={<KVKK />} />
                  <Route path="/gizlilik-politikasi" element={<PrivacyPolicy />} />
                  <Route path="/cerez-tercihleri" element={<CookiePreferences />} />
                  <Route path="/sss" element={<FAQ />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>

              <Footer />
            </div>
          </Router>
        </HelmetProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
