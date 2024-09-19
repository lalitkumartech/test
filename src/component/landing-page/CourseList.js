import {
  faArrowRight,
  faCheck,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function CourseList() {
  return (
    <>
      <div className="xxl:px-6 xl:px-6 lg:px-6 md:px-4 sm:px-2 py-16">
        <ul className="flex justify-between items-center p-0">
          <li>
            <h1 className="text-xl text-start text-4xl pb-6 font-bold text-green-900 mb-0">
              Seeking Adventure Thrills
              <br /> and Excitement Await
            </h1>
          </li>
          <li>
            <button
              variant="primary"
              className="rounded-full border-1 xxl:py-3 xl:py-3 lg:py-3 md:py-3 py-3 px-3 border-white bg-yellow-400 text-sm text-white capitalize "
            >
              View More <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </li>
        </ul>
        <div className="w-full max-w-screen-xxl mx-auto rounded-3xl">
          {/* Grid layout for two columns */}
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="border-1 border-gray-300 rounded-2xl px-4 py-4 m-2 text-start">
              <div>
                <div className="w-16 h-16 bg-yellow-400 rounded-full border-green-900 border-2 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon
                    className="text-3xl text-white"
                    icon={faMobileAlt}
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold pt-7 pb-6  text-green-900 mb-0">
                Food and Wine Tours
              </h3>
              <ul className="p-0">
                <li>
                  <FontAwesomeIcon
                    className="text-lg font-bold text-green-900 pr-3"
                    icon={faCheck}
                  />
                  Mistakes To Avoid
                </li>
                <li>
                  <FontAwesomeIcon
                    className="text-lg font-bold text-green-900 pr-3"
                    icon={faCheck}
                  />
                  Mistakes To Avoid
                </li>
                <li>
                  <FontAwesomeIcon
                    className="text-lg font-bold text-green-900 pr-3"
                    icon={faCheck}
                  />
                  Mistakes To Avoid
                </li>
              </ul>
            </div>

            <div className="border-1 border-gray-300 rounded-2xl px-4 py-4 m-2 text-start">
              <div>
                <div className="w-16 h-16 bg-yellow-400 rounded-full border-green-900 border-2 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon
                    className="text-3xl text-white"
                    icon={faMobileAlt}
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold pt-7 pb-6  text-green-900 mb-0">
                Food and Wine Tours
              </h3>
              <ul className="p-0">
                <li>
                  <FontAwesomeIcon
                    className="text-lg font-bold text-green-900 pr-3"
                    icon={faCheck}
                  />
                  Mistakes To Avoid
                </li>
                <li>
                  <FontAwesomeIcon
                    className="text-lg font-bold text-green-900 pr-3"
                    icon={faCheck}
                  />
                  Mistakes To Avoid
                </li>
                <li>
                  <FontAwesomeIcon
                    className="text-lg font-bold text-green-900 pr-3"
                    icon={faCheck}
                  />
                  Mistakes To Avoid
                </li>
              </ul>
            </div>

            <div className="border-1 border-gray-300 rounded-2xl px-4 py-4 m-2 text-start">
              <div>
                <div className="w-16 h-16 bg-yellow-400 rounded-full border-green-900 border-2 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon
                    className="text-3xl text-white"
                    icon={faMobileAlt}
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold pt-7 pb-6  text-green-900 mb-0">
                Food and Wine Tours
              </h3>
              <ul className="p-0">
                <li>
                  <FontAwesomeIcon
                    className="text-lg font-bold text-green-900 pr-3"
                    icon={faCheck}
                  />
                  Mistakes To Avoid
                </li>
                <li>
                  <FontAwesomeIcon
                    className="text-lg font-bold text-green-900 pr-3"
                    icon={faCheck}
                  />
                  Mistakes To Avoid
                </li>
                <li>
                  <FontAwesomeIcon
                    className="text-lg font-bold text-green-900 pr-3"
                    icon={faCheck}
                  />
                  Mistakes To Avoid
                </li>
              </ul>
            </div>

            <div className="border-1 border-gray-300 rounded-2xl px-4 py-4 m-2 text-start">
              <div>
                <div className="w-16 h-16 bg-yellow-400 rounded-full border-green-900 border-2 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon
                    className="text-3xl text-white"
                    icon={faMobileAlt}
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold pt-7 pb-6 text-green-900 mb-0">
                Food and Wine Tours
              </h3>
              <ul className="p-0">
                <li>
                  <FontAwesomeIcon
                    className="text-lg font-bold text-green-900 pr-3"
                    icon={faCheck}
                  />
                  Mistakes To Avoid
                </li>
                <li>
                  <FontAwesomeIcon
                    className="text-lg font-bold text-green-900 pr-3"
                    icon={faCheck}
                  />
                  Mistakes To Avoid
                </li>
                <li>
                  <FontAwesomeIcon
                    className="text-lg font-bold text-green-900 pr-3"
                    icon={faCheck}
                  />
                  Mistakes To Avoid
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
