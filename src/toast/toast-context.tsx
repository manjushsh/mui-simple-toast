/* eslint-disable @typescript-eslint/no-empty-function */
// ** React Imports
import React, { createContext, useState, ReactNode } from 'react'
import { defaultToast } from '..'
import { ToastObject } from '../index.d'

const defaultProvider: any = {
  toast: defaultToast,
  setToast: () => {},
}
const ToastContext = createContext(defaultProvider)

const ToastProvider = ({ children }: Props) => {
  // ** States
  const [toast, updateToast] = useState(defaultToast)
  const setToast = (toastData: ToastObject) => updateToast({ ...toast, ...toastData })
  const values = {
    toast,
    setToast,
  }
  return <ToastContext.Provider value={values}>{children}</ToastContext.Provider>
}

export type Props = {
  children: ReactNode
}

export { ToastContext, ToastProvider }
