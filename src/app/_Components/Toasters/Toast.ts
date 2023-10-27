import toast from "react-hot-toast"

const toastErrorConfig = {
    duration: 1000,
    style: {
      border: "1px solid #9F1239",
      color: "#9F1239",
    },
    iconTheme: {
      primary: "#9F1239",
      secondary: "#fff",
    },
  };

  const toastSuccessConfig = {
    duration: 1000,
    style: {
      border: "1px solid #16A34A",
      color: "#16A34A",
    },
    iconTheme: {
      primary: "#16A34A",
      secondary: "#fff",
    },
  };

export const Toast = (state:'success' | 'error', message?:string) => {

    switch (state) {
        case 'success':
            return toast.success(message ??'Success', toastSuccessConfig)
        case 'error':
            return toast.error(message ?? 'Error', toastErrorConfig)
        default:
            return toast.error(message ??'Error', toastErrorConfig)
    }

}