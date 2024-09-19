import React from "react";

export default function Courses() {
  return (
    <>
      <div className="py-5 xxl:px-6 xl:px-6 lg:px-6 md:px-4 sm:px-2 py-16 relative overflow-hidden bg-white">
        <div className="w-full max-w-screen-xxl mx-auto relative z-10">
          <h1 className="text-4xl pb-6 font-bold text-green-900 mb-0 text-center">
            Seeking Adventure Thrills<br /> and Excitement Await
          </h1>
          {/* Center the grid container */}
          <div className="grid grid-cols-1 md:grid-cols-3 justify-center">
            {/* column-first */}
            <div className="card bg-white m-2">
              <ul className="flex justify-center items-center p-0 m-0">
                <li>
                  <img
                    src="https://templates.hibotheme.com/adma/default/assets/img/graduets/graduets-1.jpg"
                    alt="Graduates"
                  />
                </li>
                <li className="text-start my-auto p-2">
                  <a className="text-xl font-bold pb-6 text-green-900 block mb-0">
                    Business Visa
                  </a>
                  <p>Et purus duis sollicitudin dignissim habitant.</p>
                </li>
              </ul>
            </div>
            {/* column-second */}
            <div className="card bg-white m-2">
              <ul className="flex justify-center items-center p-0 m-0">
                <li>
                  <img
                    src="https://templates.hibotheme.com/adma/default/assets/img/graduets/graduets-1.jpg"
                    alt="Graduates"
                  />
                </li>
                <li className="text-start my-auto p-2">
                  <h3 className="text-xl font-bold pb-6 text-green-900 mb-0">
                    Business Visa
                  </h3>
                  <p>Et purus duis sollicitudin dignissim habitant.</p>
                </li>
              </ul>
            </div>
            {/* column-third */}
            <div className="card bg-white m-2">
              <ul className="flex justify-center items-center p-0 m-0">
                <li>
                  <img
                    src="https://templates.hibotheme.com/adma/default/assets/img/graduets/graduets-1.jpg"
                    alt="Graduates"
                  />
                </li>
                <li className="text-start my-auto p-2">
                  <h3 className="text-xl font-bold pb-6 text-green-900 mb-0">
                    Business Visa
                  </h3>
                  <p>Et purus duis sollicitudin dignissim habitant.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Background image positioned absolutely */}
        <span className="absolute bottom-0 top-0 right-0 w-100 opacity-10">
          <img src="/images/vector_course.png" className="" alt="" />
        </span>
      </div>
    </>
  );
}
