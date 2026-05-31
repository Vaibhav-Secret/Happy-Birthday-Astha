import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="section gradient-bg flex items-center justify-center px-8">

      <div className="text-center">

        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl md:text-8xl"
        >
          🎉 Happy Birthday
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mt-8 text-xl"
        >
          Another trip around the sun,
          and somehow the world got a little brighter.
        </motion.p>

      </div>

    </section>
  );
}