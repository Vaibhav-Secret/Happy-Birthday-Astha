import { motion } from "framer-motion";

const photos = [
  `${import.meta.env.BASE_URL}photo1.jpg`,
  `${import.meta.env.BASE_URL}photo2.jpg`,
  `${import.meta.env.BASE_URL}photo3.jpg`,
];

function Photo({ photo, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.8,
      }}
      className="rounded-3xl overflow-hidden"
    >
      <img
        src={photo}
        alt=""
        className="
          w-32 h-44
          sm:w-40 sm:h-56
          md:w-56 md:h-72
          object-cover
          rounded-2xl
        "
      />
    </motion.div>
  );
}

export default function Gallery({ onNext }) {
  return (
    <section className="min-h-screen gradient-bg flex items-center justify-center px-4 py-8">
      <div className="text-center w-full max-w-5xl">
        <h2 className="text-3xl md:text-4xl mb-8 md:mb-10">
          A Few Favorite Photos
        </h2>

        <div className="flex flex-col items-center gap-4 md:gap-8">

          <div className="flex justify-center">
            <Photo photo={photos[0]} delay={0} />
          </div>

          <div className="flex justify-center gap-4 md:gap-8">
            <Photo photo={photos[1]} delay={0.5} />
            <Photo photo={photos[2]} delay={1} />
          </div>

        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          onClick={onNext}
          className="mt-8 md:mt-12 px-8 py-4 rounded-full bg-black text-white"
        >
          Continue
        </motion.button>
      </div>
    </section>
  );
}