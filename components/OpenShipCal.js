import React from 'react'

const OpenShipCal = () => {
  return (
    <>
  <div className="">
    {/* header */}
    <div>
      <nav className="bg-[#FFFFFF]  px-4  md:px-20 relative ">
        <div className="bg-[#FFFFFF]  ">
          <div className=" py-4 sm:py-6">
            <div className="flex justify-between items-center">
              <div className=" bg-dark gap-4    font-bold text-2xl">
                <div className="flex items-center gap-4  font-bold text-1xl md:text-2xl">
                  <a href="/" className="">
                    <div className="text-[#2c2d5b]">OpenShipping</div>
                    <div className="text-[#f67366]">Calculator</div>
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <ul className="flex items-center gap-6 animatedRight ">
                  <li className="group relative cursor-pointer">
                    <a
                      href="#"
                      className="flex h-[72px] items-center gap-[2px]"
                    >
                      Company
                      <span className="ms-2">
                        <i className="fas fa-caret-down text-black transition-all duration-200 group-hover:rotate-180" />
                      </span>
                    </a>
                    <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                      <ul className="space-y-3">
                        <li>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-black/20 hover:text-white"
                            href="#"
                          >
                            Company1
                          </a>
                        </li>
                        <li>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-black/20 hover:text-white"
                            href="#"
                          >
                            Company1
                          </a>
                        </li>
                        <li>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-black/20 hover:text-white"
                            href="#"
                          >
                            Company1
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="group relative cursor-pointer">
                    <a
                      href="#"
                      className="flex h-[72px] items-center gap-[2px]"
                    >
                      Services
                      <span className="ms-2">
                        <i className="fas fa-caret-down text-black transition-all duration-200 group-hover:rotate-180" />
                      </span>
                    </a>
                    <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                      <ul className="space-y-3">
                        <li>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-black/20 hover:text-white"
                            href="#"
                          >
                            Services1
                          </a>
                        </li>
                        <li>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-black/20 hover:text-white"
                            href="#"
                          >
                            Services2
                          </a>
                        </li>
                        <li>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-black/20 hover:text-white"
                            href="#"
                          >
                            Services3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="py-4">
                    <a href="#" className="text-decoration-none ">
                      Solutions
                    </a>
                  </li>
                  <li className="py-4">
                    <a href="#" className="text-decoration-none ">
                      Industries
                    </a>
                  </li>
                  <li className="py-4">
                    <a href="#" className="text-decoration-none ">
                      Insights
                    </a>
                  </li>
                  <li className="py-4">
                    <a href="#" className="text-decoration-none ">
                      News ANd Media
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-4 hidden md:block">
                <a href="#">
                  <button className="  text-[#2c2d5b] hover:bg-[#404172]  border border-[#2c2d5b]  transition-all duration-600 hover:text-white  px-8 py-5 font-bold rounded-md">
                    Request Quote
                  </button>
                </a>
                <a href="#">
                  <button className="ms-4 bg-[#2c2d5b] hover:bg-[#404172]    transition-all duration-600 text-white  px-8 py-5 font-bold rounded-md   ">
                    Join Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden   flex justify-end right-5 absolute top-8">
          <button id="menu-toggle" className="text-black ">
            <i className="fas fa-bars text-black  text-2xl" />
          </button>
        </div>
      </nav>
      <div
        id="mobile-menu"
        className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 hidden"
      >
        <div className="flex justify-end p-4">
          <button id="close-menu" className="text-white">
            <i className="fas fa-times" />
          </button>
        </div>
        <div className="flex flex-col items-center mt-12">
          <a href="#" className="text-white py-2">
            Home
          </a>
          <a href="#" className="text-white py-2">
            About
          </a>
          <a href="#" className="text-white py-2">
            Services
          </a>
          <a href="#" className="text-white py-2">
            Contact
          </a>
        </div>
      </div>
    </div>
    {/* quick section */}
    <div className="  px-4 py-20 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="">
          <div>
            {" "}
            <span className="text-4xl font-bold">
              quick &amp; reliable
            </span>{" "}
            <span className="text-5xl font-bold text-[#f67366]">
              warehousing and logistics
            </span>{" "}
            <span className="text-4xl font-bold">solution .</span>
          </div>
          <div className="mt-4">
            OpenShipping{" "}
            <span className="  font-bold text-[#f67366]">Calculator</span>{" "}
            delivers an unparalleled customer service through dedicated customer
            teams, engaged people working in an agile culture, and a global
            footprint
          </div>
          <div>
            <div className="flex   py-12 gap-4  ">
              <a href="#">
                <button className=" bg-[#2c2d5b] hover:bg-[#404172]    transition-all duration-600 text-white  px-8 py-5 font-bold rounded-md   ">
                  Join Now
                </button>
              </a>
              <a href="#">
                <button className=" flex  items-center transition-all duration-600 hover:text-white  px-8 pt-1  font-bold rounded-md">
                  <div className=" w-[60px] h-[60px] bg-[#f4f6f9] flex items-center justify-center rounded-full">
                    <i className="fa fa-video text-2xl text-[#2c2d5b]" />
                  </div>
                  <div className="text-[#2c2d5b] ms-8">Play Demo</div>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://openshippingcalculator.com/img/91fa59e6781adbdced82e349bb595d99-1-1.png"
            alt="image"
          />
        </div>
      </div>
    </div>
    {/* Shipping   rates calculator */}
    <div className="bg-gray-100 px-4 py-20 md:px-20">
      <div className="md:flex justify-end items-center">
        <div className=" ms-0 py-4 md:py-0 flex justify-center ">
          <div className="font-fold text-2xl md:text-4xl font-bold ">
            <div>Shipping </div>
            <div className="border-b-4 border-red-400 w-[90px] md:w-[140px] mt-3">
              {" "}
            </div>
          </div>
          <div className="text-2xl md:text-4xl ">&nbsp;rates calculator</div>
        </div>
        <div className="md:ms-32 w-[150px] h-[150px] bg-white flex items-center justify-center rounded-full">
          <img
            src="https://openshippingcalculator.com/img/mdi-truck-fast-outline-1.svg"
            alt="image"
          />
        </div>
      </div>
      <div className="flex justify-center py-12 gap-4  ">
        <a href="#">
          <button className="ms-4 bg-[#f67366] hover:bg-[#f67366]    transition-all duration-600 text-white  px-8 py-5 font-bold rounded-md   ">
            Domestic
          </button>
        </a>
        <a href="#">
          <button className="  text-[#2c2d5b] hover:bg-[#404172]  border border-[#2c2d5b]  transition-all duration-600 hover:text-white  px-8 py-5 font-bold rounded-md">
            International
          </button>
        </a>
      </div>
      <div className="col-span-2 border  border-[#2c2d5b]   rounded-3xl ">
        <div className="py-10 md:px-20 px-10">
          {/* <div class="text-[#2c2d5b] font-bold text-2xl">Enter Dimensions </div> */}
          <form>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6    ">
              <div>
                <label
                  htmlFor="Length"
                  className="block mb-2 text-sm font-medium text-[#2c2d5b]  "
                >
                  Pick-up Area Pincode*
                </label>
                <input
                  type="text"
                  id="Length"
                  className="  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  "
                  placeholder="Enter 6 Digit Pickup Area Pincode"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="Width"
                  className="block mb-2 text-sm font-medium text-[#2c2d5b]  "
                >
                  Delivery Area Pincode*
                </label>
                <input
                  type="text"
                  id="Width"
                  className="  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  "
                  placeholder="Enter 6 Digit Delivery Area Pincode"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="Weight"
                  className="block mb-2 text-sm font-medium text-[#2c2d5b] "
                >
                  Weight*
                </label>
                <input
                  type="text"
                  id="Height"
                  className="  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  "
                  placeholder="Weight (kg)"
                  required=""
                />
              </div>
              <div className="  text-[#2c2d5b] font-bold text-xl">
                Dimensions (optional){" "}
              </div>
              <div className=" "></div>
              <div className="  "></div>
              <div>
                <label
                  htmlFor="Length"
                  className="block mb-2 text-sm font-medium text-[#2c2d5b]  "
                >
                  Length
                </label>
                <input
                  type="text"
                  id="Length"
                  className="  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  "
                  placeholder="Enter Length (cm)"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="Width"
                  className="block mb-2 text-sm font-medium text-[#2c2d5b]  "
                >
                  Width
                </label>
                <input
                  type="text"
                  id="Width"
                  className="  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  "
                  placeholder="Enter Width (cm)"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="Height"
                  className="block mb-2 text-sm font-medium text-[#2c2d5b] "
                >
                  Height
                </label>
                <input
                  type="text"
                  id="Height"
                  className="  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  "
                  placeholder="Enter Height (cm)"
                  required=""
                />
              </div>
              <div className=" text-[#2c2d5b] font-bold text-xl">
                Payment Mode*{" "}
              </div>
              <div className=" text-[#2c2d5b] font-bold text-xl"></div>
              <div className=" text-[#2c2d5b] font-bold text-xl"></div>
              <div className="flex">
                <div className="flex items-center  ">
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Prepaid
                  </label>
                </div>
                <div className="flex items-center ms-4">
                  <input
                    defaultChecked=""
                    id="default-radio-2"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-2"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Cash On Delivery
                  </label>
                </div>
              </div>
            </div>
          </form>
          <div className="flex  text-2xl   gap-4 py-2 pt-4 ">
            <a href="#">
              <button className="  bg-[#2c2d5b] hover:bg-[#404172]    transition-all duration-600 text-white  px-8 py-5 font-bold rounded-md   ">
                Calculate
              </button>
            </a>
            <a href="#">
              <button className="text-[#9797b2]  hover:bg-[#404172]    transition-all duration-600 hover:text-white  px-8 py-5 font-bold rounded-md">
                Reset
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Volumetric  */}
    <div className="bg-gray-100">
      <div className="  px-4 py-20 md:px-20 ">
        <div className="md:flex  items-center">
          <div className=" w-[150px] h-[150px] bg-white flex items-center justify-center rounded-full">
            <img
              src="https://openshippingcalculator.com/img/mdi-truck-fast-outline-1.svg"
              alt="image"
            />
          </div>
          <div className="md:ms-32 ms-0 py-4 md:py-0 flex justify-center ">
            <div className="font-fold text-2xl md:text-4xl font-bold ">
              <div>Volumetric </div>
              <div className="border-b-4 border-red-400 w-[90px] md:w-[140px] mt-3">
                {" "}
              </div>
            </div>
            <div className="text-2xl md:text-4xl ">&nbsp;weight Calculator</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 py-20">
          <div className="col-span-2 border md:border-t-[#2c2d5b] md:border-b-[#2c2d5b] md:border-l-[#2c2d5b] rounded-l-3xl ">
            <div className="md:py-12 md:px-20 px-10">
              <div className="text-[#2c2d5b] font-bold text-2xl">
                Enter Dimensions{" "}
              </div>
              <form>
                <div className="grid gap-6 mb-6 md:grid-cols-3 mt-8">
                  <div>
                    <label
                      htmlFor="Length"
                      className="block mb-2 text-sm font-medium text-[#2c2d5b]  "
                    >
                      Length
                    </label>
                    <input
                      type="text"
                      id="Length"
                      className="  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  "
                      placeholder="Enter Length (cm)"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Width"
                      className="block mb-2 text-sm font-medium text-[#2c2d5b]  "
                    >
                      Width
                    </label>
                    <input
                      type="text"
                      id="Width"
                      className="  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  "
                      placeholder="Enter Width (cm)"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Height"
                      className="block mb-2 text-sm font-medium text-[#2c2d5b] "
                    >
                      Height
                    </label>
                    <input
                      type="text"
                      id="Height"
                      className="  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  "
                      placeholder="Enter Height (cm)"
                      required=""
                    />
                  </div>
                </div>
              </form>
              <div className="flex  text-2xl   gap-4 py-2 pt-4 ">
                <a href="#">
                  <button className="  bg-[#2c2d5b] hover:bg-[#404172]    transition-all duration-600 text-white  px-8 py-5 font-bold rounded-md   ">
                    Calculate
                  </button>
                </a>
                <a href="#">
                  <button className="text-[#9797b2]  hover:bg-[#404172]    transition-all duration-600 hover:text-white  px-8 py-5 font-bold rounded-md">
                    Reset
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#f67366] flex items-center px-14 md:rounded-r-3xl">
            <div>
              <div className="flex justify-center text-white md:text-4xl font-bold md:mt-0 mt-3">
                Results Will Be appear Below:
              </div>
              <div className="flex justify-center  text-white md:text-4xl font-bold border-t-2 border-b-2  border-white my-6 py-6">
                0.00kg
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Services */}
    <div className="bg-[#f4f6f9]">
      <div className="  px-4 py-20 md:px-20 ">
        <div className="flex justify-between items-center">
          <div className=" flex justify-center ">
            <div className="font-fold text-2xl md:text-4xl font-bold ">
              <div>Services </div>
              <div className="border-b-4 border-red-400 w-[90px] md:w-[120px] mt-3">
                {" "}
              </div>
            </div>
            <div className="text-2xl md:text-4xl ">&nbsp;we offer</div>
          </div>
          <div className="w-[150px] h-[150px] bg-white flex items-center justify-center rounded-full">
            <img
              src="https://openshippingcalculator.com/img/mdi-truck-fast-outline-1.svg"
              alt="image"
            />
          </div>
        </div>
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 justify-center  ">
            <div className="p-4">
              <div className="w-[60px] h-[60px] bg-white flex items-center justify-center rounded-full">
                <img
                  src="https://openshippingcalculator.com/img/mdi-truck-fast-outline-4.svg"
                  alt="image"
                />
              </div>
              <div className="py-4 text-[#2c2d5b] text-3xl font-bold">
                Warehousing Services
              </div>
              <div>
                A pay as-you-go solution for: pallet storage, inventory
                management, fulfillment(e.g. pick and pack), in/out-bound
                solutions, and more.
              </div>
            </div>
            <div className="p-4">
              <div className="w-[60px] h-[60px] bg-white flex items-center justify-center rounded-full">
                <img
                  src="https://openshippingcalculator.com/img/bx-bxs-plane-take-off-1.svg"
                  alt="image"
                />
              </div>
              <div className="py-4 text-[#2c2d5b] text-3xl font-bold">
                Global Freight
              </div>
              <div>
                Search and compare the best shipping rates among dozens of
                trusted logistic partners for the last mile delivery and
                freight.
              </div>
            </div>
            <div className="p-4">
              <div className="w-[60px] h-[60px] bg-white flex items-center justify-center rounded-full">
                <i className="fa fa-shopping-bag text-2xl text-[#2c2d5b]" />
              </div>
              <div className="py-4 text-[#2c2d5b] text-2xl font-bold">
                P ACKAGING S OLUTIONS
              </div>
              <div>
                Our packaging solutions are optimized for each individual
                customer and are selected based on on the customer’s specific
                needs and requirements.{" "}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center py-12 gap-4  ">
            <a href="#">
              <button className="  text-[#2c2d5b] hover:bg-[#404172]  border border-[#2c2d5b]  transition-all duration-600 hover:text-white  px-8 py-5 font-bold rounded-md">
                Request Quote
              </button>
            </a>
            <a href="#">
              <button className="ms-4 bg-[#2c2d5b] hover:bg-[#404172]    transition-all duration-600 text-white  px-8 py-5 font-bold rounded-md   ">
                Join Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* operation mode */}
    <div className="  px-4 py-20 md:px-20 ">
      {/* <div class="h-[700px] w-[700px]" style="background-image:url('https://openshippingcalculator.com/img/group-6934.png');background-size: cover; background-position: center; " ></div> */}
      <div className="mt-12 flex justify-center ">
        <div className="font-fold text-4xl  ">
          <div>operation</div>
          <div className="border-b-4 border-red-400 w-[130px] mt-3"> </div>
        </div>
        <div className="text-4xl">&nbsp;Mode</div>
      </div>
      <div className="relative w-full h-[1350px] flex justify-center py-40 ">
        <div className="mt-64">
          <img src="https://openshippingcalculator.com/img/group-6934.png" />
        </div>
        <div className="absolute  ">
          <div className="grid  grid-cols-1  md:grid-cols-2   items-center  ">
            <div>
              <div className="flex  items-center">
                <div className="bg-[#230b34] w-[50px] h-[50px] text-center items-center rounded-full text-white  pt-1 text-3xl">
                  1
                </div>
                <div className="ms-8 text-5xl text-[#f67366] font-bold">
                  {" "}
                  Connect{" "}
                </div>
              </div>
              <div className="mt-10   ">
                <div className=" w-[350px]">
                  You’re currently running your store on Shopify, WooCommerce,
                  or any other platform. As a first step, you’ll connect your
                  store with our platform.
                </div>
              </div>
            </div>
            <div className="flex  ">
              <div className="flex items-center w-[500px] h-[200px] justify-end">
                <img
                  className=""
                  src="https://openshippingcalculator.com/img/image-3.png"
                  alt="image"
                />
              </div>
            </div>
            <div className="flex mt-64  ">
              <div className="flex items-center w-[400px] h-[200px] justify-end">
                <img
                  className=""
                  src="https://openshippingcalculator.com/img/rectangle-1314.png"
                  alt="image"
                />
              </div>
            </div>
            <div className="mt-64 flex justify-end">
              <div>
                <div className="flex  items-center">
                  <div className="bg-[#230b34] w-[50px] h-[50px] text-center items-center rounded-full text-white  pt-1 text-3xl">
                    2
                  </div>
                  <div className="ms-8 text-5xl text-[#f67366] font-bold">
                    {" "}
                    Store{" "}
                  </div>
                </div>
                <div className="mt-8   ">
                  <div className=" w-[350px]">
                    Then, you can send us your inventory and the fun begins.
                    We’ll choose a delivery day together so your fulfilment is
                    not interrupted.
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-64 flex  ">
              <div>
                <div className="flex  items-center">
                  <div className="bg-[#230b34] w-[50px] h-[50px] text-center items-center rounded-full text-white  pt-1 text-3xl">
                    3
                  </div>
                  <div className="ms-8 text-5xl text-[#f67366] font-bold">
                    {" "}
                    Ship{" "}
                  </div>
                </div>
                <div className="mt-8   ">
                  <div className=" w-[350px]">
                    We pick, pack and ship all incoming orders directly from our
                    own warehouse until 12pm on the same day,
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-64 justify-end  ">
              <div className="flex items-center w-[310px] h-[150px] justify-end">
                <img
                  className=""
                  src="https://openshippingcalculator.com/img/91fa59e6781adbdced82e349bb595d99-1.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* warehouse Onsite */}
  
 
  
</>

  )
}

export default OpenShipCal