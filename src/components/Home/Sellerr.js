// import React from 'react'
// import Sysden from '../../assets/images/sysdig-inc-logo.svg'
// import Amazon from '../../assets/images/Amazon_Web_Services_Logo.svg'
// import Elastic from '../../assets/images/Elastic.svg'
// import Datadog from '../../assets/images/Datadog.svg'
// import Crowdstrick from '../../assets/images/CrowdStrike_logo.svg'

// export default function seller() {
//   return (
//     <div className='w-11/12 mx-auto'>
//       <h1 className='mt-[72px] f-f-sm text-base sm:text-[22px] md:text-xl text-black text-center'>More than 100+ sellers who trust SaaSPay</h1>

//       <ul className='inline-flex space-x-4 sm:space-x-8 lg:space-x-[72px] w-full justify-center  mt-5 sm:mt-[55px] mb-[46px] items-center '>
//         <li><img src={Sysden} className='w-[125px] sm:w-[135px] h-auto lg:h-[47px]' alt="" /></li>
//         <li><img src={Amazon} className='w-[68px] h-auto lg:h-[40px] mt-3 ' alt="" /></li>
//         <li><img src={Elastic} className='w-[119px] h-auto lg:h-[40px]' alt="" /></li>
//         <li><img src={Datadog} className='w-[135px] sm:w-[148px] h-auto lg:h-[76px]' alt="" /></li>
//         <li><img src={Crowdstrick} className='w-[190px] sm:w-[220px] h-auto lg:h-[40px]' alt="" /></li>

//       </ul>
//     </div>
//   )
// }


import React from 'react';
import Sysden from '../../assets/images/sysdig-inc-logo.svg';
import Amazon from '../../assets/images/Amazon_Web_Services_Logo.svg';
import Elastic from '../../assets/images/Elastic.svg';
import Datadog from '../../assets/images/Datadog.svg';
import Crowdstrick from '../../assets/images/CrowdStrike_logo.svg';

export default function Seller() {
  return (
    <div className='w-11/12 mx-auto'>
      <h1 className='mt-[72px] f-f-sm text-base sm:text-[22px] md:text-xl text-black text-center'>More than 100+ sellers who trust SaaSPay</h1>

      <ul className='inline-flex space-x-4 sm:space-x-8 lg:space-x-[72px] w-full justify-center mt-5 sm:mt-[55px] mb-[46px] items-center '>
        <li><img src={Sysden} className='w-[125px] sm:w-[135px] h-auto lg:h-[47px]' alt="" style={{ verticalAlign: 'top' }} /></li>
        <li><img src={Amazon} className='w-[68px] h-auto lg:h-[40px] mt-3' alt="" style={{ verticalAlign: 'top' }} /></li>
        <li><img src={Elastic} className='w-[119px] h-auto lg:h-[40px]' alt="" style={{ verticalAlign: 'top' }} /></li>
        <li><img src={Datadog} className='w-[135px] sm:w-[148px] h-auto lg:h-[76px]' alt="" style={{ verticalAlign: 'top' }} /></li>
        <li><img src={Crowdstrick} className='w-[190px] sm:w-[220px] h-auto lg:h-[40px]' alt="" style={{ verticalAlign: 'top' }} /></li>
      </ul>
    </div>
  );
}
