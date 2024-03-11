import React from 'react'
import receviedpayment from '../../assets/images/receviedpayment.svg'
export default function Streamlining() {
  return (
    <div className=' w-11/12 2xl:max-w-[1240px] mx-auto pt-[65px] md:pt-[144px] ' >
            <h2 className=' text-black text-2xl md:text-7xl f-f-b-g text-center md:leading-[56px]  ' >
            Streamlining Multi-Currency <br/> Payments with SaaSPay <br/> <span className=' text-primary-dark ' > Go Borderless with SaaSPay </span>
            </h2>
            <img src={receviedpayment} className=' h-auto w-full lg:w-[983px] lg:h-[663px] mt-[30px] md:mt-[61px] mx-auto ' alt="" />
            
    </div>
  )
}
