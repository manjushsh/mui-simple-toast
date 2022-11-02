import React, { useContext, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { MUISimpleToast, ToastContext } from 'mui-simple-toast'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const App = () => {
  const { setToast }: any = useContext(ToastContext)
  useEffect(() => {
    setInterval(() => {
      setToast({
        show: true,
        type: 'success',
        message: 'Welcome to the void.',
      })
    }, 5000)
  })

  return (
    <>
      <div>
        <h2>Default Toast</h2>
        <MUISimpleToast />
      </div>
    </>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
