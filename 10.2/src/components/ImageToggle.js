import React, { useRef } from "react";
import colorImg from "../color1.jpg";
import bwImg from "../bw1.jpg";

const ImageToggle = () => {
  const imageRef = useRef(null);

  const handleMouseEnter = () => {
    imageRef.current.src = colorImg;
  };

  const handleMouseLeave = () => {
    imageRef.current.src = bwImg;
  };

  return (
    <img
      src="black-white-image.jpg"
      ref={imageRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      alt="image"
      width="30%"
    />
  );
};

export default ImageToggle;
