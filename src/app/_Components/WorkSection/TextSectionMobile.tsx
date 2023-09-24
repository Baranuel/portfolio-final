import { motion } from "framer-motion";

export const TextSectionMobile = ({
  text,
  heading,
}: {
  text: string[];
  heading: string;
}) => {
  return (
    <div className=" flex-1 h-full flex flex-col gap-0 ">
      <div className="h-fit w-full flex  gap-4">
        {" "}
        {/* text container */}
        {/* <motion.div   initial={{scale:0,opacity:0 }} animate={{scale:1, opacity:1}} transition={{delay:0.25, duration:0.2, ease:'easeIn'}}>
            <h1 className="text-[16px] font-semibold">CMS</h1>
            <p className="text-[14px] lg:text-[13px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Corporis deserunt error beatae explicabo animi, corrupti
              et quae? Facere, perspiciatis ullam!
            </p>
          </motion.div> */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2575, duration: 0.2, ease: "easeIn" }}
        >
          <h1 className="text-[16px] font-semibold">{heading}</h1>
          <ul>
            {text.map((item, index) => {
              return (
                <li key={index} className="text-[14px]   ">
                  {item}
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
      {/* <div className="lg:hidden">
            <TechRow />
          </div> */}
    </div>
  );
};
