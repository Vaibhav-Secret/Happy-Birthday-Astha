import { motion } from "framer-motion";

export default function Landing({ onOpen }) {
  return (
    <div className="section gradient-bg flex flex-col items-center justify-center text-center px-6">

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl md:text-8xl font-light"
      >
        Astha
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-xl"
      >
        I made a little something for your special day.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpen}
        className="mt-10 px-8 py-4 rounded-full bg-black text-white"
      >
        Open
      </motion.button>

    </div>
  );
}