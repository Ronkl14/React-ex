import { useState, useRef } from "react";

const Video = () => {
  const [src, setSrc] = useState("");
  const videoRef = useRef(null);

  const handleChange = (event) => {
    try {
      // Get the uploaded file
      const file = event.target.files[0];

      // Transform file into blob URL
      setSrc(URL.createObjectURL(file));
    } catch (error) {
      console.error(error);
    }
  };

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <>
      <video ref={videoRef} src={src} width="30%">
        Sorry, your browser doesn't support embedded videos.
      </video>
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
      <input type="file" onChange={handleChange} />
    </>
  );
};

export default Video;
