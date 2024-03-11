import React, { useState } from 'react';
import { Collapse, Button } from '@material-tailwind/react';

export default function Faq() {
  const collapseData = [
    {
      heading: "What is multi-currency payment on AWS?",
      content: "Multi-currency payment on AWS refers to the capability to conduct transactions and make payments using multiple currencies within the Amazon Web Services (AWS) ecosystem. It allows users to handle financial transactions involving various currencies seamlessly, simplifying cross-border payments and providing flexibility in conducting international business."
    },
    {
      heading: "How do multi-currency transactions work?",
      content: "Multi-currency transactions on AWS typically involve the following steps: Currency Selection, Currency Conversion, Billing and Invoicing, Payment Processing, Account Management. Overall, multi-currency transactions on AWS streamline the payment process for users operating in different regions, enabling them to leverage AWS services efficiently without concerns about currency compatibility."
    },
    {
      heading: "What currencies does multi-currency work with?",
      content: "Multi-currency on AWS supports a range of currencies to accommodate users worldwide. Specific supported currencies can be checked with AWS documentation or account settings."
    },
    {
      heading: "Does multi-currency only work with INR to USD and vice versa?",
      content: "No, multi-currency on AWS is not limited to specific currency pairs like INR to USD. It supports a variety of currencies, enabling users to conduct transactions in their preferred currency."
    },
    {
      heading: "Is there a specific transaction limit to use multi-currency?",
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
      <div className=' w-11/12 xl:w-[970px] mx-auto pb-[86px] '>
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
