import React from "react";
import About from "./Components/About";
import Info from "./Components/Info";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Footer />
    </div>
  );
}
