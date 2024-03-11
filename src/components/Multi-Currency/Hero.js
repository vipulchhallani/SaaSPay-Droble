import React from 'react'
import Currencyhero from '../../assets/images/Currencyhero.svg'

export default function Hero() {
  return (
    <div>
      <div className=' w-11/12 2xl:max-w-[1240px] mx-auto ' >
        <div className=' grid grid-cols-12 gap-4  ' >
          <div className='  col-span-12 lg:col-span-7 ' >
            <div className=' pt-[70px] 2xl:pt-[130px] ' >
           
                {/* <h3 className=' text-2xl sm:text-6xl 2xl:text-8xl f-f-b-g text-green  ' >
                  Eliminate USD Transactions
                </h3> */}
                <h4 className=' text-5xl sm:text-8xl 2xl:text-9xl f-f-b-g text-white  2xl:leading-[80px] ' >
                Bye USD Payments!👋 Hello, Smooth 
                </h4>
                <h4 className=' text-5xl sm:text-8xl 2xl:text-9xl f-f-b-g text-green  2xl:leading-[80px] ' >
             INR Transactions!
                </h4>
              <h5 className=' f-f-m text-lg 2xl:text-xl  text-grey pt-[16px] ' >
              Eliminate withholding taxes & unlock 15% savings on SaaS & Cloud tools from AWS Marketplace & ISVs 
              </h5>
                  <button className=' mt-[40px] bg-primary w-[205px] h-[64px] rounded-[48px] f-f-b text-lg text-white ' >
                  Join the Waitlist
                  </button>
            </div>
          </div>
          <div className='  col-span-12 lg:col-span-5 ' >
            <img src={Currencyhero} className=' w-full 2xl:w-[511px] h-[583px] sm:mb-[42px] sm:mt-[42px] lg:mt-[80px] ' />
          </div>

        </div>
      </div>
    </div>
  )
}
