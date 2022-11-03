/* eslint-disable @typescript-eslint/no-empty-function */
// ** React Imports
import React, { createContext, useState, ReactNode } from 'react'
const ToastContext = createContext({
  toast: {
    show: false,
    type: 'info',
    message: '',
  },
  setToast: () => {},
} as any)

const ToastProvider = ({ children }: Props) => {
  // ** States
  const [toast, updateToast] = useState({
    show: false,
    type: 'info',
    message: '',
  })
  const setToast = (toastData: SetToastParams) => updateToast({ ...toast, ...toastData })
  const values = {
    toast,
    setToast,
  }
  return <ToastContext.Provider value={values}>{children}</ToastContext.Provider>
}

export interface SetToastParams {
  show?: boolean
  type?: 'success' | 'info' | 'warning' | 'error'
  message?: string
}

export type Props = {
  children: ReactNode
}

export { ToastContext, ToastProvider }
