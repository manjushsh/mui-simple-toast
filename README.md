# mui-simple-toast - Simplified toaster/snackbar for MUI
A Simpler MUI Toast.

# How to use?

1. `import { MUISimpleToast, ToastContext } from 'mui-simple-toast'`
2. In your component, 
```
const { toast, setToast } = useContext(ToastContext)
```

and Set like this

```
setToast({
    show: true,
    type: 'error',
    message: 'Hi There!',
    })

```

