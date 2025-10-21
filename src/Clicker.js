import React, { useRef, useEffect, useState } from "react";
// import People from "./People";
// <People />

const Clicker = ({ increment, keyName, color }) => {
  const [count, setCount] = useState(0);
  const buttonRef = useRef();

  const buttonClick = () => {
    setCount(count + 1);
    increment();
  };
  useEffect(() => {
    buttonRef.current.style.backgroundColor = "papayawhip";
    buttonRef.current.style.Color = "salmon";

    return () => {
      localStorage.removeItem(keyName);
    };
  }, []);

  useEffect(() => {
    const savedcount = parseInt(localStorage.getItem(keyName) ?? 0);
    setCount(savedcount);
  }, []);
  useEffect(() => {
    localStorage.setItem(keyName, count);
  }, [count]);

  return (
    <div>
      <div style={{ color: color }}> Clicks count: {count}</div>
      <button ref={buttonRef} onClick={buttonClick}>
        Click me
      </button>
    </div>
  );
};

export default Clicker;
