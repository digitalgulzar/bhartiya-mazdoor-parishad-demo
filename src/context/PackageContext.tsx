import React, { createContext, useContext, useState } from 'react';
import { getStoredPackage, setStoredPackage } from '../utils/storage';

export type PackageType = 'pkg1' | 'pkg2' | 'pkg3';

interface PackageContextType {
  activePackage: PackageType;
  setActivePackage: (pkg: PackageType) => void;
  isWebsiteOnly: boolean;
  hasComplaintPortal: boolean;
  hasStandardAdmin: boolean;
  hasNationalSystem: boolean;
  isComparisonModalOpen: boolean;
  openComparisonModal: () => void;
  closeComparisonModal: () => void;
}

const PackageContext = createContext<PackageContextType | undefined>(undefined);

export const PackageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activePackage, setActivePackageState] = useState<PackageType>(getStoredPackage());
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);

  const setActivePackage = (pkg: PackageType) => {
    setActivePackageState(pkg);
    setStoredPackage(pkg);
  };

  const isWebsiteOnly = activePackage === 'pkg1';
  const hasComplaintPortal = activePackage === 'pkg2' || activePackage === 'pkg3';
  const hasStandardAdmin = activePackage === 'pkg2' || activePackage === 'pkg3';
  const hasNationalSystem = activePackage === 'pkg3';

  const openComparisonModal = () => setIsComparisonModalOpen(true);
  const closeComparisonModal = () => setIsComparisonModalOpen(false);

  return (
    <PackageContext.Provider
      value={{
        activePackage,
        setActivePackage,
        isWebsiteOnly,
        hasComplaintPortal,
        hasStandardAdmin,
        hasNationalSystem,
        isComparisonModalOpen,
        openComparisonModal,
        closeComparisonModal,
      }}
    >
      {children}
    </PackageContext.Provider>
  );
};

export const usePackage = (): PackageContextType => {
  const context = useContext(PackageContext);
  if (!context) {
    throw new Error('usePackage must be used within a PackageProvider');
  }
  return context;
};
