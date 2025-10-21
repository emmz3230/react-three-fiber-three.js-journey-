import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const root = createRoot(document.querySelector("#root"));
root.render(
  <div>
    <App
      clickersCount={3}
      children={
        <>
          <h1>My First React App</h1>
          <h2>And a fancy subtitle</h2>
        </>
      }
    />
  </div>
);
