import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageContainer } from '@/components/layout/PageContainer';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { BusinessAreasPage } from '@/pages/BusinessAreasPage';
import { OperationsPage } from '@/pages/OperationsPage';
import { ApproachPage } from '@/pages/ApproachPage';
import { ResourcesPage } from '@/pages/ResourcesPage';
import { SuppliersPage } from '@/pages/SuppliersPage';
import { InsightsPage } from '@/pages/InsightsPage';
import { ContactPage } from '@/pages/ContactPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-gold-light selection:text-stone-950">
        <Navbar />
        <div className="flex-1">
          <PageContainer>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/business-areas" element={<BusinessAreasPage />} />
              <Route path="/operations" element={<OperationsPage />} />
              <Route path="/approach" element={<ApproachPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/suppliers" element={<SuppliersPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </PageContainer>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
