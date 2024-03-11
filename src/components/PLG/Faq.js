import React, { useState } from 'react';
import { Collapse, Button } from '@material-tailwind/react';

export default function Faq() {
  const collapseData = [
    {
      heading: "How many accounts can my company have?",
      content: "Your company can only have one account but you can add various teammates to the same account."
    },
    {
      heading: "Can I change the currency on the SaaSPay platform?",
      content: "Multi-currency transactions on AWS typically involve the following steps: Currency Selection, Currency Conversion, Billing and Invoicing, Payment Processing, Account Management. Overall, multi-currency transactions on AWS streamline the payment process for users operating in different regions, enabling them to leverage AWS services efficiently without concerns about currency compatibility."
    },
    {
      heading: "Where can I see my active Subscriptions? ",
      content: "Multi-currency on AWS supports a range of currencies to accommodate users worldwide. Specific supported currencies can be checked with AWS documentation or account settings."
    },
    {
      heading: "Where can I see my repayment schedule?",
      content: "No, multi-currency on AWS is not limited to specific currency pairs like INR to USD. It supports a variety of currencies, enabling users to conduct transactions in their preferred currency."
    },

  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div  >
      <h2 className=' text-center text-grey-dark f-f-r-g text-lg pt-[120px] ' > FAQs</h2>
      <h2 className='text-black text-5xl md:text-7xl f-f-b-g text-center  '>
        Frequently <span className=' f-f-r-g '  > asked Questions </span>
      </h2>
      <div className=' w-11/12 xl:w-[978px] 3xl:w-[1500px] mx-auto pb-[194px] pt-[61px] '>
        {collapseData.map((item, index) => (
          <div key={index} className={`mb-[32px] border border-[#E2E2E7] px-[32px] py-[35px] 2xl:py-[50px] rounded-[16px]`}>
            <button
              onClick={() => handleToggle(index)}
              className={`  text-black capitalize w-full text-start  text-[20px] md:text-xl  relative f-f-b-g `}
            >
              {item.heading}
              {/* {activeIndex === index ? (

                <svg className='absolute top-[10px] right-[-15px] sm:right-[15px]' width="13" height="4" viewBox="0 0 13 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.1292 0.4375H1.62917C1.13698 0.4375 0.754166 0.847656 0.754166 1.3125V2.1875C0.754166 2.67969 1.13698 3.0625 1.62917 3.0625H12.1292C12.594 3.0625 13.0042 2.67969 13.0042 2.1875V1.3125C13.0042 0.847656 12.594 0.4375 12.1292 0.4375Z" fill="#7840B2" />
                </svg>

              ) : (
                
                <svg className='absolute top-[10px] right-[-15px] sm:right-[15px]' width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.1292 5.4375H8.19167V1.5C8.19167 1.03516 7.78151 0.625 7.31667 0.625H6.44167C5.94948 0.625 5.56667 1.03516 5.56667 1.5V5.4375H1.62917C1.13698 5.4375 0.754166 5.84766 0.754166 6.3125V7.1875C0.754166 7.67969 1.13698 8.0625 1.62917 8.0625H5.56667V12C5.56667 12.4922 5.94948 12.875 6.44167 12.875H7.31667C7.78151 12.875 8.19167 12.4922 8.19167 12V8.0625H12.1292C12.594 8.0625 13.0042 7.67969 13.0042 7.1875V6.3125C13.0042 5.84766 12.594 5.4375 12.1292 5.4375Z" fill="#323B4B" />
                </svg>

              )} */}
                 {activeIndex === index ? (
                <svg className='absolute top-0 right-[-15px] sm:right-[15px]' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#5B2EBC" />
                  <rect x="10" y="15" width="12" height="2" rx="1" fill="white" />
                </svg>
              ) : (
                <svg className='absolute top-0 right-[-15px] sm:right-[15px]' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#5B2EBC" />
                  <rect x="10" y="15" width="12" height="2" rx="1" fill="white" />
                  <rect x="15" y="22" width="12" height="2" rx="1" transform="rotate(-90 15 22)" fill="white" />
                </svg>
              )}
            </button>
            <Collapse open={activeIndex === index}>
              <p className="text-grey-dark f-f-r text-tiny md:text-base  mt-3">
                {item.content}
              </p>
            </Collapse>
          </div>
        ))}

      </div>
    </div>
  );
}
