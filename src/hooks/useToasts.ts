import { toast } from 'react-toastify';

const defaultValue = 'bottom-center';

type Positions =
  | 'top-right'
  | 'top-center'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-center'
  | 'bottom-left';

interface Toasts {
  showError: (text: string, duration: number, position?: Positions) => React.ReactText;
  showWarning: (text: string, duration: number, position?: Positions) => React.ReactText;
  showSuccess: (text: string, duration: number, position?: Positions) => React.ReactText;
  showToast: (text: string, duration: number, position?: Positions) => React.ReactText;
}

export const useToasts = (): Toasts => {
  return {
    showError: (text: string, duration: number, position?: Positions): React.ReactText =>
      toast.error(text, {
        autoClose: duration,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        position: position || defaultValue,
      }),
    showWarning: (text: string, duration: number, position?: Positions): React.ReactText =>
      toast.warning(text, {
        autoClose: duration,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        position: position || defaultValue,
      }),
    showSuccess: (text: string, duration: number, position?: Positions): React.ReactText =>
      toast.success(text, {
        autoClose: duration,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        position: position || defaultValue,
      }),
    showToast: (text: string, duration: number, position?: Positions): React.ReactText =>
      toast.dark(text, {
        autoClose: duration,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        position: position || defaultValue,
      }),
  };
};
