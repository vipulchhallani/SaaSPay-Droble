import React, { useState } from 'react';
import Footerlogo from '../../assets/images/logo.svg'
import Footerimg1 from '../../assets/images/Footerimg1.svg'
import Footerimg2 from '../../assets/images/Footerimg2.svg'
import Facebooklogo from '../../assets/images/facebook_ic.svg'
import Instalogo from '../../assets/images/Subtract.svg'
import Twitterlogo from '../../assets/images/Subtracttwitter.svg'
import Indeedlogo from '../../assets/images/linkdin.svg'

export default function Footer() {
  const [activeTab, setActiveTab] = useState(0); // 0 for Blogs, 1 for Calculators, 2 for Templates

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className=' bg-Footer pt-[60px] pb-[52px] ' >
      <div className=' w-11/12 2xl:max-w-[1170px] mx-auto ' >
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-12 lg:col-span-2">
            <img src={Footerlogo} className='w-[136px] h-[28px] mx-auto lg:mx-0' alt="" />

          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-6">
            <div className="w-full xl:w-[369px]">
              <h1 className='f-f-r mt-2 lg:mt-0 text-center sm:text-start  text-sm lg:text-tiny text-primary-vlight'>Browse our exclusive SaaS seller partner offerings, and unlock growth with SaaSPay.</h1></div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <ul className='inline-flex items-center space-x-10 sm:space-x-2 xl:space-x-[22px] w-full justify-center sm:float-right'>
              <li className='f-f-sm text-tiny xl:text-lg text-white'>Let’s try SaaSPay today</li>
              <li><button className='w-[110px] xl:w-[133px] h-[36px] xl:h-[48px] rounded-[32px] bg-green-dark f-f-b text-tiny xl:text-base text-black-dark'>Try it now</button></li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 mt-[74px]">
          <div className="col-span-12 sm:col-span-3 md:col-span-4 lg:col-span-2">
            <h1 className='f-f-sm text-sm text-grey-light'>Menu 1</h1>
            <ul className='mt-4'>
              <li className='f-f-r text-sm text-white mt-4 '>Text comes here</li>
              <li className='f-f-r text-sm text-white mt-4'>Text comes here</li>
              <li className='f-f-r text-sm text-white mt-4'>Text comes here</li>
              <li className='f-f-r text-sm text-white mt-4'>Text comes here</li>
            </ul>

          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-3">
            <h1 className='f-f-sm text-sm text-grey-light'>Menu 2</h1>
            <ul className='mt-4'>
              <li className='f-f-r text-sm text-white mt-4 '>Lorem ipsum dolor sit amet, cons adipiscing elit</li>
              <li className='f-f-r text-sm text-white mt-4'>Lorem ipsum dolor sit amet</li>
              <li className='f-f-r text-sm text-white mt-4'>Lorem ipsum dolor sit amet, cons adipiscing elit</li>

            </ul>

          </div>
          <div className="col-span-12 sm:col-span-3 lg:col-span-3">
            <h1 className='f-f-sm text-sm text-grey-light'>Menu 3</h1>
            <ul className='mt-4'>
              <li className='f-f-r text-sm text-white mt-4 '>Text comes here</li>
              <li className='f-f-r text-sm text-white mt-4'>Text comes here</li>
              <li className='f-f-r text-sm text-white mt-4'>Text comes here</li>

            </ul>

          </div>
          <div className="col-span-12 lg:col-span-4 mt-4 lg:mt-0">
            <h1 className='f-f-sm text-sm text-grey-light'>Resources</h1>
            <ul className='mt-4 inline-flex space-x-12 '>
              <li className={`f-f-r text-sm text-white cursor-pointer ${activeTab === 0 && 'border-b-2 border-[#2496FF]'}`} onClick={() => handleTabClick(0)}>
                <button>Blogs</button>
              </li>
              <li className={`f-f-r text-sm text-white cursor-pointer ${activeTab === 1 && 'border-b-2 border-[#2496FF]'}`} onClick={() => handleTabClick(1)}>
                <button>Calculators</button>
              </li>
              <li className={`f-f-r text-sm text-white cursor-pointer ${activeTab === 2 && 'border-b-2 border-[#2496FF]'}`} onClick={() => handleTabClick(2)}>
                <button>Templates</button>
              </li>
            </ul>

            {activeTab === 0 && (
              <div>
                <div className="grid grid-cols-12 mt-8 gap-2 items-center">
                  <div className="col-span-12 lg:col-span-4">
                    <img src={Footerimg1} className="w-[100px] h-[78px] mx-auto lg:ml-0" alt="" />
                  </div>
                  <div className="col-span-12 lg:col-span-8">
                    <h1 className="f-f-m text-[15px] text-white text-center lg:text-left">12x MRR on Day 1: SaasPay for Sellers</h1>
                  </div>
                </div>
                <div className="grid grid-cols-12 mt-6 gap-4 items-center">
                  <div className="col-span-12 lg:col-span-4">
                    <img src={Footerimg2} className="w-[100px] h-[78px] mx-auto lg:ml-0" alt="" />
                  </div>
                  <div className="col-span-12 lg:col-span-8">
                    <h1 className="f-f-m text-[15px] text-white text-center lg:text-left">Why BNPL for SaaS?</h1>
                  </div>
                </div>
              </div>
            )}
            {/* <div className="mt-2 border-b border-white w-full"></div>
  <div className=' ' >
  <div className="grid grid-cols-12 mt-8 gap-2  items-center">
    <div className=" col-span-12 lg:col-span-4">
    <img src={Footerimg1} className=' w-[100px] h-[78px] mx-auto lg:ml-0 ' alt="" />
    </div>
    <div className="  col-span-12 lg:col-span-8">
      <h1 className='f-f-m text-[15px] text-white text-center lg:text-left'>12x MRR on Day 1: SaasPay for Sellers</h1>
    </div>
  </div>
  <div className="grid grid-cols-12 mt-6 gap-4 items-center">
    <div className="col-span-12 lg:col-span-4">
    <img src={Footerimg2} className=' w-[100px] h-[78px] mx-auto lg:ml-0 ' alt="" />
    </div>
    <div className="  col-span-12 lg:col-span-8">
      <h1 className='f-f-m text-[15px] text-white text-center lg:text-left'>Why BNPL for SaaS?</h1>
    </div>
  </div>
  </div> */}
          </div>
        </div>

        <div className="mt-10 border-b border-white w-full"></div>

        <div className="grid grid-cols-12 items-center mt-8">
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <ul className='inline-flex space-x-5 w-full justify-center lg:justify-start '>
              <li><img src={Instalogo} className='w-8 h-8' alt="" /></li>
              <li><img src={Facebooklogo} className='w-8 h-8' alt="" /></li>
              <li><img src={Indeedlogo} className='w-8 h-8' alt="" /></li>
              <li><img src={Twitterlogo} className='w-8 h-8' alt="" /></li>
            </ul>

          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <h3 className='f-f-r mt-8 sm:mt-0 text-tiny text-primary-vlight text-center'>© Copyright 2023 SaaSPay Inc.</h3>

          </div>
          <div className="col-span-12 lg:col-span-4">
            <ul className='inline-flex space-x-3 sm:space-x-5 w-full justify-center mt-8 lg:mt-0 '>
              <li className='f-f-r text-tiny text-primary-vlight'>Terms</li>
              <li className='f-f-r text-tiny text-primary-vlight'>Privacy</li>
              <li className='f-f-r text-tiny text-primary-vlight'>Policy</li>
              <li className='f-f-r text-tiny text-primary-vlight'>Security</li>
            </ul>

          </div>
        </div>
      </div>




    </div>
  )
}
