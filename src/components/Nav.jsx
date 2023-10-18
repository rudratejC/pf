import React from "react";

import { Link } from "react-scroll";

function Nav() {
  return (
    <div className="pt-8 flex justify-between">
      <h3 className="text-2xl md:text-3xl ">रुद्र-తేజ్</h3>
      <ul className="flex   ">
        <li className="px-2">
          <Link to="projects" smooth={true} offset={-20} duration={1000} >
            Projects
          </Link>
        </li>
        <li className="px-2">
          <Link to="skills" smooth={true} offset={50} duration={1000} >
            Skills
          </Link>
        </li>
        <li className="pl-2">
          <a href="https://drive.google.com/file/d/1-6x510TuOZ3yBHUk7DQaX-1s2tm2bu3Q/view?usp=sharing" target="_blank">Resume</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
