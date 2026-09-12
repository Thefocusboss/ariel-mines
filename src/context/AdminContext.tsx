import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { asset } from '@/lib/utils';

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
  githubToken: string;
  isSyncing: boolean;
  lastSyncedAt: string | null;
  syncError: string | null;
  login: (email: string, password: string) => { success: boolean; error?: string };
  logout: () => void;
  setGithubToken: (token: string) => void;
  toggleMaintenanceMode: () => Promise<void>;
  updateMaintenanceConfig: (config: Partial<MaintenanceConfig>) => Promise<void>;
  fetchRemoteStatus: () => Promise<void>;
}

const AUTHORIZED_EMAIL = 'bjblinky@gmail.com';
const DEFAULT_PASSWORD = 'arieladmin2026';

const GIST_ID = '838f52c00f65b98192d6c68c2f3fb12d';
const REMOTE_GIST_RAW_URL = `https://gist.githubusercontent.com/Thefocusboss/${GIST_ID}/raw/maintenance.json`;

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

  const [githubToken, setGithubTokenState] = useState<string>(() => {
    return localStorage.getItem('ariel_github_pat') || '';
  });

  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [lastSyncedAt, setLastSyncedAt] = useState<string | null>(() => {
    return localStorage.getItem('ariel_maintenance_synced_at');
  });
  const [syncError, setSyncError] = useState<string | null>(null);

  // Fetch real-time maintenance status from remote cloud (Gist or local JSON fallback)
  const fetchRemoteStatus = useCallback(async () => {
    try {
      // 1. Try remote real-time Gist
      const gistUrl = `${REMOTE_GIST_RAW_URL}?_t=${Date.now()}`;
      const res = await fetch(gistUrl, {
        cache: 'no-store',
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        const data = await res.json();
        const enabled = Boolean(data.enabled);
        setIsMaintenanceModeState(enabled);
        localStorage.setItem('ariel_maintenance_mode', enabled ? 'true' : 'false');

        if (data.headline || data.message) {
          const newConfig: MaintenanceConfig = {
            headline: data.headline || DEFAULT_MAINTENANCE_CONFIG.headline,
            message: data.message || DEFAULT_MAINTENANCE_CONFIG.message,
            expectedReturnTime: data.expectedReturnTime || DEFAULT_MAINTENANCE_CONFIG.expectedReturnTime,
            emergencyPhone: data.emergencyPhone || DEFAULT_MAINTENANCE_CONFIG.emergencyPhone,
            emergencyEmail: data.emergencyEmail || DEFAULT_MAINTENANCE_CONFIG.emergencyEmail,
          };
          setMaintenanceConfig(newConfig);
          localStorage.setItem('ariel_maintenance_config', JSON.stringify(newConfig));
        }

        if (data.updatedAt) {
          setLastSyncedAt(data.updatedAt);
          localStorage.setItem('ariel_maintenance_synced_at', data.updatedAt);
        }
        return;
      }
    } catch {
      // Failed to reach Gist, try local static maintenance.json fallback
    }

    try {
      const localUrl = `${asset('maintenance.json')}?_t=${Date.now()}`;
      const res = await fetch(localUrl, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        const enabled = Boolean(data.enabled);
        setIsMaintenanceModeState(enabled);
        localStorage.setItem('ariel_maintenance_mode', enabled ? 'true' : 'false');
      }
    } catch {
      // Static file also not reachable, fallback to localStorage value
    }
  }, []);

  // Poll for remote maintenance updates every 30s and when tab gains focus
  useEffect(() => {
    fetchRemoteStatus();

    const interval = setInterval(fetchRemoteStatus, 30000);
    const handleFocus = () => fetchRemoteStatus();
    window.addEventListener('focus', handleFocus);

    return () => {
      clearInterval(interval);
      window.removeEventListener('focus', handleFocus);
    };
  }, [fetchRemoteStatus]);

  const setGithubToken = (token: string) => {
    const clean = token.trim();
    setGithubTokenState(clean);
    localStorage.setItem('ariel_github_pat', clean);
  };

  const login = (email: string, password: string): { success: boolean; error?: string } => {
    const cleanEmail = email.trim().toLowerCase();

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

  // Push state to remote cloud (GitHub Gist) so all production visitors see it immediately
  const pushToProduction = async (
    targetEnabled: boolean,
    targetConfig: MaintenanceConfig
  ): Promise<{ success: boolean; error?: string }> => {
    if (!githubToken) {
      return {
        success: false,
        error:
          'No GitHub Personal Access Token configured. Enter a token below with gist or repo permissions to broadcast changes to all production visitors worldwide.',
      };
    }

    setIsSyncing(true);
    setSyncError(null);

    const payload = {
      enabled: targetEnabled,
      headline: targetConfig.headline,
      message: targetConfig.message,
      expectedReturnTime: targetConfig.expectedReturnTime,
      emergencyPhone: targetConfig.emergencyPhone,
      emergencyEmail: targetConfig.emergencyEmail,
      updatedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${githubToken}`,
          'Content-Type': 'application/json',
          Accept: 'application/vnd.github.v3+json',
        },
        body: JSON.stringify({
          description: `Ariel Mines Production Maintenance Status - ${targetEnabled ? 'ACTIVE' : 'INACTIVE'}`,
          files: {
            'maintenance.json': {
              content: JSON.stringify(payload, null, 2),
            },
          },
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        const msg = errorData.message || `GitHub API returned HTTP ${res.status}`;
        setSyncError(msg);
        setIsSyncing(false);
        return { success: false, error: msg };
      }

      setLastSyncedAt(payload.updatedAt);
      localStorage.setItem('ariel_maintenance_synced_at', payload.updatedAt);
      setIsSyncing(false);
      return { success: true };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Network error communicating with GitHub API';
      setSyncError(msg);
      setIsSyncing(false);
      return { success: false, error: msg };
    }
  };

  const toggleMaintenanceMode = async () => {
    const nextState = !isMaintenanceMode;
    setIsMaintenanceModeState(nextState);
    localStorage.setItem('ariel_maintenance_mode', nextState ? 'true' : 'false');

    if (githubToken) {
      await pushToProduction(nextState, maintenanceConfig);
    }
  };

  const updateMaintenanceConfig = async (config: Partial<MaintenanceConfig>) => {
    const updated = { ...maintenanceConfig, ...config };
    setMaintenanceConfig(updated);
    localStorage.setItem('ariel_maintenance_config', JSON.stringify(updated));

    if (githubToken) {
      await pushToProduction(isMaintenanceMode, updated);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        isAdmin,
        adminEmail,
        isMaintenanceMode,
        maintenanceConfig,
        githubToken,
        isSyncing,
        lastSyncedAt,
        syncError,
        login,
        logout,
        setGithubToken,
        toggleMaintenanceMode,
        updateMaintenanceConfig,
        fetchRemoteStatus,
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
