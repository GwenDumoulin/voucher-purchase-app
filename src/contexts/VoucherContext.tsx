import { createContext, ReactNode, useContext } from 'react';
import { useVoucherManagement } from '../hooks/useVoucherManagement';

const VoucherContext = createContext<ReturnType<typeof useVoucherManagement> | null>(null);

export const VoucherProvider = ({ children }: { children: ReactNode }) => {
  const value = useVoucherManagement();
  return (
    <VoucherContext.Provider value={value}>{children}</VoucherContext.Provider>
  );
};

export const useVouchers = () => {
  const context = useContext(VoucherContext);
  if (!context) {
    throw new Error('useVouchers must be used within a VoucherProvider');
  }
  return context;
};
