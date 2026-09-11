import React, { createContext, useContext, useState, useEffect } from 'react';

export interface MaintenanceConfig {
  headline: string;
  message: string;
  expectedReturnTime?: string;
  emergencyPhone: string;
  emergencyEmail: string;
}

interface AdminContextType {
  isAdmin: boolean;
  adminEmail: string | null;
  isMaintenanceMode: boolean;
  maintenanceConfig: MaintenanceConfig;
  login: (email: string, password: string) => { success: boolean; error?: string };
  logout: () => void;
  toggleMaintenanceMode: () => void;
  setMaintenanceMode: (enabled: boolean) => void;
  updateMaintenanceConfig: (config: Partial<MaintenanceConfig>) => void;
}

const AUTHORIZED_EMAIL = 'bjblinky@gmail.com';
const DEFAULT_PASSWORD = 'arieladmin2026';

const DEFAULT_MAINTENANCE_CONFIG: MaintenanceConfig = {
  headline: 'SCHEDULED SYSTEM MAINTENANCE',
  message:
    'Ariel Mines and Koncepts Ltd digital infrastructure is currently undergoing scheduled technical updates and system maintenance. Our operations and direct communication lines remain active.',
  expectedReturnTime: 'Systems will resume normal public operations shortly.',
  emergencyPhone: '+234 8139630807',
  emergencyEmail: 'arielbulus7@gmail.com',
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    const saved = localStorage.getItem('ariel_admin_authenticated');
    const email = localStorage.getItem('ariel_admin_email');
    return saved === 'true' && email === AUTHORIZED_EMAIL;
  });

  const [adminEmail, setAdminEmail] = useState<string | null>(() => {
    return localStorage.getItem('ariel_admin_email');
  });

  const [isMaintenanceMode, setIsMaintenanceModeState] = useState<boolean>(() => {
    const saved = localStorage.getItem('ariel_maintenance_mode');
    return saved === 'true';
  });

  const [maintenanceConfig, setMaintenanceConfig] = useState<MaintenanceConfig>(() => {
    const saved = localStorage.getItem('ariel_maintenance_config');
    if (saved) {
      try {
        return { ...DEFAULT_MAINTENANCE_CONFIG, ...JSON.parse(saved) };
      } catch {
        return DEFAULT_MAINTENANCE_CONFIG;
      }
    }
    return DEFAULT_MAINTENANCE_CONFIG;
  });

  useEffect(() => {
    localStorage.setItem('ariel_maintenance_mode', isMaintenanceMode ? 'true' : 'false');
  }, [isMaintenanceMode]);

  useEffect(() => {
    localStorage.setItem('ariel_maintenance_config', JSON.stringify(maintenanceConfig));
  }, [maintenanceConfig]);

  const login = (email: string, password: string): { success: boolean; error?: string } => {
    const cleanEmail = email.trim().toLowerCase();
    
    // Strict restriction to bjblinky@gmail.com only
    if (cleanEmail !== AUTHORIZED_EMAIL.toLowerCase()) {
      return {
        success: false,
        error: `Access Denied: Only ${AUTHORIZED_EMAIL} is authorized to access administrative systems.`,
      };
    }

    if (password !== DEFAULT_PASSWORD) {
      return {
        success: false,
        error: 'Invalid administrative security credential. Please verify the password.',
      };
    }

    setIsAdmin(true);
    setAdminEmail(cleanEmail);
    localStorage.setItem('ariel_admin_authenticated', 'true');
    localStorage.setItem('ariel_admin_email', cleanEmail);

    return { success: true };
  };

  const logout = () => {
    setIsAdmin(false);
    setAdminEmail(null);
    localStorage.removeItem('ariel_admin_authenticated');
    localStorage.removeItem('ariel_admin_email');
  };

  const toggleMaintenanceMode = () => {
    setIsMaintenanceModeState((prev) => !prev);
  };

  const setMaintenanceMode = (enabled: boolean) => {
    setIsMaintenanceModeState(enabled);
  };

  const updateMaintenanceConfig = (config: Partial<MaintenanceConfig>) => {
    setMaintenanceConfig((prev) => ({ ...prev, ...config }));
  };

  return (
    <AdminContext.Provider
      value={{
        isAdmin,
        adminEmail,
        isMaintenanceMode,
        maintenanceConfig,
        login,
        logout,
        toggleMaintenanceMode,
        setMaintenanceMode,
        updateMaintenanceConfig,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
