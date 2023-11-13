import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

function Projects() {
  useEffect(() => {
    Aos.init({duration:1000});
  }, [])
  return (
    <div className="flex items-center justify-center mb-20 ">
      <div className="px-8 md:px-12   md:w-4/6  ">
        <h1 className="text-2xl md:text-3xl">Projects</h1>
        <h2 className="text-xl pb-12  text-gray-400">
          Some things that I have built:
        </h2>
        {/* //this is main project card */}
        <div data-aos="fade-left" className="flex flex-col mb-4 md:flex-row w-full p-4 rounded-md border border-gray-400 " >
          <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
            <div
              className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
              style={{
                backgroundImage: "url('./undoubt.png')",
                lineHeight: 10,
                padding: 20,
              }}
            ></div>

            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 ">
              <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase ">
                Un-doubt
              </h3>

              <div className="flex items-center justify-evenly flex-wrap px-3 py-2 bg-gray-400">
                {/* <span className="font-bold text-gray-200">
                $129
              </span> */}
                <button className="px-2 py-1 mb-2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded hover:bg-gray-600  focus:outline-none">
                  Flutter
                </button>
                <button className="px-2 py-1 mb-2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded hover:bg-gray-600  focus:outline-none">
                  Firebase
                </button>
                <button className="px-2 py-1 mb-2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded hover:bg-gray-600  focus:outline-none">
                  Dart
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-3/4 mt-2 md:mt-0 ">
            <div className=" max-w-md p-4 mx-auto ">
              <h2 className="font-semibold text-gray-800 uppercase  ">
                Undoubt-An anonymous doubt solving app
              </h2>

              <p className="mt-4 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                in neque voluptatibus fugit quas hic quos mollitia assumenda
                odit. Obcaecati eveniet sapiente, ratione sequi excepturi eos
                dignissimos ducimus hic dolor.{" "}
                {/* <a href="#" className="text-blue-500 hover:underline">
                  Read more
                </a> */}
                .{" "}
              </p>

              <div className="flex items-center justify-between mt-4 gap-x-4 shrink-0">
                <button className="text-xs text-gray-800  transition-colors duration-300  hover:text-gray-600 focus:outline-none"></button>

                <div>
                  <a href="https://www.youtube.com/watch?v=MjWdkwZjkwc" target="_blank" className=" text-xs mr-2  hover:bg-blue-600 font-medium rounded bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                    Demo
                  </a>

                  <a href="https://github.com/rudratejc/undoubt" target="_blank" className=" text-xs hover:bg-blue-600 font-medium rounded bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //this is end of main project card */}

        {/* //this is main project card */}
        <div data-aos="fade-right" className="flex flex-col mb-4 md:flex-row w-full p-4 rounded-md border border-gray-400">
          <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
            <div
              className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
              style={{
                backgroundImage: "url('./undoubt.png')",
                lineHeight: 10,
                padding: 20,
              }}
            ></div>

            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 ">
              <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase ">
                Undoubt
              </h3>

              <div className="flex items-center justify-evenly flex-wrap px-3 py-2 bg-gray-400">
                {/* <span className="font-bold text-gray-200">
                $129
              </span> */}
                <button className="px-2 py-1 mb-2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded hover:bg-gray-600  focus:outline-none">
                  Flutter
                </button>
                <button className="px-2 py-1 mb-2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded hover:bg-gray-600  focus:outline-none">
                  Firebase
                </button>
                <button className="px-2 py-1 mb-2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded hover:bg-gray-600  focus:outline-none">
                  Dart
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-3/4 mt-2 md:mt-0 ">
            <div className=" max-w-md p-4 mx-auto ">
              <h2 className="font-semibold text-gray-800 uppercase  ">
                Undoubt-An anonymous doubt solving app
              </h2>

              <p className="mt-4 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                in neque voluptatibus fugit quas hic quos mollitia assumenda
                odit. Obcaecati eveniet sapiente, ratione sequi excepturi eos
                dignissimos ducimus hic dolor.{" "}
                {/* <a href="#" className="text-blue-500 hover:underline">
                  Read more
                </a> */}
                .{" "}
              </p>

              <div className="flex items-center justify-between mt-4 gap-x-4 shrink-0">
                <button className="text-xs text-gray-800  transition-colors duration-300  hover:text-gray-600 focus:outline-none"></button>

                <div>
                  <button className=" text-xs mr-2  hover:bg-blue-600 font-medium rounded bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                    Demo
                  </button>

                  <button className=" text-xs hover:bg-blue-600 font-medium rounded bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                    Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //this is end of main project card */}
      </div>
    </div>
  );
}

export default Projects;
