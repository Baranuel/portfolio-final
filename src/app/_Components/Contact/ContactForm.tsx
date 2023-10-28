'use client'

import { useSendEmailMutation } from "@/app/hooks/use-send-email-mutation";
import { Toast } from "../Toasters/Toast";
import { Toaster } from "react-hot-toast";
import { Spinner } from "../Spinner/Spinner";
import { useForm } from "react-hook-form";

export type FormDataIO = {
  from_name: string;
  from_email: string;
  message: string;
  user_id: string;
  template_id: string;
  service_id: string;
}

export const ContactForm = () => {
  const {mutate, status} = useSendEmailMutation(() => reset() )
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormDataIO>()

  const handleSubmitForm =  (data:FormDataIO) => {
    if(!data.message) return Toast("error", "Please enter a message")
    mutate(data)
  };



  return (
    <>
      <form
        id="contact-form"
        onSubmit={handleSubmit(handleSubmitForm)}
         className={`w-4/6 lg:w-4/5 sm:w-full h-full my-6 bg-stone-950 border border-stone-600 rounded-md min-h-[450px] max-w-[530px]  p-8 sm:p-4 flex flex-col gap-8   `}
      >
        <div className="flex flex-col  w-2/3 sm:w-full ">
          <label htmlFor="name" className="text-stone-400 text-[12px] ">
            Name
          </label>
          <input
            {...register("from_name", { required: true })}
            className=" bg-transparent  border-b border-stone-600 p-2 text-white text-[18px] focus:outline-none  focus:border-stone-300 autofill:bg-transparent  "
          />
        </div>

        <div className="flex flex-col w-2/3 sm:w-full">
          <label htmlFor="email" className="text-stone-400 text-[12px] ">
            Email
          </label>
          <input
            {...register("from_email", { required: true })}
            className=" bg-transparent  border-b border-stone-600 p-2 text-white text-[18px] focus:outline-none  focus:border-stone-300   transition-transform "
            type="email"
          />
        </div>

        <div className="flex flex-col w-full h-1/3 gap-4">
          <label htmlFor="message" className="text-stone-400 text-[12px] ">
            Message
          </label>
          <textarea
            {...register("message", { required: true })}
            className=" bg-transparent  border-b border-stone-600 p-2 text-white text-[18px] focus:outline-none  focus:border-stone-300 autofill:bg-re500  transition-transform  resize-none"
          />
        </div>
    {status === 'loading' ? <button
     className=" text-stone-900 border flex items-center justify-center border-stone-900 w-2/5 sm:w-full py-2 rounded-md bg-stone-100"
   >
     <Spinner />
   </button> :
     <button
     type="submit"
     className=" text-stone-900 border border-stone-900 w-2/5 sm:w-full py-2 rounded-md bg-stone-100"
   >
     {status === 'success' ? "Message sent!" : "Send"}
   </button>
   }
      </form>
      <Toaster containerStyle={{top:30}} />
    </>
  );
};
