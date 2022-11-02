import React, { useContext } from 'react'
import { Alert, IconButton, Snackbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { ToastContext, ToastProvider } from './toast-context'
import { ToastProps, ToastConfig } from '../index.d'

const MUISimpleToast = (props: ToastProps) => {
  const { toast, setToast } = useContext(ToastContext)
  const onToastClose = () =>
    setToast({
      show: false,
      type: 'info',
      message: '',
    })
  const SNACKBAR_CONFIG: ToastConfig = {
    anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
    duration: 5000,
    variant: 'filled',
  }

  return (
    <ToastProvider>
      <Snackbar
        open={toast?.show}
        autoHideDuration={props?.duration || SNACKBAR_CONFIG.duration}
        onClose={onToastClose}
        anchorOrigin={SNACKBAR_CONFIG.anchorOrigin}
        {...props}
      >
        <Alert
          action={
            <IconButton size='small' color='inherit' aria-label='close' onClick={onToastClose}>
              <CloseIcon fontSize='inherit' />
            </IconButton>
          }
          variant={props?.variant || SNACKBAR_CONFIG.variant}
        >
          {toast?.message || ''}
        </Alert>
      </Snackbar>
    </ToastProvider>
  )
}

export { MUISimpleToast, ToastContext }