# mui-simple-toast - Simplified toaster/snackbar for MUI
A Simpler MUI Toast.

# How to use?

1. `import { MUISimpleToast, ToastContext } from 'mui-simple-toast'`
2. In your component, 
```
const { setToast } = useContext(ToastContext)
```

and Set toaster using ```seToast```

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
