import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Karya from "./pages/Karya";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import MusicList from "./pages/MusicList";

function App() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="karya">
        <Karya />
      </section>
      <section id="music">
        <MusicList />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
