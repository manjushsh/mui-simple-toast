import MUISimpleToast from './toast'
import { ToastObject } from './index.d'

export default MUISimpleToast
export const defaultToast: ToastObject = {
    show: false,
    type: 'info',
    message: '',
};