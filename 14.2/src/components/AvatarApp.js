import React, { useState, useEffect } from "react";
import axios from "axios";
import AvatarList from "./AvatarList";
import Filter from "./Filter";

const AvatarApp = () => {
  const [avatars, setAvatars] = useState([]);
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://randomuser.me/api/?results=10&inc=name,picture"
      );
      setAvatars(result.data.results);
    };
    fetchData();
  }, []);

  const handleFilterName = (event) => {
    setFilterName(event.target.value);
  };

  const filteredAvatars = avatars.filter((avatar) =>
    avatar.name.first.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <div>
      <h1>Random Avatars</h1>
      <Filter value={filterName} onChange={handleFilterName} />
      <AvatarList avatars={filteredAvatars} />
    </div>
  );
};

export default AvatarApp;
