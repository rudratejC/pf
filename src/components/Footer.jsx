import React from "react";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"


function Footer() {
  useEffect(() => {
    Aos.init({duration:1000});
  }, [])
  return (
    <div className="flex items-center justify-center mb- ">
      <div className="px-8 md:px-12 mt-20  md:w-4/6  ">
        <div className="">
          <div className="container px-6 py-12 mx-auto">
            <div>
              

              <h1 className="mt-2 text-xl  md:text-2xl ">
                Get in touch with me
              </h1>

              
            </div>

            <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 ">
              <a href="mailto:rudratejchilkewar@gmail.com" target="_blank" data-aos="fade-right" className="bg-gradient-to-tl from-gray-200 via-gray-300 to-gray-400  p-4 hover:shadow-2xl rounded-lg">
                <span className="inline-block p-3 text-blue-500 rounded-full bg-white/80 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-lg font-medium text-gray-800 ">
                  Email
                </h2>
                
                <a href="mailto:rudratejchilkewar@gmail.com" target="_blank" className="mt-2 text-indigo-500 text-sm md:text-lg">
                rudratejchilkewar@gmail.com
                </a>
              </a>
              <a href="tel:917249266212" target="_blank"  data-aos="fade-left" className="bg-gradient-to-tl from-gray-200 via-gray-300 to-gray-400  p-4 hover:shadow-2xl rounded-lg">
                <span className="inline-block p-3 text-blue-500 rounded-full bg-white/80 ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-lg font-medium text-gray-800 ">
                  Phone
                </h2>
                
                <a href="tel:917249266212" target="_blank" className="mt-2 text-indigo-500 text-sm md:text-lg">
                +91 7249266212
                </a>
              </a>

              

              
            </div>
          </div>
        </div>
        <div  className="text-center m-10 " >
        Created with ❤️ by Rudratej Laxman Chilkewar 
        </div>
      </div>
    </div>
  );
}

export default Footer;
