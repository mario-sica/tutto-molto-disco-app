import { createContext, useContext, useRef, type ReactNode } from 'react';
import { Toast } from 'primereact/toast';

interface ToastContextType {
  showInfo: (summary: string, detail: string) => void;
  showSuccess: (summary: string, detail: string) => void;
  showWarn: (summary: string, detail: string) => void;
  showError: (summary: string, detail: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const toastRef = useRef<Toast>(null);

  const showInfo = (summary: string, detail: string) => {
    toastRef.current?.show({
      severity: 'info',
      summary,
      detail,
    });
  };

  const showSuccess = (summary: string, detail: string) => {
    toastRef.current?.show({
      severity: 'success',
      summary,
      detail,
    });
  };

  const showWarn = (summary: string, detail: string) => {
    toastRef.current?.show({
      severity: 'warn',
      summary,
      detail,
    });
  };

  const showError = (summary: string, detail: string) => {
    toastRef.current?.show({
      severity: 'error',
      summary,
      detail,
    });
  };

  return (
    <ToastContext.Provider value={{ showInfo, showSuccess, showWarn, showError }}>
      {children}
      <Toast ref={toastRef} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
