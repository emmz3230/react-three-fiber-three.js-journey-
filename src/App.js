import "./App.css";
import { useMemo, useState } from "react";
import Clicker from "./Clicker";
import People from "./People";

// const colors = [
//   `hsl(${Math.random() * 360}deg,100%,70%)`,
//   `hsl(${Math.random() * 360}deg,100%,70%)`,
//   `hsl(${Math.random() * 360}deg,100%,70%)`,
// ];

function App({ clickersCount, children }) {
  const [hasClicker, setHasClicker] = useState(true);
  const [count, setcount] = useState(0);

  const toggleClickerclick = () => {
    setHasClicker(!hasClicker);
  };
  const increment = () => {
    setcount(count + 1);
  };
  const colors = useMemo(() => {
    const colors = [];
    for (let i = 0; i < clickersCount; i++)
      colors.push(`hsl(${Math.random() * 360}deg,100%,70%)`);

    return colors;
  }, [clickersCount]);

  return (
    <>
      {children}
      <div>Total count: {count}</div>
      <button onClick={toggleClickerclick}>
        {hasClicker ? "hide" : "show"}Clicker{" "}
      </button>
      {hasClicker && (
        <>
          {[...Array(clickersCount)].map((value, index) => (
            <Clicker
              key={index}
              increment={increment}
              keyName={`count${index}`}
              color={colors[index]}
            />
          ))}
        </>
      )}
      <People />
    </>
  );
}

export default App;
