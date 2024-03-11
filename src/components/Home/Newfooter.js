import React from 'react'
import Footerlogo from '../../assets/images/logo.svg'
import Facebooklogo from '../../assets/images/facebook_ic.svg'
import Instalogo from '../../assets/images/Subtract.svg'
import Twitterlogo from '../../assets/images/Subtracttwitter.svg'
import Indeedlogo from '../../assets/images/linkdin.svg'

export default function Newfooter() {
  return (
    <div className=' bg-Footer pt-[60px]  ' >
    <div className=' w-11/12 2xl:max-w-[1170px] 3xl:max-w-[1500px] mx-auto ' >
      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-12 lg:col-span-2">
          <img src={Footerlogo} className='w-[136.51px] h-[ 27.999px] mx-auto lg:mx-0' alt="" />

        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-6">
          <div className="w-full xl:w-[369px]">
            <h1 className='f-f-r mt-2 lg:mt-0 text-center sm:text-start  text-sm lg:text-tiny text-primary-vlight'>Browse our exclusive SaaS seller partner offerings, and unlock growth with SaaSPay.</h1></div>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <ul className='inline-flex items-center space-x-10 sm:space-x-2 xl:space-x-[22px] w-full justify-center sm:float-right'>
            <li className='f-f-sm text-tiny xl:text-lg text-white'>Let’s try SaaSPay today</li>
            <li><button className='w-[110px] xl:w-[133px] h-[36px] xl:h-[48px] rounded-[32px] bg-green-dark f-f-b text-tiny xl:text-base text-black-dark'>Start today</button></li>
          </ul>
        </div>
      </div>

<div className="grid grid-cols-12 gap-4 sm:gap-8 2xl:gap-[80px] mt-[64px] pl-4  sm:pl-0">
  <div className="col-span-12 sm:col-span-6 lg:col-span-3">
    <h1 className='f-f-sm text-sm text-grey-light'>Products</h1>
    <ul className='mt-4  space-y-3'>
      <li className='f-f-r text-sm text-white'>SLG </li>
      <li className='f-f-r text-sm text-white'>PLG </li>
      <li className='f-f-r text-sm text-white'>MC </li>
      <li className='f-f-r text-sm text-white'>Net 90 </li>
      <li className='f-f-r text-sm text-white'>Insurance </li>
    </ul>
  </div>
  <div className="col-span-12 sm:col-span-6 lg:col-span-3">
    <h1 className='f-f-sm text-sm text-grey-light'>ICP Use Cases</h1>
    <ul className='mt-4  space-y-3'>
      <li className='f-f-r text-sm text-white'>For Sales  </li>
      <li className='f-f-r text-sm text-white'>For Finance </li>
      <li className='f-f-r text-sm text-white'>For Customer Success </li>
      <li className='f-f-r text-sm text-white'>For Resellers </li>
      <li className='f-f-r text-sm text-white'>For Founders </li>
    </ul>
  </div>
  <div className="col-span-12 sm:col-span-6 lg:col-span-3">
    <h1 className='f-f-sm text-sm text-grey-light'>Use Cases</h1>
    <ul className='mt-4  space-y-3'>
      <li className='f-f-r text-sm text-white'>Fast Tracked Revenue Realisation </li>
      <li className='f-f-r text-sm text-white'>Recollections Churn & Auto-debit </li>
      <li className='f-f-r text-sm text-white'>More Annual Sub Sales </li>
      <li className='f-f-r text-sm text-white'>Local currency & Taxation </li>
      <li className='f-f-r text-sm text-white'>Renewals  </li>
      <li className='f-f-r text-sm text-white'>Non-dilutive Capital  </li>
    </ul>
  </div>
  <div className="col-span-12 sm:col-span-6 lg:col-span-3">
    <h1 className='f-f-sm text-sm text-grey-light'>Buying on AWS</h1>
    <ul className='mt-4  space-y-3'>
      <li className='f-f-r text-sm text-white'>Net 90 </li>
      <li className='f-f-r text-sm text-white'>Flexi </li>
      <li className='f-f-r text-sm text-white'>Cross Border </li>
      
    </ul>
  </div>
</div>


<div className="grid grid-cols-12 gap-4 sm:gap-8 2xl:gap-[80px] mt-10 pl-4  sm:pl-0">
  <div className="col-span-12 sm:col-span-6 lg:col-span-3">
    <h1 className='f-f-sm text-sm text-grey-light'>Resources</h1>
    <ul className='mt-4  space-y-3'>
      <li className='f-f-r text-sm text-white'>E-Books </li>
      <li className='f-f-r text-sm text-white'>Blogs </li>
      <li className='f-f-r text-sm text-white'>White Papers </li>
      <li className='f-f-r text-sm text-white'>Capital Efficiency Calculator </li>
      
    </ul>
  </div>
  <div className="col-span-12 sm:col-span-6 lg:col-span-3">
    <h1 className='f-f-sm text-sm text-grey-light'>Comparison</h1>
    <ul className='mt-4  space-y-3'>
      <li className='f-f-r text-sm text-white'>Corporate Credit Cards  </li>
      <li className='f-f-r text-sm text-white'>Velocity </li>
      <li className='f-f-r text-sm text-white'>Klub </li>
      <li className='f-f-r text-sm text-white'>Recur </li>
   
    </ul>
  </div>

  <div className="col-span-12 sm:col-span-6 lg:col-span-3">
    <h1 className='f-f-sm text-sm text-grey-light'>Customer Success Stories</h1>
    <ul className='mt-4  space-y-3'>
      <li className='f-f-r text-sm text-white'>Sellers </li>
      <li className='f-f-r text-sm text-white'>Buyers </li>
      <li className='f-f-r text-sm text-white'>Marketplace </li>
      <li className='f-f-r text-sm text-white'>Insurance </li>
   
    </ul>
  </div>

  <div className="col-span-12 sm:col-span-6 lg:col-span-3">
    <h1 className='f-f-sm text-sm text-grey-light'>More</h1>
    <ul className='mt-4  space-y-3'>
      <li className='f-f-r text-sm text-white'>Culture </li>
      <li className='f-f-r text-sm text-white'>Careers </li>
      <li className='f-f-r text-sm text-white'>Demo </li>
      <li className='f-f-r text-sm text-white'>Contact </li>
   
    </ul>
</div>
</div>






     
      <div className="mt-10 border-b border-white w-full"></div>

      <div className="grid grid-cols-12 items-center py-8">
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
          <ul className='inline-flex space-x-3 sm:space-x-5 w-full justify-center lg:justify-end  mt-8 lg:mt-0 '>
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
