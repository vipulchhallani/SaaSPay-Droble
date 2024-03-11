import React from 'react'
import Simplify from '../../assets/images/Simplify.svg'
import Bankverification from '../../assets/images/Bankverification.svg'
import nextimg from '../../assets/images/nextimg.svg'
import Setupauto from '../../assets/images/Setupauto.svg'



export default function Hero() {
  return (
    <div className='bg-white pt-14 xl:pt-[141px]'>
      <div className='w-11/12 2xl:max-w-[1240px] 3xl:w-[1500px] mx-auto ' >
        <h1 className='f-f-li-g text-2xl sm:text-4xl md:text-5xl lg:text-[44px] text-black-light text-center '>Simple. Hassle-free</h1>
        <h2 className='f-f-b-g text-center text-black-light text-5xl md:text-[56px] lg:text-[64px] '>How does integration work</h2>
        <p className='f-f-r-g text-xl md:text-2xl text-black-light text-center pb-10 lg:pb-[168px] '>A friction-less 3-step integration process with a turn around time of 1 days</p>

        {/* <div className='bg-grey-vlight rounded-[20px] h-auto 2xl:h-[743px]'>
        <div className="grid grid-cols-12 items-center gap-2 lg:gap-10">
          <div className="col-span-12 lg:col-span-6">
            <h3 className='f-f-b-g text-balck-light text-4xl lg:text-start text-center lg:pl-[55px] lg:mt-0 mt-10 '>1. Simplified Checkout</h3>
            <h5 className='f-f-r-g text-[22px] text-black-light lg:text-start text-center lg:pl-[104px]'>Customer is presented with monthly payables & corresponding dates.</h5>

          </div>
          <div className="col-span-12 lg:col-span-6">
            <img src={Simplify} className='w-full h-auto 2xl:h-[511px] py-14' alt="" />

          </div>
        </div>
      
       </div> */}
        <div className='bg-grey-vlight rounded-[20px] relative '>
          <div className="grid grid-cols-12 items-center gap-2 lg:gap-10">
            <div className="col-span-12 lg:col-span-6">
              <h3 className='f-f-b-g text-balck-light text-4xl lg:text-start text-center lg:pl-[55px] lg:mt-0 mt-10 '>1. Simplified Checkout</h3>
              <h5 className='f-f-r-g text-[22px] text-black-light lg:text-start text-center lg:pl-[60px]'>Customer is presented with monthly payables & corresponding dates.</h5>
          {/* arrow added */}
          <svg className=' absolute left-[62px] bottom-[79px] hidden lg:block  ' xmlns="http://www.w3.org/2000/svg" width="46" height="64" viewBox="0 0 46 64" fill="none">
<path d="M26 3C26 1.34315 24.6569 -7.24234e-08 23 0C21.3431 7.24234e-08 20 1.34315 20 3L26 3ZM20.8787 63.1213C22.0503 64.2929 23.9498 64.2929 25.1213 63.1213L44.2132 44.0294C45.3848 42.8579 45.3848 40.9584 44.2132 39.7868C43.0416 38.6152 41.1421 38.6152 39.9706 39.7868L23 56.7574L6.02944 39.7868C4.85787 38.6152 2.95837 38.6152 1.7868 39.7868C0.615225 40.9584 0.615225 42.8579 1.7868 44.0294L20.8787 63.1213ZM20 3L20 61L26 61L26 3L20 3Z" fill="#323B4B" fill-opacity="0.08"/>
</svg>
          {/* arrow ended */}
            </div>
            <div className="col-span-12 lg:col-span-6">
              <img src={Simplify} className='w-full h-auto 2xl:h-[511px] py-14' alt="" />

            </div>
          </div>

        </div>
        <div className="grid grid-cols-12 gap-4 items-center mt-2">
          <div className="col-span-12 md:col-span-6">
            <div className="bg-grey-vlight rounded-[20px] p-7 2xl:p-[54px] h-auto 2xl:h-[743px] relative ">
              <img src={Bankverification} className='w-full h-auto 2xl:h-[360px] hidden sm:block ' alt="" />
              <img src={nextimg} className='h-[58px] w-12 absolute right-5 top-[150px] hidden 2xl:block ' alt="" />
              <div className=' lg:pl-[55px] sm:mt-10 2xl:mt-[77px] ' >

             <ul className=' inline-flex '>
              <li className=' hidden lg:block '  >
              <h3 className='f-f-b-g text-balck-light text-2xl sm:text-4xl lg:text-start text-center  '>
                2</h3>
              </li>
              <li  className=' ml-3 ' >
              <h3 className='f-f-b-g text-balck-light text-2xl sm:text-4xl lg:text-start text-center  '>
             <span className=' lg:hidden '  > 2</span> Bank verification</h3>
              <h5 className='f-f-r-g text-[18px] lg:text-[22px] text-black-light lg:text-start text-center '>They enter bank details for a preliminary analysis of statements.</h5>
              </li>
             </ul>
              

             
              </div>
              <img src={Bankverification} className='w-full h-auto 2xl:h-[360px]  sm:hidden mt-10 ' alt="" />
            
            </div>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div className="bg-grey-vlight rounded-[20px] p-7 2xl:p-[54px] h-auto 2xl:h-[743px] ">
              <img src={Setupauto} className='w-full h-auto 2xl:h-[360px] mx-auto ' alt="" />
              <div className=' lg:pl-[55px] sm:mt-10 2xl:mt-[77px] ' >
              <ul className=' inline-flex '>
              <li className=' hidden lg:block '  >
              <h3 className='f-f-b-g text-balck-light text-2xl sm:text-4xl lg:text-start text-center  '>
                3</h3>
              </li>
              <li  className=' ml-3 ' >
              <h3 className='f-f-b-g text-balck-light text-2xl sm:text-4xl lg:text-start text-center  '>
              <span className=' lg:hidden '  > 3</span>   Setup Autopay</h3>
              <h5 className='f-f-r-g text-[18px] lg:text-[22px] text-black-light lg:text-start text-center '>They complete E-Nach & E-Sign to activate their subscription.</h5>
              </li>
             </ul>
</div>
            </div>
          </div>
        </div>



      </div>

    </div>
  )
}
