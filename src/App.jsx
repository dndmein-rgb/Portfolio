import { useState } from "react";
import IntroAnimation from "./components/IntroAnimation";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="relative animated-gradient text-white">
      {/* Custom cursor - hidden on touch devices and for accessibility */}
      <CustomCursor />
      
      {/* Navigation bar - visible on scroll */}
      <Navbar />
      
      {/* Background music player */}
      <MusicPlayer />

      {/* Full-screen intro animation with multilingual greetings */}
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}

      {/* Main content sections */}
      <Home introDone={introDone} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
