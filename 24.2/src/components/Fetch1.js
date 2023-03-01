import React from "react";
import useFetch from "../hooks/useFetch";

const Fetch1 = () => {
  const data = useFetch("https://63f7767d833c7c9c6084bc9b.mockapi.io/shoes");
  return (
    <div>
      {data.data.map((shoe) => (
        <p>{shoe.name}</p>
      ))}
    </div>
  );
};

export default Fetch1;
