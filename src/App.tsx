import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AdminProvider, useAdmin } from '@/context/AdminContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageContainer } from '@/components/layout/PageContainer';
import { MaintenanceScreen } from '@/components/maintenance/MaintenanceScreen';
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
import { AdminPage } from '@/pages/admin/AdminPage';
import { AlertCircle, Shield } from 'lucide-react';

const AppContent: React.FC = () => {
  const location = useLocation();
  const { isMaintenanceMode, isAdmin } = useAdmin();

  const isAdminRoute = location.pathname.startsWith('/admin');

  // If maintenance mode is active, user is not admin, and not on the admin route
  if (isMaintenanceMode && !isAdmin && !isAdminRoute) {
    return <MaintenanceScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-gold-light selection:text-stone-950">
      {/* Admin Floating Banner when Maintenance is Active and Admin is Previewing */}
      {isMaintenanceMode && isAdmin && !isAdminRoute && (
        <div className="bg-amber-500 text-stone-950 px-4 py-2 text-xs font-mono font-bold flex items-center justify-between sticky top-0 z-50 shadow-md">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-stone-950 shrink-0" />
            <span>
              MAINTENANCE MODE IS ACTIVE: Public visitors currently see the maintenance screen.
            </span>
          </div>
          <Link
            to="/admin"
            className="px-3 py-1 bg-stone-950 text-white hover:bg-stone-800 rounded text-[11px] uppercase tracking-wider flex items-center gap-1 transition-colors"
          >
            <Shield className="w-3 h-3 text-gold" />
            <span>Open Admin Console</span>
          </Link>
        </div>
      )}

      {/* Only show public navbar and footer if not on /admin */}
      {!isAdminRoute && <Navbar />}

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
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PageContainer>
      </div>

      {!isAdminRoute && <Footer />}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <AdminProvider>
        <AppContent />
      </AdminProvider>
    </Router>
  );
};

export default App;
