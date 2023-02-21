import React from "react";

const Avatar = ({ avatar }) => {
  const { name, picture } = avatar;
  return (
    <div>
      <h3>{`${name.title}. ${name.first} ${name.last}`}</h3>
      <img src={picture.large} alt="avatar" />
    </div>
  );
};

export default Avatar;
