import { useState, useRef } from "react";
import Landing from "./components/Landing";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Note from "./components/Note";
import Surprise from "./components/Surprise";

function App() {
  const [opened, setOpened] = useState(false);
  const [step, setStep] = useState(0);

  const audioRef = useRef(null);

  const handleOpen = () => {
    setOpened(true);

    setTimeout(() => {
      audioRef.current?.play();
    }, 500);
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source
          src={`${import.meta.env.BASE_URL}Bairan.mp3`}
          type="audio/mpeg"
        />
      </audio>

      {!opened ? (
        <Landing onOpen={handleOpen} />
      ) : (
        <>
          {step === 0 && <Hero onNext={nextStep} />}
          {step === 1 && <Gallery onNext={nextStep} />}
          {step === 2 && <Note onNext={nextStep} />}
          {step === 3 && <Surprise />}
        </>
      )}
    </>
  );
}

export default App;