import React from 'react'
import Simplifyproject from '../../assets/images/Simplifyproject.svg'
import Verification from '../../assets/images/Verification.svg'
// import Autopay from '../../assets/images/autopay.svg'
import Payment from '../../assets/images/payment.svg'
import Instantpayment from '../../assets/images/Instantpayment.svg'



export default function Hero() {
  return (
    <div className='bg-white pt-14 xl:pt-[141px]'>
      <div className='w-11/12 2xl:max-w-[1240px] 3xl:w-[1500px] mx-auto ' >
     <div className='sticky top-[11px]' >
        <h4 className='f-f-li-g text-4xl sm:text-[44px] text-black-light text-center sm:text-start'>A solution that</h4>
        <div className="w-full lg:w-[802px]">
          <h1 className='f-f-b-g text-5xl sm:text-[60px] md:text-[64px] text-black-light leading-tight mt-2 text-center sm:text-start'>Fits into your existing customer journey</h1></div>
        <p className='f-f-r-g text-black-light text-[20px] sm:text-2xl mt-[10px] text-center sm:text-start'>The customer journey with SaaSPay begins when a monthly plan is chosen.</p>
        </div>
        <div className=' mb-[130px] '  >
         
          {/* 1 card start */}
          <div className=" sticky top-[75px]  bg-pink-light rounded-[30px] p-8 sm:p-14 h-auto 2xl:h-[605px] mt-10 sm:mt-[91px] ">

            <div className="grid grid-cols-12 items-center gap-4 sm:gap-10 xl:gap-[54px]  ">
              <div className="col-span-12 lg:col-span-6">
                <h1 className='f-f-b-g text-2xl sm:text-[56px] text-center lg:text-start '>Simplified Checkout</h1>
                <p className='f-f-r-g text-[20px] sm:text-2xl text-black-light mt-[22px] text-center lg:text-start'>Customer is presented with monthly payables & corresponding dates.</p>

              </div>
              <div className="col-span-12 lg:col-span-6">
                <img src={Simplifyproject} className='w-full h-auto 2xl:h-[419px]' alt="" />
              </div>
            </div>

            {/* number started */}
            <ul className=' absolute top-[24%] sm:top-[29%] left-[9px] sm:left-[16px]  ' >
              <li className=' mt-[13px] sm:mt-[22px] ' >
                <h2 className='  text-tiny text-black-vdark f-f-sm ' >01</h2>
              </li>
              <li  >
                <h2 className=' mt-[13px] sm:mt-[22px] text-[10.904px] text-[#3E4C5966] f-f-sm  ' >02</h2>
              </li>
              <li  >
                <h2 className=' mt-[13px] sm:mt-[22px] text-[10.904px] text-[#3E4C5966] f-f-sm  ' >03</h2>
              </li>
              <li  >
                <h2 className=' mt-[13px] sm:mt-[22px] text-[10.904px] text-[#3E4C5966] f-f-sm  ' >04</h2>
              </li>
            </ul>

            {/* number ended */}
          </div>

          {/* 2nd card start */}

          <div className=" sticky top-[94px]  bg-pink-vlight rounded-[30px] p-8 sm:p-14 h-auto 2xl:h-[605px] mt-2  ">

            <div className="grid grid-cols-12 items-center gap-4 sm:gap-10 xl:gap-[54px]  ">
              <div className="col-span-12 lg:col-span-6">
                <img src={Verification} className='w-full h-auto 2xl:h-[421px]' alt="" />
              </div>


              <div className="col-span-12 lg:col-span-6">
                <h1 className='f-f-b-g text-2xl sm:text-[40px] xl:text-[48px] text-center lg:text-start xl:pl-14'>Bank verification</h1>
                <p className='f-f-r-g text-[20px] sm:text-2xl text-black-light mt-[22px] text-center lg:text-start  xl:pl-14'>They enter bank details for a preliminary analysis of statements.</p>

              </div>

            </div>
            {/* number started */}
            <ul className=' absolute top-[24%] sm:top-[29%] left-[9px] sm:left-[16px]  ' >

              <li  >
                <h2 className=' mt-[13px] sm:mt-[22px] text-[10.904px] text-[#3E4C5966] f-f-sm  ' >01</h2>
              </li>
              <li className=' mt-[13px] sm:mt-[22px] ' >
                <h2 className='  text-tiny text-black-vdark f-f-sm ' >02</h2>
              </li>
              <li  >
                <h2 className=' mt-[13px] sm:mt-[22px] text-[10.904px] text-[#3E4C5966] f-f-sm  ' >03</h2>
              </li>
              <li  >
                <h2 className=' mt-[13px] sm:mt-[22px] text-[10.904px] text-[#3E4C5966] f-f-sm  ' >04</h2>
              </li>
            </ul>

            {/* number ended */}

          </div>

          {/* 2nd card end */}


          {/* 3rd card start */}

          <div className=" sticky top-[116px]  bg-green-vlight rounded-[30px] p-8 sm:p-14 h-auto 2xl:h-[605px] mt-2  ">

            <div className="grid grid-cols-12 items-center gap-4 sm:gap-10 xl:gap-[54px]  ">

              <div className="col-span-12 lg:col-span-6">
                <h1 className='f-f-b-g text-2xl sm:text-[40px] xl:text-[48px] text-center lg:text-start xl:pl-14'>Setup Autopay</h1>
                <p className='f-f-r-g text-[20px] sm:text-2xl text-black-light mt-[22px] text-center lg:text-start  xl:pl-14'>They complete E-Nach & E-Sign to activate their subscription.</p>

              </div>

              <div className="col-span-12 lg:col-span-6">
                <img src={Payment} className='w-full h-auto 2xl:h-[421px]' alt="" />

                {/* <div className="relative">
    <img src={Autopay} className='w-full h-auto 2xl:h-[434px]' alt="" />
    <button className='autoplayset absolute -right-8 bottom-0  lg:bottom-[40%] w-[264px] h-[58px] xl:h-[72px] bg-primary rounded-[18px] f-f-m text-[20px] text-white'>
    Enable Autopay
    </button>
    </div> */}


              </div>

            </div>

            {/* number started */}
            <ul className=' absolute top-[24%] sm:top-[29%] left-[9px] sm:left-[16px]  ' >

              <li  >
                <h2 className=' mt-[13px] sm:mt-[22px] text-[10.904px] text-[#3E4C5966] f-f-sm  ' >01</h2>
              </li>
              <li  >
                <h2 className=' mt-[13px] sm:mt-[22px] text-[10.904px] text-[#3E4C5966] f-f-sm  ' >02</h2>
              </li>
              <li className=' mt-[13px] sm:mt-[22px] ' >
                <h2 className='  text-tiny text-black-vdark f-f-sm ' >03</h2>
              </li>

              <li  >
                <h2 className=' mt-[13px] sm:mt-[22px] text-[10.904px] text-[#3E4C5966] f-f-sm  ' >04</h2>
              </li>
            </ul>

            {/* number ended */}
          </div>

          {/* 3rd card end */}

          {/* 4th card start */}

          <div className=" sticky top-[150px]  bg-pink-dark rounded-[30px] p-8 sm:p-14 h-auto 2xl:h-[605px] mt-2  ">

            <div className="grid grid-cols-12 items-center gap-4 sm:gap-10 xl:gap-[54px]     ">
              <div className="col-span-12 lg:col-span-6">
                <img src={Instantpayment} className='w-full h-auto lg:h-[421px]' alt="" />
              </div>

              <div className="col-span-12 lg:col-span-6">
                <h1 className='f-f-b-g text-2xl sm:text-[40px] xl:text-[48px] text-center lg:text-start xl:pl-14'>Instant Payment</h1>
                <p className='f-f-r-g text-[20px] sm:text-2xl text-black-light mt-[22px] text-center lg:text-start  xl:pl-14'>
                  Customer pays monthly, you receive Annual Contract Value on Day 1</p>

              </div>

            </div>

            {/* number started */}
            <ul className=' absolute top-[24%] sm:top-[29%] left-[9px] sm:left-[16px]  ' >

              <li  >
                <h2 className=' mt-[13px] sm:mt-[22px] text-[10.904px] text-[#3E4C5966] f-f-sm  ' >01</h2>
              </li>
              <li  >
                <h2 className=' mt-[13px] sm:mt-[22px] text-[10.904px] text-[#3E4C5966] f-f-sm  ' >02</h2>
              </li>
              <li  >
                <h2 className=' mt-[13px] sm:mt-[22px] text-[10.904px] text-[#3E4C5966] f-f-sm  ' >03</h2>
              </li>
              <li className=' mt-[13px] sm:mt-[22px] ' >
                <h2 className='  text-tiny text-black-vdark f-f-sm ' >04</h2>
              </li>


            </ul>

            {/* number ended */}
          </div>

          {/* 4th card end */}
        </div>
      </div>

    </div>
  )
}
