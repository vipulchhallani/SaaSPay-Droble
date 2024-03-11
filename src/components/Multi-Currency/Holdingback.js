import React from 'react'
import Signature from '../../assets/images/Vector1338.svg'
import Transactioncurrency from '../../assets/images/Transactioncurrency.svg'
import empty from '../../assets/images/empty-wallet-2.svg'
import receipt from '../../assets/images/receipt-item.svg'

export default function Holdingback() {
  return (
    <div className=' w-11/12 2xl:max-w-[1240px] mx-auto pt-[50px] md:pt-[158px] ' >
      <div className="relative">
<h1 className='f-f-b text-[20px] sm:text-4xl md:text-6xl lg:text-7xl text-black leading-7 sm:leading-10 md:leading-[50px] lg:leading-[56px]'>INR vs. USD </h1>
<div className="absolute -bottom-1 sm:-bottom-4 left-0">
  <img src={Signature} className='w-[105px] sm:w-[185px] md:w-[205px] lg:w-[248px] h-auto' alt="" />
</div>
</div>
<h1 className='f-f-b text-[20px] sm:text-4xl md:text-6xl lg:text-7xl text-black leading-7 sm:leading-10 md:leading-[50px] lg:leading-[56px] mt-3'>What's Holding You Back?</h1>

   <div className=' 2xl:w-[584px] ' >
    <h3 className=' text-primary-light f-f-m text-lg ' >Transacting in USD presents customers challenges in withholding taxes, outward remittance & more.</h3>
    </div>

    <img src={Transactioncurrency} className=' w-full h-auto xl:h-[400px] mt-[50px] md:mt-[104px] '  />
    {/* cards started */}
                <div className=' grid grid-cols-12 mt-[50px] md:mt-[104px] gap-4 sm:gap-8 ' >
                    <div className=' col-span-12 lg:col-span-6 ' >
                    <div className='bg-white-light rounded-[24px] p-[32px] h-[380px] sm:h-[312px] '>
  <div className='flex justify-center items-center w-[56px] h-[56px] rounded-[14px] bg-white crd-hol'>
    <img src={empty} className='w-[32px] h-[32px]' alt='Empty' />
  </div>

  <h2 className=' text-black text-4xl f-f-b-g mt-[32px] ' >
                Unrealised Revenue
                </h2>
                <div className='  2xl:w-[405px] mt-[8px] ' >
                <h1 className=' text-base f-f-r text-grey-dark ' >
                Deals, revenue and customers remain unrealised due to the complexities presented by multi-currency & forex transactions.
                </h1>
                </div>

</div>
              
                    </div>
                    <div className=' col-span-12 lg:col-span-6 ' >
                    <div className='bg-white-light rounded-[24px] p-[32px] h-[380px] sm:h-[312px] '>
  <div className='flex justify-center items-center w-[56px] h-[56px] rounded-[14px] bg-white crd-hol'>
    <img src={receipt} className='w-[32px] h-[32px]' alt='Empty' />
  </div>

  <h2 className=' text-black text-4xl f-f-b-g mt-[32px]  leading-[40px] ' >
  Setbacks caused by withholding taxes
                </h2>
                <div className='  2xl:w-[405px] mt-[8px]  ' >
                <h1 className=' text-base f-f-r text-grey-dark ' >
                Withholding taxes set the customer back an 15 to 20%, leaving them expecting SaaS sellers to absorb the added costs.
                </h1>
                </div>

</div>
              
                    </div>
                </div>
    {/* cards ended */}
    </div>
  )
}
