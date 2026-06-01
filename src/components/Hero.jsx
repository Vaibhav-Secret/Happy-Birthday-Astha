import { motion } from "framer-motion";

export default function Hero({ onNext }) {
  return (
    <section className="h-screen gradient-bg flex items-center justify-center px-8">

      <div className="text-center max-w-3xl">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-light"
        >
          Happy Birthday 🎉
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-xl md:text-2xl"
        >
        Welcome to 24-teen
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={onNext}
          className="mt-12 px-8 py-4 rounded-full bg-black text-white"
        >
          Continue
        </motion.button>

      </div>

    </section>
  );
}