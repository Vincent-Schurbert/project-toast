import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback((message, selectedVariant) => {
    if (message.trim() === "") {
      alert("Please enter a message for the toast.");
      return false;
    }

    const newToast = {
      id: crypto.randomUUID(),
      variant: selectedVariant,
      message: message,
    };

    setToasts((prevToasts) => [...prevToasts, newToast]);
    return true;
  }, []);

  const deleteToast = React.useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, deleteToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
