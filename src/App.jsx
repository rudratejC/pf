import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { Element } from "react-scroll";
function App() {
  return (
    <>
      <div className="flex items-center justify-center scroll-smooth ">
        <div className="px-4 md:px-12 w-screen  md:w-4/6  mb-10">
          <Nav></Nav>
        </div>
      </div>
      <div className="transform -skew-y-3  bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-300 mb-40 ">
        <div className="flex items-center justify-center font-poppins skew-y-3 ">
          <div className="px-8 md:px-12   md:w-4/6  pb-8 ">
            <About />
          </div>
        </div>
      </div>
      <Element name="projects" className="element">
        <Projects />
      </Element>
      <Element name="skills" className="element">
        <Skills />
      </Element>
      <Footer />
    </>
  );
}

export default App;
