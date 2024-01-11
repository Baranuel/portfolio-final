import { motion } from "framer-motion";
import Image from "next/image";
import Clerk from '../../../../public/clerk.svg'
import NextJSIcon from '../../../../public/nextdotjs.svg'
import TailwindIcon from '../../../../public/tailwindcss.svg'
import JavaScriptIcon from '../../../../public/javascript.svg'
import TypeScriptIcon from '../../../../public/typescript.svg'
import VercelIcon from '../../../../public/vercel.svg'
import FramerIcon from '../../../../public/framer.svg'
import ReactQueryIcon from '../../../../public/reactquery.svg'
import MongoDBIcon from '../../../../public/mongodb.svg'
import ReactHookFormIcon from '../../../../public/reacthookform.svg'
import ReactIcon from '../../../../public/react.svg'
import Postgresql from '../../../../public/postgresql.svg'
import Antdesign from '../../../../public/antdesign.svg'


export const TechRow = ({technologies}: {technologies: string[]}) => {
  
  console.log(technologies)

const icons = {
  NextJs: NextJSIcon,
  TailwindCss: TailwindIcon,
  React: ReactIcon,
  MongoDB: MongoDBIcon,
  reactHookForm: ReactHookFormIcon,
  javaScript: JavaScriptIcon,
  TypeScript: TypeScriptIcon,
  Vercel: VercelIcon,
  Framer: FramerIcon,
  Postgresql: Postgresql,
  Clerk: Clerk,
  Antdesign: Antdesign,

}

  return (
    <div className=" lg:p-0">
      <span className="font-semibold">Technologies:</span>
      <div className="flex gap-1">
        {technologies.map((item, index) => {
          return (
            <motion.div
              initial={{ x: 200, y: 200, scale: 0 }}
              animate={{ x: 0, y: 0, scale: 1 }}
              transition={{ delay: 0.05 * index + 0.3 }}
              key={index}
              className=" relative flex items-center justify-center rounded-md w-10 h-10 p-1 bg-slate-50 shadow-md"
            >
              <div className="relative w-5/6 h-5/6 ">
              <Image src={icons[item as  keyof typeof icons]} alt='image' fill />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
