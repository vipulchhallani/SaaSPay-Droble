import React, { useState } from 'react';
import { Collapse, Button } from '@material-tailwind/react';

export default function Faq() {
  const collapseData = [
    {
      heading: "How can I increase SaaS sales effectively?",
      content: "To increase SaaS sales effectively, you need a robust sales tool like SaaSPay. Our solution streamlines the sales process, helping you sell smart, fast-track deals, and eliminate payment follow-ups, ultimately boosting revenue and customer retention."
    },
    {
      heading: "How can SaaS sales tools be effective in closing SaaS deals?",
      content: "Multi-currency transactions on AWS typically involve the following steps: Currency Selection, Currency Conversion, Billing and Invoicing, Payment Processing, Account Management. Overall, multi-currency transactions on AWS streamline the payment process for users operating in different regions, enabling them to leverage AWS services efficiently without concerns about currency compatibility."
    },
    {
      heading: "What strategies work better for B2B SaaS solutions in the current market?",
      content: "Multi-currency on AWS supports a range of currencies to accommodate users worldwide. Specific supported currencies can be checked with AWS documentation or account settings."
    },
    {
      heading: "What are the key considerations when selling SaaS to B2B Customers?",
      content: "No, multi-currency on AWS is not limited to specific currency pairs like INR to USD. It supports a variety of currencies, enabling users to conduct transactions in their preferred currency."
    },
    {
      heading: "What are effective strategies for retaining B2B SaaS customers?",
      content: "There may be specific transaction limits associated with multi-currency usage on AWS, depending on the user's account type, region, and other factors. Users should refer to AWS documentation or account settings for information on transaction limits."
    },
    {
      heading: "How can SaaS sales tools help with customer retention?",
      content: "There may be specific transaction limits associated with multi-currency usage on AWS, depending on the user's account type, region, and other factors. Users should refer to AWS documentation or account settings for information on transaction limits."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div  >
      <h2 className='text-black text-5xl md:text-7xl f-f-b-g text-center py-[50px] sm:py-[70px] '>
        Frequently asked Questions
      </h2>
      <div className=' w-11/12 xl:w-[970px]  3xl:w-[1500px] mx-auto pb-[86px] '>
        {collapseData.map((item, index) => (
          <div key={index} className={`mb-[32px] border border-[#E2E2E7] px-[32px] py-[35px] 2xl:py-[50px] rounded-[16px]`}>
            <button
              onClick={() => handleToggle(index)}
              className='capitalize w-full text-start  text-[20px] md:text-xl text-black relative f-f-b-g'
            >
              {item.heading}
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
