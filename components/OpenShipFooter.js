import React from 'react'

const OpenShipFooter = () => {
  return (
    <div>
    <div className="  relative overflow-hidden  ">
      <div className="bg-[#2c2d5b] ">
        <div className="px-4  md:px-20">
          <div className="grid md:grid-cols-3 py-5   rounded-t-xl">
            <div className="py-8 ">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl  text-justify sm:text-left">
                <a href="/">
                  <div className="text-[#f67366]">
                    {" "}
                    OpenShipping{" "}
                    <span className="text-[#FFFFFF] font-bold">
                      Calculator
                    </span>{" "}
                  </div>
                </a>
              </h1>
              <p className="text-sm mt-4 text-white">
                OpenShipping Calculator delivers an unparalleled customer
                service through dedicated customer teams, engaged people working
                in an agile culture, and a global footprint
                <br />
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 text-white col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Explore
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200 text-white">
                      <a href="#">
                        <span> About Us</span>
                      </a>
                    </li>
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200 text-white">
                      <a href="#">
                        <span> Our Warehoueses</span>
                      </a>
                    </li>
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200 text-white">
                      <a href="#">
                        <span> Blog</span>
                      </a>
                    </li>
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200 text-white">
                      <a href="#">
                        <span> News and Medias</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="py-8 px-4 ">
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                  Legal
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200 text-white">
                    <a href="#">
                      <span> Terms</span>
                    </a>
                  </li>
                  <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200 text-white">
                    <a href="#">
                      <span> Privacy</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3 text-white">
                  Social Media
                </h1>
                <ul className="flex  justify-between gap-3">
                  <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                    <a href="#" className="text-white ">
                      <i className="fab fa-facebook text-4xl" />
                    </a>
                  </li>
                  <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                    <a href="#" className=" text-white">
                      <i className="fab fa-twitter text-4xl" />
                    </a>
                  </li>
                  <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                    <a href="#" className=" text-white">
                      <i className="fab fa-whatsapp text-4xl" />
                    </a>
                  </li>
                  <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                    <a href="#" className=" text-white">
                      <i className="fab fa-instagram text-4xl" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center  border-t border-white md:ms-28 md:me-28 ">
            <div className="  text-center py-6 text-white   ">
              OpenShipping Calculator.com
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default OpenShipFooter