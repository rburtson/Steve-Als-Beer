import React, { useRef } from 'react';
import homer from "./Graphics/homerBeer.gif";
import audio from "./Graphics/goCrazy.mp3";


const Homer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play(); // Play audio if it exists
    }
  };

  return (
    <div>
      <img
        src={homer}
        alt="Click to hear Homer"
        onClick={playAudio}
        style={{ cursor: 'pointer' }}
      />
      <audio ref={audioRef} src={audio} preload="auto">{/*Audio element that plays on click*/}
      </audio>
      <br />
      <span style={{fontSize: "18px"}}>Click to hear Homer</span>
    </div>
  );
};

export default Homer;
