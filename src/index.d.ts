import { SnackbarOrigin } from '@mui/material'

export interface ToastProps {
  variant?: 'standard' | 'filled' | 'outlined'
  duration?: number
}

export interface ToastConfig {
  anchorOrigin: SnackbarOrigin
  duration?: number
  variant: ToastProps['variant']
}
