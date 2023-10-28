
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios-instance";
import toast from "react-hot-toast";
import { Toast } from "../_Components/Toasters/Toast";




export const useSendEmailMutation = (callback: () => void) => {

    return useMutation(
        async (data: FormData) => {
          const res = await axiosInstance.post(
            "https://api.emailjs.com/api/v1.0/email/send-form",
            data,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          return res.data;
        },
        {
          onError: (err) => {
            console.log(err);
            Toast("error", "Error Sending Email");
          },
          // Always refetch after error or success:
          onSettled: () => {
            Toast("success", "Email Sent Successfully");
            callback();
          },
        }
      );

}