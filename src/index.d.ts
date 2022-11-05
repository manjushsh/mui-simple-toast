import { SnackbarOrigin, AlertProps } from '@mui/material'

export interface ToastProps {
  variant?: ToastProps['variant']
  duration?: number;
  toast: ToastObject;
  setToast: any;
  alertProps?: AlertProps;
}

export interface ToastConfig {
  anchorOrigin?: SnackbarOrigin
  duration?: number
  variant: ToastProps['variant']
}

export interface ToastObject {
  show: boolean;
  type?: AlertProps['severity'];
  message?: string;
}
