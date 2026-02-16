import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { TracingBeam } from "./components/TracingBeam";
import { LanguageProvider } from "./utils/LanguageContext";
import { getTheme, setTheme as saveTheme } from "./utils/helpers";
import "./index.css";

function App() {
  const [theme, setThemeState] = useState("light");

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = getTheme();
    setThemeState(savedTheme);
    saveTheme(savedTheme);
  }, []);

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    saveTheme(newTheme);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar theme={theme} setTheme={setTheme} />
        
        <Hero />
        
        <TracingBeam>
          <About />
          <Education />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </TracingBeam>
        
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
