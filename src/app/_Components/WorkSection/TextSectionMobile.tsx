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
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2575, duration: 0.2, ease: "easeIn" }}
        >
          <h1 className="text-[16px] xs:font-[14px] font-semibold">{heading}</h1>
          <ul className="list-disc">
            {text.map((item, index) => {
              return (
                <li key={index} className="text-[14px] xs:text-[13px] ml-3  text-[#333]/80 ">
                  {item}
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};
