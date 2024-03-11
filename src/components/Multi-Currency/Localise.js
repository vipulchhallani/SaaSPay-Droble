import React, { useState } from 'react';
import empty from '../../assets/images/empty-wallet.png'
import emptyhvr from '../../assets/images/empty-wallet-hover.svg'
import coin from '../../assets/images/coin.svg'
import coinhvr from '../../assets/images/coin-hover.svg'
import send from '../../assets/images/send-2.svg'
import sendhvr from '../../assets/images/send-2-hover.svg'
import localsimage from '../../assets/images/localsimage.svg'

export default function Localise() {
  const [selectedCard, setSelectedCard] = useState(0);

  // Array of card data
  const cardsData = [
    {
      src: empty,
      srcHover: emptyhvr,
      heading: 'Simplifying Currency Conversion',
      content: 'Raise an invoice in INR using SaaSPay',
      buttontext:"Step 1",
    },
    {
      src: send,
      srcHover: sendhvr,
      heading: 'Buyer-Friendly INR <br/> Payments',
      content: 'Hassle-free INR payment completed by the buyer',
      buttontext:"Step 2",
    },
    {
      src: coin,
      srcHover: coinhvr,
      heading: 'Seamlessly Convert <br/> to USD',
      content: 'You realize revenue in USD facilitated by our Forex APIs',
      buttontext:"Step 3",
    }
  ];

  // Function to handle card selection
  const handleCardSelection = (index) => {
    setSelectedCard(index);
  };

  return (
    <div className='w-11/12 2xl:max-w-[1240px] mx-auto pt-[65px] md:pt-[144px]'>
      <h2 className='text-black text-2xl md:text-7xl f-f-b-g md:leading-[56px]'>
        Localise Your Payments
        <br /> How Do We Make It Happen?
      </h2>
      <div className='mt-[72px]'>
        <div className='grid grid-cols-12 md:mt-[104px] gap-4 sm:gap-8'>
          {cardsData.map((card, index) => (
            <div className={`col-span-12 md:col-span-6 xl:col-span-4`} key={index}>
              <div onMouseEnter={() => handleCardSelection(index)} className='cursor-pointer'>
                <div className={`border w-full ${selectedCard === index ? 'border-primary' : 'border-grey-dark opacity-[0.2]'} `}></div>
                <div className={`flex justify-center items-center w-[48px] h-[48px] ${selectedCard === index ? 'bg-pink' : 'bg-white-dark'} mt-[32px] rounded-[12px]`} >
                  <img src={selectedCard === index ? card.srcHover : card.src} className='w-[27px] h-[27px]' alt='Card' />
                </div>
                <h2 className='text-black f-f-b-g text-2xl leading-[36px] mt-[20px]' dangerouslySetInnerHTML={{ __html: card.heading }}></h2>
                <ul className='inline-flex mt-2'>
                  <li>
                    <button className={`w-[62px] h-[24px] rounded-[38px] text-white text-tiny ${selectedCard === index ? 'bg-primary' : 'bg-grey-vdark'} `}>
                   {card.buttontext}
                    </button>
                  </li>
                  <li className='ml-[12px]'>
                    <h2 className='text-grey-dark text-tiny f-f-r'>
                      {card.content}
                    </h2>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img src={localsimage} className='w-full h-auto mt-[64px]' />
      <div className='mt-[72px] md:mt-[144px] liese-bg p-[64px] h-auto xl:h-[240px]'>
        <div className='grid grid-cols-12 gap-4 sm:gap-8 items-center'>
          <div className="col-span-12 xl:col-span-8">
            <h2 className='f-f-b-g text-[20px] sm:text-5xl md:text-7xl md:leading-[56px] text-white text-center xl:text-left'>
              Don't let Multi-Currency complexities hold you back
            </h2>
          </div>
          <div className="col-span-12 xl:col-span-4 text-center xl:text-right">
            <button className='w-[205px] h-[64px] rounded-[48px] bg-white text-green-light text-lg f-f-b'>
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
