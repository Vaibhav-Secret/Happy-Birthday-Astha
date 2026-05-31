import { motion } from "framer-motion";

export default function Note({ onNext }) {
  return (
    <section className="h-screen flex items-center justify-center px-8 gradient-bg">

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="glass max-w-3xl p-10 rounded-3xl"
      >

        <h2 className="text-4xl mb-8">
          A Small Birthday Wish
        </h2>

        <p className="leading-8 text-lg">
          Wishing you a year filled with happiness,
          exciting opportunities,
          memorable adventures,
          and plenty of reasons to smile.
        </p>

        <br />

        <p className="leading-8 text-lg">
          I hope this birthday brings everything
          you've been hoping for and marks the
          beginning of an amazing chapter ahead.
        </p>

        <br />

        <p className="leading-8 text-lg">
          Have a wonderful day and make lots of
          beautiful memories.
        </p>

        <br />

        <p className="text-xl">
          Happy Birthday, Astha.
        </p>

        <button
          onClick={onNext}
          className="mt-10 px-8 py-4 bg-black text-white rounded-full"
        >
          One Last Thing →
        </button>

      </motion.div>

    </section>
  );
}