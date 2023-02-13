import React from "react";

function Button(props) {
  const buttonStyle = {
    fontWeight: props.isImportant ? "bold" : "normal",
  };

  return <button style={buttonStyle}>{props.label}</button>;
}

export default Button;
