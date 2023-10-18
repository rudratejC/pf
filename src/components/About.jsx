import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css"

function About() {

  useEffect(() => {
    Aos.init({duration:2000});
  }, [])
  
  return (
    <div className="flex pt-12  ">
      <div className="md:w-2/3  pr-4" data-aos="fade-right">
        <h1 className="text-4xl">
          Hello! I'm Rudratej, a developer based in India🇮🇳
        </h1>
        <div className="pt-4 text-lg text-gray-700">
          <p>
            I love building projects that are user-friendly, simple and
            delightful.
          </p>
          <p className="pt-2">
            {" "}
            I was a Bachelor student at{" "}
            <span className="text-black font-bold text-lg">
              University of Mumbai
            </span>{" "}
            where I spent 4 years learning the{" "}
            <span className="text-black text-lg font-bold">
              Computer Science.
            </span>
          </p>
          <p className="pt-2">
            I also worked on a lot of projects of{" "}
            <span className="text-black text-lg font-bold">
              Web and App Development{" "}
            </span>
            that polished my development & problem-solving abilities
          </p>
          <p className="pt-2">
            I'm eager to embrace fresh horizons and{" "}
            <span className="text-black text-lg font-bold">
              open to new opportunities as a developer.
            </span>
          </p>
        </div>

        <div className="flex">
          <a href="https://www.linkedin.com/in/rudratej-chilkewar/" target="_blank"
            
            className="inline-flex justify-center w-36 items-center rounded bg-black px-5 py-3 mt-8 mr-4 text-sm  text-white hover:bg-gray-600"
          >
            View LinkedIn
            {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
          </a>

          <a href="https://github.com/rudratejc" target="_blank"

            className="inline-flex justify-center w-36  border-[1px]  border-gray-500 items-center rounded bg-white px-5 py-3 mt-8 text-sm  text-gray hover:bg-gray-600 hover:text-white"
          >
            View Github
            {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
          </a>
        </div>
      </div>
      <div className="hidden  md:block md:w-1/3 " data-aos="fade-left">
        <div className="">
          <img
            className=" rounded-md "
            src="./r1.jpg"
            alt="Rudratej"
          />
        </div>
      </div>
      
    </div>
  );
}

export default About;
