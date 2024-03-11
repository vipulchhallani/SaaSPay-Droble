import React from 'react'
import Location from '../../assets/images/Location.svg'
import Envelope from '../../assets/images/envelope.svg'
import logo from '../../assets/images/logo.svg'
import Linkedin from '../../assets/images/Linkedin.svg'
import Facebook from '../../assets/images/Facebook.svg'
import Twitter from '../../assets/images/Twitter.svg'
import instagram from '../../assets/images/instagram.svg'




export default function MultiFotter() {
  return (
    <div className=' fotter-bg-multi  h-auto  2xl:h-[821px] ' >
    <div className=' w-11/12 2xl:max-w-[1240px] mx-auto pt-[65px] md:pt-[96px] ' >

            <div className='grid grid-cols-12  gap-4 sm:gap-8 items-center'>
            <div className= " col-span-12 xl:col-span-8" >
                  <h2 className=' text-[38px]  f-f-r-g text-white  text-center xl:text-left ' >
                  Browse our exclusive <span className=' f-f-b-g ' > SaaS seller partner  offerings,</span> and <span className=' f-f-b-g ' >  unlock growth </span> with SaaSPay.
                  </h2>
              </div>
              <div className= "  col-span-12 xl:col-span-4 text-center xl:text-right " >
                <button className=' w-[172px] h-[50px]  rounded-[25px] text-white bg-green-light text-tiny f-f-r '  >
                Check now
                </button>
                </div>
              </div>
       <div className=' border border-[rgba(239, 239, 239, 0.22)] mt-[35px] ' ></div>
       <div className='grid grid-cols-12  gap-4 sm:gap-8 items-center mt-[71px]  '>
            <div className= " col-span-12  sm:col-span-6 md:col-span-5 xl:col-span-3" >
                <ul className=' inline-flex items-center ' >
                    <li  >
                    <img src={Location} className=' w-[46px] h-[46px] '  />
                    </li>
                    <li  className=' ml-[14px] ' >
                        <h2 className=' f-f-r text-base text-white ' >GR Icon, Koromanagala,
                                Bangalore </h2>
                    </li>
                </ul>

                </div>
                <div className= " col-span-12  sm:col-span-6 md:col-span-5 xl:col-span-3" >
                <ul className=' inline-flex items-center ' >
                    <li  >
                    <img src={Envelope} className=' w-[46px] h-[46px] '  />
                    </li>
                    <li  className=' ml-[14px] ' >
                        <h2 className=' f-f-r text-base text-white ' >hello@saaspay.co</h2>
                    </li>
                </ul>

                </div>
                </div>

                <div className='grid grid-cols-12  gap-4 sm:gap-8  mt-[79px]  '>
            <div className= " col-span-6  sm:col-span-6 md:col-span-4 xl:col-span-3" >
                    <h1  className=' text-white f-f-b-g text-lg  ' >SaaSPay</h1>
                    <ul className=' mt-[35px] ' >
                        <li>
                            <h2 className='f-f-r text-white text-tiny '  >Talk to our team</h2>
                        </li>
                        <li className=' mt-[20px]' >
                            <h2 className='f-f-r text-white text-tiny '  >For our Buyers</h2>
                        </li>
                        <li className=' mt-[20px]' >
                            <h2 className='f-f-r text-white text-tiny '  >For our Sellers</h2>
                        </li>
                        <li className=' mt-[20px] flex items-center ' >
                            
                            <h2 className='f-f-r text-white text-tiny opacity-[0.5] '  >Buying on AWS</h2>
                            <button className=' ml-[10px] text-primary bg-white text-xs f-f-sm w-[85px] h-[23px] rounded-[65px] ' >
                            Coming Soon
                            </button>
                        </li>
                    </ul>
                </div>
                <div className= " col-span-6  sm:col-span-6 md:col-span-4 xl:col-span-3" >
                    <h1  className=' text-white f-f-b-g text-lg  ' >SaaSPay</h1>
                    <ul className=' mt-[35px] ' >
                    
                        <li className=' mt-[20px] flex items-center ' >
                            
                            <h2 className='f-f-r text-white text-tiny opacity-[0.5] '  >Enterprise</h2>
                            <button className=' ml-[10px] text-primary bg-white text-xs f-f-sm w-[85px] h-[23px] rounded-[65px] ' >
                            Coming Soon
                            </button>
                        </li>
                        <li className=' mt-[20px] flex items-center ' >
                            
                            <h2 className='f-f-r text-white text-tiny opacity-[0.5] '  >Checkout</h2>
                            <button className=' ml-[10px] text-primary bg-white text-xs f-f-sm w-[85px] h-[23px] rounded-[65px] ' >
                            Coming Soon
                            </button>
                        </li>
                        <li className=' mt-[20px] flex items-center ' >
                            
                            <h2 className='f-f-r text-white text-tiny opacity-[0.5] '  >Product</h2>
                            <button className=' ml-[10px] text-primary bg-white text-xs f-f-sm w-[85px] h-[23px] rounded-[65px] ' >
                            Coming Soon
                            </button>
                        </li>
                    </ul>
                </div>
                <div className= " col-span-6  sm:col-span-6 md:col-span-4 xl:col-span-3" >
                    <h1  className=' text-white f-f-b-g text-lg  ' >Resources</h1>
                    <ul className=' mt-[35px] ' >
                        <li>
                            <h2 className='f-f-r text-white text-tiny '  >Resources</h2>
                        </li>
                        <li className=' mt-[20px]' >
                            <h2 className='f-f-r text-white text-tiny '  >Case Studies</h2>
                        </li>
                  
                    </ul>
                </div>
                </div>
                <div className=' border border-[rgba(239, 239, 239, 0.22)] mt-[74px] ' ></div>
                <div className='grid grid-cols-12  gap-4 sm:gap-8  py-[40px]  '>
            <div className= " col-span-12 md:col-span-3 text-center md:text-left " >
                <img src={logo} className=' w-[101px] h-[23px] mx-auto md:ml-0 '  />
                <h2 className=' text-white text-[12px] f-f-sm-g mt-[6px] ' >Powering Payments and Possibilities</h2>
                </div>
                <div className= " col-span-12 sm:col-span-6 text-center sm:text-left md:text-center " >
                    <ul className=' inline-flex items-center ' >
                        <li>
                                <h2  className='  text-white f-f-r text-tiny cursor-pointer ' >Terms</h2>
                        </li>
                        <li className=' ml-[40px] ' >
                                <h2  className='  text-white f-f-r text-tiny cursor-pointer ' >Privacy</h2>
                        </li>
                        <li className=' ml-[40px] ' >
                                <h2  className='  text-white f-f-r text-tiny cursor-pointer ' >Cookies</h2>
                        </li>
                    </ul>
                    </div>
                    <div className= " col-span-12 sm:col-span-6 md:col-span-3 text-center sm:text-right " >
                    <ul className=' inline-flex items-center  ' >
                        <li>
                                <img src={Linkedin} className=' w-[35px] h-[35px] cursor-pointer ' />
                        </li>
                        <li className=' ml-[15px] ' >
                        <img src={Facebook} className=' w-[35px] h-[35px] cursor-pointer ' />
                        </li>
                        <li className=' ml-[15px] ' >
                        <img src={Twitter} className=' w-[35px] h-[35px] cursor-pointer ' />
                        </li>
                        <li className=' ml-[15px] ' >
                        <img src={instagram} className=' w-[35px] h-[35px] cursor-pointer ' />
                        </li>
                       
                    </ul>
                    </div>
                </div>
</div>
    </div>
  )
}
