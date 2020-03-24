import React, { useState } from "react";

export default () => {
  // importtation de useState
  const [count, setCount] = useState(0);
  // -> count = 0
  // -> setCount = function pour modifier count

  const handleClick = () => {
    const c = count + 1;
    setCount(c);
  };

  return (
    <>
      <span>{count}</span>
      <button type="button" onClick={() => handleClick()}>
        Component type function avec hooks
      </button>
    </>
  );
};
