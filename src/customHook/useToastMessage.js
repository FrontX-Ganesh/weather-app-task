import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useToastMessage = () => {
  useEffect(() => {
    toast.dismiss();
    return () => toast.dismiss();
  }, []);

  const showToast = (message, type = 'success', options) => {
    const toastOptions = { ...options };

    switch (type) {
      case 'success':
        toast.success(message, toastOptions);
        break;
      case 'error':
        toast.error(message, toastOptions);
        break;
      case 'warning':
        toast.warning(message, toastOptions);
        break;
      default:
        toast(message, toastOptions);
    }
  };

  return { showToast, ToastContainer };
};

export default useToastMessage;