'use client'

import { useSendEmailMutation } from "@/app/hooks/use-send-email-mutation";
import { Toast } from "../Toasters/Toast";
import { Toaster } from "react-hot-toast";
import { Spinner } from "../Spinner/Spinner";

export const ContactForm = () => {
  const {mutate, status} = useSendEmailMutation(() => form?.reset())
  
if(!document) return null
const form = document.getElementById("contact-form") as HTMLFormElement

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    if( !formData.get("message")) return Toast("error", "Message is required")

    formData.append(
      "user_id",
      process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string
    );
    formData.append(
      "template_id",
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string
    );
    formData.append(
      "service_id",
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string
    );
    mutate(formData)

  };

  return (
    <>
      <form
        id="contact-form"
        onSubmit={handleSubmit}
         className={`w-4/6 lg:w-4/5 sm:w-full h-full my-6 bg-stone-950 border border-stone-600 rounded-md min-h-[450px] max-w-[530px]  p-8 sm:p-4 flex flex-col gap-8   `}
      >
        <div className="flex flex-col  w-2/3 sm:w-full ">
          <label htmlFor="name" className="text-stone-400 text-[12px] ">
            Name
          </label>
          <input
            required
            name="from_name"
            className=" bg-transparent  border-b border-stone-600 p-2 text-white text-[18px] focus:outline-none  focus:border-stone-300 autofill:bg-transparent  "
            type="text"
          />
        </div>

        <div className="flex flex-col w-2/3 sm:w-full">
          <label htmlFor="email" className="text-stone-400 text-[12px] ">
            Email
          </label>
          <input
            required
            name="from_email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            className=" bg-transparent  border-b border-stone-600 p-2 text-white text-[18px] focus:outline-none  focus:border-stone-300   transition-transform "
            type="email"
          />
        </div>

        <div className="flex flex-col w-full h-1/3 gap-4">
          <label htmlFor="message" className="text-stone-400 text-[12px] ">
            Message
          </label>
          <textarea
            name="message"
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
