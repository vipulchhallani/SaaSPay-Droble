import React, { useRef, useEffect, useState } from 'react';
import Transactioncrd from '../../assets/images/Transactioncrd.svg'
import Awsrd from '../../assets/images/awsrd.svg'
import unlockcard from '../../assets/images/unlockcard.svg'



export default function Introducing() {
  const cardRefs = [useRef(), useRef(), useRef()];
  const [cardPositions, setCardPositions] = useState([0, 0, 0]);

  useEffect(() => {
    const updatePositions = () => {
      const newPositions = cardRefs.map((ref) => ref.current.getBoundingClientRect().top);
      setCardPositions(newPositions);
    };

    window.addEventListener('scroll', updatePositions);

    return () => window.removeEventListener('scroll', updatePositions);
  }, [cardRefs]);
  return (
    <div className=' w-11/12 sm:max-w-[1352px] mx-auto pt-[51px] pb-[106px] ' >
    <div className='sticky top-[5px]' >
      <h2 className='   text-center  text-black f-f-b-g  text-2xl sm:text-7xl ' >
        Introducing SaaSPay
      </h2>
      <h2 className=' text-center  text-primary f-f-b-g  text-2xl sm:text-7xl ' >
        A Customer-First Payment Solution
      </h2>
      <h2 className=' text-primary-light text-tiny  sm:text-lg text-center f-f-m mt-[10px] ' >
        To solve for Multi-currency transactions & Payment Flexibility
      </h2>
      </div>
      {/*  testing started */}
      {/* first card started */}
      <div>
        <div className='sticky top-[90px] mt-[74px] introducing-bg  rounded-[20px] ' >
          <div className=' w-11/12 xl:w-full mx-auto xl:pl-[110px] xl:pr-[129px] ' >
            <div className=' grid grid-cols-12  ' >
              <div className=' col-span-12 xl:col-span-7' >
                <h2 className=' f-f-b-g text-black  text-2xl sm:text-5xl pt-[45px]  sm:pt-[66px] ' >Bye USD Payments, Hello <br /> Smooth INR Transactions!</h2>
                <h4 className=' text-grey-dark text-tiny  sm:text-base f-f-r py-[20px] sm:pt-[30px] sm:pb-[40px] '  >Eliminate 15% of withholding taxes to save more on your AWS Marketplace Subscriptions. Transact in INR and forgo the paperwork & exorbitant conversion fee that comes with ACH transfers.</h4>
              </div>
              <div className=' col-span-12 xl:col-span-5' >
                <img src={Transactioncrd} className=' w-[260px] h-[390px] ml-auto mr-auto xl:mr-0 ' />
              </div>
            </div>
          </div>
        </div>
        {/* first card ended */}
        {/* 2nd card started */}
        <div className='sticky top-[110px] mt-[40px] introducing2-bg  rounded-[20px] ' >
          <div className=' w-11/12 xl:w-full mx-auto xl:pl-[110px] xl:pr-[129px] ' >
            <div className=' grid grid-cols-12  ' >
              <div className=' col-span-12 xl:col-span-7' >
                <h2 className=' f-f-b-g text-black  text-2xl sm:text-5xl pt-[45px]  sm:pt-[66px] ' >Buy Now, Pay 3 Months Later at No Cost</h2>
                <h4 className=' text-grey-dark text-tiny  sm:text-base f-f-r py-[20px] sm:pt-[30px] sm:pb-[40px] '  >With a free of cost 90 day payment solution, adjust working capital cycles and convert opex into capex. Improve cash flow management to optimise capital allocation.</h4>
              </div>
              <div className=' col-span-12 xl:col-span-5' >
                <img src={Awsrd} className=' w-[260px] h-[390px] ml-auto mr-auto xl:mr-0 ' />
              </div>
            </div>
          </div>
        </div>
        {/* 2nd card ended */}
        {/* 3rd card started */}
        <div className='sticky top-[150px] mt-[40px] introducing3-bg  rounded-[20px]'>
          <div className=' w-11/12 xl:w-full mx-auto xl:pl-[110px] xl:pr-[129px] ' >
            <div className=' grid grid-cols-12  ' >
              <div className=' col-span-12 xl:col-span-7' >
                <h2 className=' f-f-b-g text-black  text-2xl sm:text-5xl pt-[45px]  sm:pt-[66px] ' >Unlock Discounts up to 57% & Monthly Payment Flexibility</h2>
                <h4 className=' text-grey-dark text-tiny  sm:text-base f-f-r py-[20px] sm:pt-[30px] sm:pb-[40px] '  >Access discounts upwards of 50% that come with full upfront EDP commits without paying upfront. Continue to pay monthly to enjoy payment flexibility with SaaSPay.</h4>
              </div>
              <div className=' col-span-12 xl:col-span-5' >
                <img src={unlockcard} className=' w-[260px] h-[390px] ml-auto mr-auto xl:mr-0 ' />
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* 3rd card ended */}
      {/* testing ended */}
    </div>
  )
}
