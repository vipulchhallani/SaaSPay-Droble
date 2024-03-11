import React, { useState } from 'react'
import logo from '../../assets/images/logo.svg'

export default function Navbar() {
  const [navbar, setnavbar] = useState(false)
  return (
    <div>


      {/* <nav className="bg-transparent  w-full z-20  start-0  ">
        <div className="  w-11/12 2xl:max-w-[1240px] flex flex-wrap items-center justify-between mx-auto py-[20px] 2xl:py-[30px] ">
          <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className=" w-[140px] lg:w-[180px] lg:h-[38px]  " alt="" />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-[20px] rtl:space-x-reverse">
            <button type="button" className=" text-white f-f-r  text-tiny lg:text-lg  hidden sm:block ">Login</button>
            <button type="button" className=" hidden  sm:block f-f-r  text-tiny text-primary bg-white  w-[112px] h-[50px] rounded-[25px] ">Sign Up</button>
            <button onClick={() => setnavbar(!navbar)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  " aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#FFF" viewBox="0 0 17 14">
                <path stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className={`${navbar ? "block" : "hidden"} items-center justify-between  w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4  border border-gray-100 rounded-lg  md:space-x-[20px] rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
              <li>
                <a href="#" className="block py-2 px-3 text-white  rounded md:bg-transparent md:text-white md:p-0    text-tiny lg:text-lg  f-f-sm  " aria-current="page">Buyer</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  text-white-vlight    text-tiny lg:text-lg  f-f-r ">Seller</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  text-white-vlight    text-tiny lg:text-lg  f-f-r ">Resources</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  text-white-vlight    text-tiny lg:text-lg  f-f-r ">About Us</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  text-white-vlight    text-tiny lg:text-lg  f-f-r sm:hidden ">Login</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-center rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  text-primary    text-tiny lg:text-lg  f-f-r bg-white  sm:hidden  ">Sign Up</a>
              </li>

            </ul>
          </div>
        </div>
      </nav> */}
<nav className="bg-transparent  w-full z-20 ">
  <div className=" w-11/12 2xl:max-w-[1240px] flex flex-wrap items-center justify-between mx-auto py-[20px] 2xl:py-[30px] ">
    <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
    <img src={logo} className=" w-[140px] lg:w-[180px] lg:h-[38px]  " alt="" />
    </a>
    <button onClick={() => setnavbar(!navbar)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center  md:hidden " aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 17 14">
                <path stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
    </button>
    <div className= {`${navbar ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
      <ul className="  items-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0">
      <li className=' w-full md:w-auto ' >
                <a href="#" className="block py-2 px-3 text-white  rounded md:bg-transparent md:p-0  text-tiny lg:text-lg  f-f-m  " aria-current="page">Buyer</a>
              </li>
              <li className=' w-full md:w-auto ' >
                <a href="#" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  text-white   text-tiny lg:text-lg  f-f-m ">Seller</a>
              </li>
              <li className=' w-full md:w-auto ' >
                <a href="#" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  text-white   text-tiny lg:text-lg  f-f-m ">Resources</a>
              </li>
              <li className=' w-full md:w-auto ' >
                <a href="#" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  text-white   text-tiny lg:text-lg  f-f-m ">About Us</a>
              </li>
              <li className=' w-full md:w-auto  ' >
              <button type="button" className=" w-full md:w-[99px] h-[48px] f-f-b text-white border border-white rounded-[25px]  text-tiny  ">Login</button>
              </li>
              <li className=' w-full md:w-auto mt-4 md:mt-0' >
              <button type="button" className=" f-f-b  text-tiny bg-white text-primary-vdark w-full md:w-[114px] h-[48px] rounded-[25px] ">Sign Up</button>
              </li>

      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
