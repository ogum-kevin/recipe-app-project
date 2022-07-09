import "./styles.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Home from "./components/Home";
import HotCoffee from "./components/HotCoffes";

import Coffee from "./components/Coffee";
import ColdCoffee from "./components/ColdCoffee";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/coffee/:type" element={<Coffee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
