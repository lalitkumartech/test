import { faArrowRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Banner() {
 

  return (
    <>
      <div className="xxl:px-6 xl:px-6 lg:px-6 md:px-4 sm:px-2">
        <div className="w-full max-w-screen-xxl mx-auto bg-green-900 rounded-3xl">
          {/* Grid layout for two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Column */}
            <div className="relative">
              <div className="xxl:pt-40 xl:pt-40 lg:pt-40 md:pt-30 pt-20 xxl:pb-32 xl:pb-32 lg:pb-32 md:pb-28 pb-20 py-9 xxl:ml-40 lg:ml-40 md:ml-20 sm:ml-20 xs:ml-2">
                <p className="xxl:text-6xl xl:text-6xl lg:text-6xl md:text-4xl text-4xl leading-20 text-white font-semibold capitalize text-start">
                  An Online Education Platform for Global Learners
                </p>
                <ul
                  className="text-start p-0 mt-4 relative"
                  style={{ zIndex: "9999" }}
                >
                  <li className="flex items-center">
                    {/* "Read More" Button */}
                    <button
                      type="button"
                      className="rounded-full border border-white xxl:py-2 xl:py-2 lg:py-2 md:py-2 py-1 px-3 bg-transparent text-sm text-white capitalize"
                    >
                      read more{" "}
                      <FontAwesomeIcon className="pl-2" icon={faArrowRight} />
                    </button>

                    {/* "Watch Our Videos" Button */}
                    <div className="flex items-center ml-4">
                      <button className="rounded-full w-10 h-10 p-2 border border-green-800 bg-green-800 text-white">
                        <FontAwesomeIcon icon={faPlay} />
                      </button>
                      <span className="text-sm text-white capitalize ml-2">
                        Watch Our Videos
                      </span>
                    </div>
                  </li>
                </ul>
                <span className="absolute -bottom-1 -left-14 -top-50 z-0">
                  <img
                    className="w-3/4"
                    src="/images/banner_tawor.png"
                    alt="banner tawor"
                  />
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative hidden md:block">
              <img
                className="p-8"
                src="https://templates.hibotheme.com/adma/default/assets/img/hero/banner-wrap-1.png"
                alt="banner"
              />
              <div className="absolute -bottom-1 right-0 top-20">
                <img
                  className="p-5 animate-bounce duration-1000 delay-300"
                  src="https://templates.hibotheme.com/adma/default/assets/img/hero/banner-wrap-city.png"
                  alt="banner city"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
