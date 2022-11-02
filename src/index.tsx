import React from 'react'
import MUIToast from './toast/toast'
import { ToastProvider, ToastContext } from './toast/toast-context'

const MUISimpleToast = (props: any) => (
  <ToastProvider>
    <MUIToast {...props} />
  </ToastProvider>
)

export default {
  MUISimpleToast,
  ToastContext,
}
