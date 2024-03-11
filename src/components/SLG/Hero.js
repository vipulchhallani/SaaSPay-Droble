import React from 'react'
import play from '../../assets/images/Playbutton.svg'
import Graph from '../../assets/images/Graphslg.png'



export default function Hero() {
  return (
    <div className='bg-[#E1F8FF] py-20'>
      <div className='w-11/12 2xl:max-w-[1170px] 3xl:max-w-[1500px] mx-auto ' >
        <div className="w-full text-center lg:text-start xl:w-[900px]">
          <h1 className='f-f-b-g text-5xl sm:text-8xl md:text-9xl text-black leading-tight xl:leading-[72px]'>Solve for Revenue Realisation, Retention and Annual Subscription Sales</h1></div>
        <p className='f-f-m text-[20px] text-primary-light mt-4 text-center lg:text-start'>With India’s First Buy Now Pay Later for SaaS & Cloud</p>
        <div className="text-center lg:text-start">

          <div className="sm:inline-flex items-center sm:space-x-[32px] mt-10 ">

            <button className='w-full sm:w-[205px] h-[52px] sm:h-[64px] rounded-[48px] bg-primary f-f-b text-lg text-white '>
              Join the Waitlist
            </button>

            <ul className='inline-flex items-center space-x-3 mt-3 sm:mt-0'>
              <li><img src={play} className='w-7 h-7 ' alt="" /></li>
              <li className='f-f-b text-lg text-primary'>Book a Demo</li>
            </ul>
          </div>
        </div>
        <img src={Graph} className=' w-full h-auto mt-[50px] sm:mt-[72px] ' />
      </div>

    </div>
  )
}
