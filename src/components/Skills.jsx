import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
function Skills() {
  useEffect(() => {
    Aos.init({duration:1000});
  }, [])
  return (
    <>
      <div className="transform -skew-y-3 bg-[ur]  bg-gradient-to-tr from-[#d71515] to-[#1D2671] py-28 text-white">
        <div className="flex items-center justify-center font-poppins skew-y-3  ">
          <div className="px-8 md:px-12   md:w-4/6  pb-8 "data-aos="fade-top">
            <h1 className="text-2xl md:text-3xl">Skills</h1>
            <h2 className="text-xl pb-12  text-gray-400">
              Development Technologies & Programming Languages:
            </h2>
            
            <div className="flex justify-center flex-wrap pb-4 " data-aos="fade-left">
              <div className="flex flex-col w-32 text-lg mx-1 items-center ">
                <img className="h-12" src="src/assets/rjs.png" alt="" />
                <h2>React Js</h2>
              </div>

              <div className="flex flex-col w-32 text-lg mx-1 items-center">
                <img className="h-12" src="src/assets/html.png" alt="" />
                <h2>HTML 5</h2>
              </div>

              <div className="flex flex-col w-32 text-lg mx-1 items-center">
                <img className="h-12" src="src/assets/tw.png" alt="" />
                <h2>Tailwind</h2>
              </div>

              <div className="flex flex-col w-32 text-lg mx-1 items-center">
                <img className="h-12" src="src/assets/css.png" alt="" />
                <h2>CSS 3</h2>
              </div>

              <div className="flex flex-col w-32 text-lg mx-1 items-center">
                <img className="h-12" src="src/assets/js.png" alt="" />
                <h2>JavaScript</h2>
              </div>
            </div>
            <div className="flex justify-center flex-wrap  " data-aos="fade-right">
              <div className="flex flex-col w-32 text-lg mx-1 items-center">
                <img className="h-12" src="src/assets/java.png" alt="" />
                <h2>Java</h2>
              </div>

              <div className="flex flex-col w-32 text-lg mx-1 items-center">
                <img className="h-12" src="src/assets/fb.png" alt="" />
                <h2>Firebase</h2>
              </div>

              <div className="flex flex-col w-32 text-lg mx-1 items-center">
                <img className="h-12" src="src/assets/aw.png" alt="" />
                <h2>Appwrite</h2>
              </div>
              <div className="flex flex-col w-32 text-lg mx-1 items-center ">
          <img className="h-12" src="src/assets/sql.png" alt="" />
          <h2>SQL</h2>
        </div>

              <div className="flex flex-col w-32 text-lg mx-1 items-center">
                <img className="h-12" src="src/assets/fl.png" alt="" />
                <h2>Flutter</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
