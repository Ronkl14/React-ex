import { createContext, useState } from "react";

const GiftsContext = createContext([]);

export function GiftsProvider({ children }) {
  const [gifts, setGifts] = useState([]);

  return (
    <GiftsContext.Provider value={{ gifts, setGifts }}>
      {children}
    </GiftsContext.Provider>
  );
}

export default GiftsContext;
