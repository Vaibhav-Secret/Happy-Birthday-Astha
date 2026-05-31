import { useState } from "react";
import Confetti from "react-confetti";

export default function Surprise() {
  const [show, setShow] = useState(false);

  return (
    <section className="section flex items-center justify-center gradient-bg">

      {show && <Confetti recycle={false} />}

      <div className="text-center">

        <button
          onClick={() => setShow(true)}
          className="px-8 py-4 bg-black text-white rounded-full"
        >
          One Last Thing
        </button>

        {show && (
          <div className="mt-12">

            <h1 className="text-7xl">
              🎂
            </h1>

            <h2 className="text-4xl mt-6">
              Thank you for visiting this little corner of the internet.
            </h2>

            <p className="mt-4 text-xl">
              Have an amazing birthday 🎉
            </p>

          </div>
        )}

      </div>

    </section>
  );
}