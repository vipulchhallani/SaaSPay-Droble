import React from 'react'
import Simplifiedsaspay from '../../assets/images/Simplifiedsaspay.svg'
import Lacalise from './Localise'

export default function Navigate() {
  return (
    <>
      <div className='py-32 bg-[#010101]'>
        <div className='w-11/12 2xl:max-w-[1170px] 3xl:max-w-[1500px]  mx-auto ' >
          <div className="w-full  xl:w-[564px]">
            <h1 className='f-f-b-g text-4xl sm:text-7xl text-white'>Navigate the Ultimate Sales Journey</h1>
          </div>
          <img src={Simplifiedsaspay} className='w-full h-auto xl:h-[400px] mt-[72px] ' alt="" />
        </div>
        <Lacalise />
        <div className='w-11/12 2xl:max-w-[1170px] 3xl:max-w-[1500px]  mx-auto ' >
          <div className=' bg-[#1B1C1D] w-full h-[320px] sm:h-[520px] rounded-[16px] mt-[64px] ' >
          </div>
        </div>
      </div>
      <div className=' w-11/12 2xl:max-w-[1170px] 3xl:max-w-[1500px] mx-auto' >
        <div className=' mt-[72px] md:mt-[144px] liese-bg p-[64px]  h-auto xl:h-[240px] '  >
          <div className='grid grid-cols-12  gap-4 sm:gap-8 items-center'>
            <div className=" col-span-12 xl:col-span-8" >
              <h2 className='  f-f-b-g text-[20px] sm:text-5xl md:text-7xl md:leading-[56px] text-white  text-center xl:text-left ' >
              Ready to Elevate Your SaaS Sales?
              </h2>
            </div>
            <div className="  col-span-12 xl:col-span-4 text-center xl:text-right " >
              <button className=' w-[205px] h-[64px]  rounded-[48px] bg-white text-green-light text-lg f-f-b '  >
                Join the Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
