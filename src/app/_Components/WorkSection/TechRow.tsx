import { motion } from "framer-motion";

export const TechRow = () => {
  return (
    <div className=" lg:p-0">
      <span className="font-semibold">Technologies:</span>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((item, index) => {
          return (
            <motion.div
              initial={{ x: 200, y: 200, scale: 0 }}
              animate={{ x: 0, y: 0, scale: 1 }}
              transition={{ delay: 0.05 * index + 0.3 }}
              key={index}
              className="rounded-md w-10 xl:w-9 xl:h-9 h-10 bg-primaryGrey"
            ></motion.div>
          );
        })}
      </div>
    </div>
  );
};
