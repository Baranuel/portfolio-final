
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios-instance";
import { Toast } from "../_Components/Toasters/Toast";
import { FormDataIO } from "../_Components/Contact/ContactForm";

const user_id = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string
const template_id = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string
const service_id = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string


export const useSendEmailMutation = (callback: () => void) => {

    return useMutation(
        async (data:FormDataIO) => {

          const dataToSend = {
            user_id,
            template_id,
            service_id,
            template_params: {
              ...data
            }
          }

          const res = await axiosInstance.post(
            "https://api.emailjs.com/api/v1.0/email/send",
            dataToSend,
            {
              headers:{
                contentType: 'application/json'
              }
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