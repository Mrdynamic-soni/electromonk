import React from "react";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  position?:
    | "top-right"
    | "top-center"
    | "top-left"
    | "bottom-right"
    | "bottom-center"
    | "bottom-left";
}

const Toast: React.FC<Props> = ({ position = "top-right" }) => {
  const defaultOptions = {
    position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };

  return <ToastContainer {...defaultOptions} />;
};

export const showToast = (
  message: string,
  type: TypeOptions = "info",
  options?: object
) => {
  toast(message, { type, ...options });
};

export default Toast;
