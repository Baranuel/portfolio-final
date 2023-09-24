{
  /* <AnimatePresence>
{isOpen && (
  <>
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-red-200 relative rounded-xl w-2/5 sm:h-1/2  h-full"
    >
      {" "}
      <Image
        src={pepa}
        alt="pepa"
        layout="fill"
        objectFit="cover"
        className="rounded-xl"
      />
    </motion.div>
    <motion.span
      initial={{ height: 0 }}
      animate={{ height: "90%" }}
      transition={{ delay: 0.3 }}
      className="h-5/6 lg:hidden self-center bg-[#333] w-[1px]"
    />{" "}

    <TextSection />
  </>
)}
</AnimatePresence> */
}
