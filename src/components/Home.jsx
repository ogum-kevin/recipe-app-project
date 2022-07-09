import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Welcome Home!</h1>

      <ul>
        <li>
          <Link to="/coffee/Hotcoffee">Hot coffee</Link>
        </li>
        <li>
          <Link to="/coffee/Coldcoffee"> Cold coffee</Link>
        </li>
      </ul>
    </>
  );
}
