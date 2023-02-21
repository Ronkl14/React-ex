import React from "react";

const Filter = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Filter by name"
      value={value}
      onChange={onChange}
    />
  );
};

export default Filter;
