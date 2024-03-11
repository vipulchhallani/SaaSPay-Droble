import React from 'react'
import Nextarrow from '../../assets/images/nextarrow.svg'
import orderdetails from '../../assets/images/orderdetails.svg'


export default function Hero() {
  return (
    <div className='herobg pt-14 xl:pt-[142px]'>
      <div className='w-11/12 2xl:max-w-[1240px] 3xl:w-[1500px] mx-auto ' >
        <h1 className='f-f-m-g text-5xl sm:text-8xl lg:text-9xl text-black-light text-center '><span className=' f-f-b-g ' > 12</span>x Cash Flow on <span className=' f-f-b-g ' >Day 1 </span></h1>

        <h2 className='f-f-r text-[20px] sm:text-[22px] xl:text-xl text-grey-dark text-center my-5 sm:my-[37px] '>Realise forecasted revenue of monthly customers</h2>
        <div className="text-center pb-[70px] space-x-5 sm:space-x-10 items-center">
          <button className='w-[150px] sm:w-[166px] h-[45px] sm:h-[50px] bg-primary rounded-[103px] f-f-r text-tiny text-white'>
            Join the Waitlist
          </button>

          <button className='w-[148px] h-[50px] bg-transparent  '>
            <ul className='inline-flex items-center space-x-[10px] '>
              <li className='f-f-r text-tiny text-primary'>Book a Demo</li>
              <li className='w-[45px] sm:w-[50px] h-[45px] sm:h-[50px] rounded-[25px] border border-primary flex items-center'><img src={Nextarrow} className='w-3 h-auto mx-auto ' alt="" /></li>
            </ul>
          </button>
        </div>

        <img src={orderdetails} className='w-[90%] xl:w-[1056px] h-auto mx-auto' alt="" />


      </div>

    </div>
  )
}
