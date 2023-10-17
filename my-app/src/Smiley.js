import React from "react";

const Smiley = ({ text, count, onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      {text} - {count}
    </div>
  );
};

export default Smiley;
