import React from 'react'
import Wallet from '../../assets/images/empty-wallet.svg'
import Money from '../../assets/images/money-forbidden.svg'
import Receipt from '../../assets/images/Group 1171280656@2x.png'
import Signature from '../../assets/images/Vector1338.svg'


export default function Changing() {
  return (
    <div className='mt-6 md:mt-[52px]  w-11/12 2xl:max-w-[1170px] mx-auto ' >
      <div className="relative">

        <h1 className='f-f-b-g text-[20px] sm:text-4xl md:text-6xl lg:text-7xl text-black leading-7 sm:leading-10 md:leading-[50px] lg:leading-[56px]'>Changing the way you <br /> pay on AWS</h1>

        <div className="absolute -bottom-1 sm:-bottom-4 left-0">
          <img src={Signature} className='w-[105px] sm:w-[185px] md:w-[205px] lg:w-[248px] h-auto' alt="" />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-[30px] mt-10 md:mt-[83px] mb-10 sm:mb-[83px] justify-between">
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <div className="p-8 w-full h-[335px] xl:h-[360px] rounded-3xl bg-white-light">
            <img src={Wallet} className='w-[56px] h-[56px]' alt="" />
            <div className="w-[306px]">
              <h1 className='f-f-b-g text-xl xl:text-4xl text-black mt-5 leading-8 xl:leading-10'>Limited Payment <br /> Flexibility</h1>
            </div>
            <p className='f-f-r text-tiny xl:text-base mt-5 text-grey-dark'>AWS currently allows for flexible 30 day pay back on its SaaS & Cloud solution, however businesses looking to optimise working capital cycles request longer payback periods.</p>

          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <div className="p-8 w-full h-[335px] xl:h-[360px] rounded-3xl bg-white-light">
            <img src={Money} className='w-[56px] h-[56px]' alt="" />
            <div className="w-[306px]">
              <h1 className='f-f-b-g text-xl xl:text-4xl text-black mt-5 leading-8 xl:leading-10'>Complications in USD Payments</h1>
            </div>
            <p className='f-f-r text-tiny xl:text-base mt-5 text-grey-dark'>ACH transfers, withholding taxes and pricey conversion rates make multi-currency transactions a hassle transacting on Marketplace.</p>

          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 ">
          <div className="p-8 w-full h-[335px] xl:h-[360px] rounded-3xl bg-white-light">
            <img src={Receipt} className='w-[56px] h-[56px]' alt="" />
            <div className="w-[306px]">
              <h1 className='f-f-b-g text-xl xl:text-4xl text-black mt-5 leading-8 xl:leading-10'>Upfront payments to unlock discounts</h1>
            </div>
            <p className='f-f-r text-tiny xl:text-base mt-5 text-grey-dark'>Withholding taxes set the customer back an 15 to 20%, leaving them expecting SaaS sellers to absorb the added costs.</p>

          </div>
        </div>

      </div>
    </div>
  )
}
