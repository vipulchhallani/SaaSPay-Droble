import React, { useState } from 'react';
import empty from '../../assets/images/empty-wallet.png'
import coin from '../../assets/images/coin.svg';
import localsimage from '../../assets/images/localsimage.svg';
import send from '../../assets/images/send-2.svg'

export default function Localise() {
  const [selectedCard, setSelectedCard] = useState(0);

  // Array of card data
  const cardsData = [
    {
      src: empty,
      heading: 'Streamlining Order Dispatch to Your Customers',
      content: 'Raise an invoice in INR using SaaSPay'
    },
    {
      src: send,
      heading: 'Effortless Bulk Upload of Customer Details',
      content: 'Raise an invoice in INR using SaaSPay'
    },
    {
      src: coin,
      heading: 'Centralized Transaction Monitoring for Simplified Review',
      content: 'Raise an invoice in INR using SaaSPay'
    }
  ];

  // Function to handle card selection
  const handleCardSelection = (index) => {
    setSelectedCard(index);
  };

  return (
    <div className='w-11/12 2xl:max-w-[1170px] 3xl:max-w-[1500px] mx-auto pt-[65px] md:pt-[144px]'>
      {/* grid start */}
      <div className='grid grid-cols-12 md:mt-[104px] gap-4 sm:gap-8'>
        {cardsData.map((card, index) => (
          <div className={`col-span-12 md:col-span-6 xl:col-span-4`} key={index}>
            <div onMouseEnter={() => handleCardSelection(index)} className='cursor-pointer'>
              <div className={`border w-full ${selectedCard === index ? 'border-primary' : 'border-[#2B3035]'} `}></div>
              <div className={`flex justify-center items-center w-[48px] h-[48px] ${selectedCard === index ? 'bg-pink' : 'bg-[#1B1C1D]'} mt-[32px] rounded-[12px]`}>
                <img src={card.src} className='w-[27px] h-[27px]' alt='Card' />
              </div>
              <h2 className={`${selectedCard === index ? 'text-white' : 'text-[#90909A]'} f-f-b-g text-2xl leading-[36px] mt-[20px]`} dangerouslySetInnerHTML={{ __html: card.heading }}></h2>
            </div>
          </div>
        ))}
      </div>
      {/* grid ended */}
    </div>
  );
}

