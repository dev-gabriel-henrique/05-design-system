import { toast, ToastContainer } from 'react-toastify'
import { ToastBox } from './ToastBox'
import { ComponentProps } from 'react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {}

export function ToastProvider(props: ToastProps) {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar
      closeButton={false}
      newestOnTop
      closeOnClick
      draggable
      pauseOnHover
      toastStyle={{
        boxShadow: 'none',
        padding: 0,
      }}
      className="custom-toast"
      {...props}
    />
  )
}

export const showToast = {
  success: (title: string, message: string) =>
    toast(
      <ToastBox
        type="success"
        title={title}
        message={message}
        onClose={() => toast.dismiss()}
      />,
    ),
  error: (title: string, message: string) =>
    toast(
      <ToastBox
        type="error"
        title={title}
        message={message}
        onClose={() => toast.dismiss()}
      />,
    ),
  alert: (title: string, message: string) =>
    toast(
      <ToastBox
        type="alert"
        title={title}
        message={message}
        onClose={() => toast.dismiss()}
      />,
    ),
  info: (title: string, message: string) =>
    toast(
      <ToastBox
        type="info"
        title={title}
        message={message}
        onClose={() => toast.dismiss()}
      />,
    ),
}
