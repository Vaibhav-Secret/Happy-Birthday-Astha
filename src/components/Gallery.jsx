import { motion } from "framer-motion";

const photos = [
  "/photo1.jpg",
  "/photo2.jpg",
  "/photo3.jpg",
];

export default function Gallery() {
  return (
    <section className="section flex items-center">

      <div className="w-full overflow-x-auto">

        <div className="flex gap-10 px-10 py-10 min-w-max">

          {photos.map((photo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass p-4 rounded-3xl"
            >
              <img
                src={photo}
                alt=""
                className="w-72 h-96 object-cover rounded-2xl"
              />

              <p className="mt-4 text-center">
                Favorite photo #{index + 1}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}