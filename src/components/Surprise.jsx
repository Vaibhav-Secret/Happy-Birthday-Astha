import Confetti from "react-confetti";

export default function Surprise() {
  return (
    <section className="h-screen flex items-center justify-center gradient-bg">

      <Confetti recycle={false} />

      <div className="text-center">

        <h1 className="text-7xl">
          🎂
        </h1>

        <h2 className="text-4xl mt-6 max-w-2xl">
          Thank you for visiting this little corner of the internet.
        </h2>

        <p className="mt-6 text-xl">
          Have an amazing birthday 🎉
        </p>

      </div>

    </section>
  );
}