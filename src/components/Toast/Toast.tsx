interface ToastProps {
  error: string
}

const Toast = ({error}: ToastProps) => {
  return (
    <div className="toast right-4 bottom-2 z-30 ">
      <div className="alert bg-error border-0 font-lexend font-normal text-bodyText text-sm">
        <span>{error}</span>
      </div>
    </div>
  )
}

export default Toast;