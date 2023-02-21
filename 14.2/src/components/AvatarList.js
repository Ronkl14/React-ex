import React from "react";
import Avatar from "./Avatar";

const AvatarList = ({ avatars }) => {
  console.log(avatars);
  return (
    <div>
      {avatars.map((avatar) => (
        <Avatar avatar={avatar} />
      ))}
    </div>
  );
};

export default AvatarList;
