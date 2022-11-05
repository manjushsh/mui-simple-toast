import { SnackbarOrigin, AlertProps } from '@mui/material'

export interface ToastProps {
  variant?: 'standard' | 'filled' | 'outlined'
  duration?: number;
  toast: ToastObject;
  setToast: any;
}

export interface ToastConfig {
  anchorOrigin?: SnackbarOrigin
  duration?: number
  variant: ToastProps['variant']
}

export interface ToastObject {
  show: boolean;
  type?: AlertProps['variant'];
  message?: string;
}
