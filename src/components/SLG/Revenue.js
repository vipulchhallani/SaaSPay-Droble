import React from 'react'
import Box from '../../assets/images/Boximg.svg'
import Card1 from '../../assets/images/Group 1171280845.png'
import Card2 from '../../assets/images/card2.svg'
import Card3 from '../../assets/images/Card3.svg'


export default function Hero() {
  return (
    <div className='bg-white py-20'>
      <div className='w-11/12 2xl:max-w-[1170px] 3xl:max-w-[1500px] mx-auto ' >
       <div className=' sticky top-[6px]' >
        <h1 className='f-f-b-g text-6xl sm:text-[48px] text-black text-center    '>Where Revenue Meets Retention</h1>
        <p className='f-f-m text-lg text-center text-primary-light mt-3 '>Payments solution designed to realise forecasted revenue of monthly paying customers</p>

        </div>
        {/* 1st card start */}
        <div className="h-[700px] w-full bg-[#DDFDEF] mt-[52px] items-center sticky top-[92px] rounded-[16px]  ">
          <div className="grid grid-cols-12 items-center gap-4 lg:gap-20 px-6 sm:px-14 py-14">
            <div className="col-span-12 lg:col-span-6">
              <div className="md:pl-5  ">
                <img src={Box} className='w-12 h-12' alt="" />
                <h1 className='f-f-b-g text-4xl sm:text-5xl text-black mt-4 sm:mt-8 lg:leading-[40px] '>Empower your sales with ultimate payment flexibility</h1>
                <p className='f-f-r text-base text-grey-dark mt-3'>Supercharge your sales journey with SaaSPay, the definitive payment enabler that facilitates rapid deal closures and smooth transactions.</p>
                <p className='f-f-r text-base text-grey-dark mt-3'>As your ultimate sales accelerator, SaaSPay ensures you not only fast-track your deals but also power them with seamless payment solutions.</p>
              </div>

            </div>
            <div className="col-span-12 lg:col-span-6">
              <img src={Card1} className='w-full h-auto 2xl:h-[587px] ' alt="" />
            </div>
          </div>

        </div>
        {/* 1st card end */}


        {/* 2nd card start */}

        <div className="h-[700px] w-full bg-[#e4dcff]  items-center sticky top-[115px] rounded-[16px]  ">
          <div className="grid grid-cols-12 items-center gap-4 lg:gap-20 px-6 sm:px-14 py-14">
            <div className="col-span-12 lg:col-span-6">
              <div className="md:pl-5">
                <img src={Box} className='w-12 h-12' alt="" />
                <h1 className='f-f-b-g text-4xl sm:text-5xl text-black mt-4 sm:mt-8 lg:leading-[40px] '>Eliminate monthly payments & increase retention</h1>
                <p className='f-f-r text-base text-grey-dark mt-3'>Annualise your monthly deals through the magic of payment flexibility. No more losing potential customers, watching leads go cold, or chasing renewal payments because of monthly subscriptions.</p>
                <p className='f-f-r text-base text-grey-dark mt-3'>With our payment flexibility for SaaS buyers, effortlessly annualize deals, say goodbye to payment follow-ups, and watch your customer retention rates skyrocket.</p>
              </div>

            </div>
            <div className="col-span-12 lg:col-span-6">
              <img src={Card2} className='w-full h-auto 2xl:h-[579px] ' alt="" />
            </div>
          </div>

        </div>
        {/* 2nd card end  */}

        {/* 3rd card start */}
        <div className="h-[700px] w-full bg-[#FFF8E3] mt-[52px] items-center sticky top-[150px] rounded-[16px]  ">
          <div className="grid grid-cols-12 items-center gap-4 lg:gap-20 px-6 sm:px-14 py-14">
            <div className="col-span-12 lg:col-span-6">
              <div className="md:pl-5">
                <img src={Box} className='w-12 h-12' alt="" />
                <h1 className='f-f-b-g text-4xl sm:text-5xl text-black mt-4 sm:mt-8  lg:leading-[40px]'>Realise ACV on Day 1 and gain full visibility into your payments</h1>
                <p className='f-f-r text-base text-grey-dark mt-3'>Why wait? Experience full ACV on day 1 with upfront payments using our advanced SaaS customer retention tool.</p>
                <p className='f-f-r text-base text-grey-dark mt-3'>Stay ahead of the curve by tracking all payments, your ultimate solution for seamlessly managing payments and transactions.</p>
              </div>

            </div>
            <div className="col-span-12 lg:col-span-6">
              <img src={Card3} className='w-full h-auto 2xl:h-[628px] ' alt="" />
            </div>
          </div>

        </div>

        {/* 3rd card end */}

      </div>



    </div>
  )
}
