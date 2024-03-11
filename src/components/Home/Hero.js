import React from 'react'
import HeroAWS from '../../assets/images/HeroAWS.svg'
import Heroimg from '../../assets/images/Heroimg.svg'

export default function Hero() {
  return (
    <div>
      <div className=' w-11/12 2xl:max-w-[1240px] mx-auto ' >
        <div className=' grid grid-cols-12 ' >
          <div className='  col-span-12 lg:col-span-7 ' >
            <div className=' mt-[70px] 2xl:mt-[88px] ' >
              <img src={HeroAWS} className=' w-[220px] 2xl:w-[282px] h-auto 2xl:h-[54px] ' />
              <div className=' py-[41px] ' >
                <h3 className=' text-2xl sm:text-6xl 2xl:text-8xl f-f-b-g text-green  ' >
                  Eliminate USD Transactions
                </h3>
                <h4 className=' text-5xl sm:text-8xl 2xl:text-9xl f-f-b-g text-white  2xl:leading-[80px] ' >
                  Unlock Discounts & Pay Later on AWS
                </h4>
              </div>
              <h5 className=' f-f-m text-lg 2xl:text-xl  text-grey ' >
                with SaaSPay’s Customer First Payments solution
              </h5>

            </div>
          </div>
          <div className='  col-span-12 lg:col-span-5 ' >
            <img src={Heroimg} className=' w-full 2xl:w-[556px] h-[629px] sm:mb-[42px] sm:mt-[42px] lg:mt-0 ' />
          </div>

        </div>
      </div>
    </div>
  )
}
