import Navbar from "../Navbar/navbar";
import HeadSection from "../HeadSection/headSection";
import About from "../About/about";
import Skills from "../Skills/skills";
import Projects from "../Projects/projects";
import Education from "../Education/education";
import { useState } from "react";
const Main = () => {
  const [globalColor, setGlobalColor] = useState("");

  const colorChange = (color) => {
    setGlobalColor(color);
  };

  return (
    <div>
      <Navbar colorChange={colorChange} />
      <HeadSection globalColor={globalColor} />
      <About globalColor={globalColor} />
      <Skills globalColor={globalColor} />
      <Projects globalColor={globalColor} />
      <Education globalColor={globalColor} />
    </div>
  );
};
export default Main;
