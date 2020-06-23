import React from "react";

// importing stylesheet and other assets
import "./style.css";

// Props are passed down like normal function args.
// Destructure `strengthsList` from the props object
const Strength = ({ strengthsList }) => (
  <ul>
    {strengthsList.map((strength) => (
      <li>{strength}</li>
    ))}
  </ul>
);

export default Strength;
