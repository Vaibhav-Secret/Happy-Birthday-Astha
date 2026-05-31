import { useState, useRef } from "react";
import Landing from "./components/Landing";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Note from "./components/Note";
import Surprise from "./components/Surprise";

function App() {
  const [opened, setOpened] = useState(false);

  const audioRef = useRef(null);

  const handleOpen = () => {
    setOpened(true);

    setTimeout(() => {
      audioRef.current?.play();
    }, 500);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {!opened ? (
        <Landing onOpen={handleOpen} />
      ) : (
        <>
          <Hero />
          <Gallery />
          <Note />
          <Surprise />
        </>
      )}
    </>
  );
}

export default App;