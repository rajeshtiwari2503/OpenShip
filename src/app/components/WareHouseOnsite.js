import React from 'react'

const WareHouseOnsite = () => {
  return (
    <div> 
         <div className='pt-96 md:pt-0'></div>
  <div className='pt-96 md:pt-0'></div>
  <div className="bg-gray-200 py-12 mt-96 md:mt-0 ">
    <div className="mt-12   ">
      <div className="mt-12 flex justify-center ">
        <div className="font-fold text-4xl  ">
          <div>warehouse</div>
          <div className="border-b-4 border-red-400 w-[130px] mt-3"> </div>
        </div>
        <div className="text-4xl">&nbsp;Onsite</div>
      </div>
      <div className="px-4 py-20 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="flex justify-center mt-32">
            <div className="flex items-center justify-between p-3 w-[120px] bg-white rounded-xl">
              <div className="bg-red-400 rounded-xl text-white p-2">
                <i className="fas fa-truck " />
              </div>
              <div>
                <div> India</div>
                <div>25,000</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-32">
            <div className="flex items-center justify-between p-3 w-[120px] bg-white rounded-xl">
              <div className="bg-blue-400 rounded-xl text-white p-2">
                <i className="fas fa-truck " />
              </div>
              <div>
                <div> Berlin</div>
                <div>25,000</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-32">
            <div className="flex items-center justify-between p-3 w-[120px] bg-white rounded-xl">
              <div className="bg-gray-400 rounded-xl text-white p-2">
                <i className="fas fa-truck " />
              </div>
              <div>
                <div> UsA</div>
                <div>25,000</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-32">
            <div className="flex items-center justify-between p-3 w-[120px] bg-white rounded-xl">
              <div className="bg-yellow-400 rounded-xl text-white p-2">
                <i className="fas fa-truck " />
              </div>
              <div>
                <div> Canada</div>
                <div>25,000</div>
              </div>
            </div>
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
  )
}

export default WareHouseOnsite