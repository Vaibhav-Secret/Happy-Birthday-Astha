import { motion } from "framer-motion";

export default function Note({ onNext }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-8 gradient-bg">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="glass max-w-3xl p-6 md:p-10 rounded-3xl"
      >
        <h2 className="text-3xl md:text-4xl mb-8">
          Before You Go...
        </h2>

        <p className="leading-8 text-base md:text-lg">
          Jitna maine aapko jaana hai, you're genuinely a strong and
          independent woman.
        </p>

        <br />

        <p className="leading-8 text-base md:text-lg">
          Chahe main kitne bhi playful taane de du aapke routine ko
          lekar, but honestly, you're doing great in life. Peak college,
          peak job, aur ab adulting responsibilities bhi — flat hunting
          aur sab — kaafi achhe se handle kar rahe ho, peak toh ho (chalo ab 150rs Gpay kardo).
        </p>

        <br />

        <p className="leading-8 text-base md:text-lg">
          And most importantly, may your influencer journey reach new
          heights before 24-teen ends.
        </p>

        <br />

        <p className="text-lg md:text-xl">
          Happy Birthday, Astha ✨
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