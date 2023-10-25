import Navbar from "../Navbar/navbar";
import HeadSection from "../HeadSection/headSection";
import About from "../About/about";
import Skills from "../Skills/skills";
import Projects from "../Projects/projects";
import Education from "../Education/education";
const Main = () => {
  return (
    <div>
      <Navbar />
      <HeadSection />
      <About />
      <Skills />
      <Projects />
      <Education />
    </div>
  );
};
export default Main;
