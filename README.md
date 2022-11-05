# mui-simple-toast - Simplified toaster/snackbar for MUI
A Simpler MUI Toast.

# [Demo](https://codesandbox.io/s/mui-simple-toast-g5ei8i?file=/src/index.tsx)

## If install fails, try running
`npm i --legacy-peer-deps`

# How to use?

You can set toaster using ```seToast```

Example on API Call:
```
fetch(url)
.then(() => setToast({
    show: true,
    type: 'success',
    message: 'Success!',
}))
.catch(err => setToast({
    show: true,
    type: 'error',
    message: err?.message || '',
    }))

```

 ### In your component/Root component, 

```
import React, { useEffect, useState } from 'react';
import MUISimpleToast, { defaultToast } from 'mui-simple-toast/cjs'
import './App.css';

function App() {

  const  [toast, setToast] = useState(defaultToast)

  useEffect(() => {
    setInterval(() => {
        setToast({
          show: true,
          type: 'success',
          message: 'Welcome to Simpler toast!',
        })
    }, 3000)
  }, [])

  return (
      <div className="App">
        <h1>Hi There. Can you see some toast?</h1>>
        <MUISimpleToast toast={toast} setToast={setToast} />
      </div>
  );
}

export default App;

```

In return method of component, add ```<MUISimpleToast toast={toast} setToast={setToast} />```



### Or you can use Context API

in index.js

```

import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { defaultToast } from 'mui-simple-toast/cjs';

/** Create a Context for Toast Wrapper*/
export const ToastContext = createContext(defaultToast)
const ToastProvider = ({ children }: any) => {
  // ** States
  const [toast, updateToast] = useState(defaultToast)
  const setToast = (toastData: any) => updateToast({ ...toast, ...toastData })
  const values = {
    toast,
    setToast,
  }
  return <ToastContext.Provider value={values}>{children}</ToastContext.Provider>
}

root.render(
  <React.StrictMode>
    /** Wrap your Root component with Context Provider */
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>
);

```

In your App/ Child Component, add

```

const { toast, setToast }: any = useContext(ToastContext)

```

and in return of same component,

```
<MUISimpleToast toast={toast} setToast={setToast} />

```
