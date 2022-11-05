# mui-simple-toast - Simplified toaster/snackbar for MUI
A Simpler MUI Toast.

# How to use?

 In your component/Root component(Tou can use React Context API), 
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

In return method of component, add ```<MUISimpleToast />```
