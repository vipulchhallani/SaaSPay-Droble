import React from 'react'
import linechart from '../../assets/images/line-chart-up-02.svg'


export default function Bussiness() {
    return (
        <div className=' bg-black-vlight pt-[103px] pb-[113px] ' >
            <div className='w-11/12 2xl:max-w-[1240px] 3xl:w-[1500px] mx-auto ' >
                <h2 className=' text-black-light text-4xl sm:text-5xl lg:text-8xl  f-f-li-g text-center  '  >
                    What does this mean for <span className=' f-f-b-g ' > your business? </span>
                </h2>

                <div className="grid grid-cols-12 mt-[88px] gap-4 lg:gap-0  ">
                    <div className="col-span-12 lg:col-span-6">
                        <div className=' bussniness-left h-[565px] sm:h-[594px] rounded-r-[20px] lg:rounded-r-none rounded-l-[20px] ' >
                            <div className=' bussinessleft-text pl-[23px] sm:pl-[39px] xl:pl-[136px] ' >
                                <div className='pt-[198px]' >
                                    <img src={linechart} className=' w-[70px] h-auto sm:w-[100px] sm:h-[100px]  ' />
                                </div>
                                <h2 className=' text-white f-f-li-g  text-4xl  sm:text-[38px] pt-[45px]  ' >SaaSPay </h2>
                                <h3 className=' text-7xl sm:text-[64px] f-f-b-g text-white ' >For Sales</h3>
                            </div>
                            <div className=' bussinesslefthvr-text pl-[20px] xl:pl-[73px] ' >
                                <div className=' pt-[165px] xl:pt-[236px]' >
                                    <h2 className=' text-white f-f-li-g  text-4xl  sm:text-[38px]  ' >SaaSPay </h2>
                                    <h3 className=' text-7xl sm:text-[64px] f-f-b-g text-white ' >For Sales</h3>
                                    <ul className=' space-y-[18px] 2xl:space-y-[25px] ' >
                                        <li>

                                            <ul className=' items-center flex ' >
                                                <li>
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="11" cy="11" r="11" fill="#5B2EBC" />
                                                        <path d="M7.86145 10.8649C8.76785 11.785 9.54122 12.5701 9.54122 12.5701L14.1472 7.8558" stroke="white" stroke-width="1.63076" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </li>
                                                <li className=' ml-3' >
                                                    <h2 className='  text-white text-lg sm:text-xl f-f-m-g '  >
                                                        No recollections & payment chasing.
                                                    </h2>
                                                </li>
                                            </ul>

                                        </li>
                                        <li>

                                            <ul className=' items-center flex ' >
                                                <li>
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="11" cy="11" r="11" fill="#5B2EBC" />
                                                        <path d="M7.86145 10.8649C8.76785 11.785 9.54122 12.5701 9.54122 12.5701L14.1472 7.8558" stroke="white" stroke-width="1.63076" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </li>
                                                <li className=' ml-3' >
                                                    <h2 className='  text-white text-lg sm:text-xl f-f-m-g '  >
                                                    Eliminate payment related churn.
                                                    </h2>
                                                </li>
                                            </ul>

                                        </li>
                                        <li>

                                            <ul className=' items-center flex ' >
                                                <li>
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="11" cy="11" r="11" fill="#5B2EBC" />
                                                        <path d="M7.86145 10.8649C8.76785 11.785 9.54122 12.5701 9.54122 12.5701L14.1472 7.8558" stroke="white" stroke-width="1.63076" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </li>
                                                <li className=' ml-3' >
                                                    <h2 className='  text-white text-lg sm:text-xl f-f-m-g '  >
                                                    No more small ticket payments.
                                                    </h2>
                                                </li>
                                            </ul>

                                        </li>
                                    </ul>

                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <div className=' bussniness-right h-[565px] sm:h-[594px]   rounded-l-[20px]  lg:rounded-l-none   rounded-r-[20px]' >
                            {/* default text */}
                            <div className='bussinessleft-text pl-[23px] sm:pl-[39px] xl:pl-[136px] ' >
                                <div className='pt-[198px]' >
                                    <img src={linechart} className=' w-[70px] h-auto sm:w-[100px] sm:h-[100px]  ' />
                                </div>
                                <h2 className=' text-white f-f-li-g  text-4xl  sm:text-[38px] pt-[45px]  ' >SaaSPay </h2>
                                <h3 className=' text-7xl sm:text-[64px] f-f-b-g text-white ' >For Finance</h3>
                            </div>
                            {/* hover text */}
                            <div className=' bussinesslefthvr-text pl-[20px] xl:pl-[73px] ' >
                                <div className=' pt-[165px] xl:pt-[236px]' >
                                    <h2 className=' text-white f-f-li-g  text-4xl  sm:text-[38px]  ' >SaaSPay </h2>
                                    <h3 className=' text-7xl sm:text-[64px] f-f-b-g text-white ' >For Finance</h3>
                                    <ul className=' space-y-[18px] 2xl:space-y-[25px] ' >
                                        <li>

                                            <ul className=' items-center flex ' >
                                                <li>
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="11" cy="11" r="11" fill="#5B2EBC" />
                                                        <path d="M7.86145 10.8649C8.76785 11.785 9.54122 12.5701 9.54122 12.5701L14.1472 7.8558" stroke="white" stroke-width="1.63076" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </li>
                                                <li className=' ml-3' >
                                                    <h2 className='  text-white text-lg sm:text-xl f-f-m-g '  >
                                                        No recollections & payment chasing.
                                                    </h2>
                                                </li>
                                            </ul>

                                        </li>
                                        <li>

                                            <ul className=' items-center flex ' >
                                                <li>
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="11" cy="11" r="11" fill="#5B2EBC" />
                                                        <path d="M7.86145 10.8649C8.76785 11.785 9.54122 12.5701 9.54122 12.5701L14.1472 7.8558" stroke="white" stroke-width="1.63076" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </li>
                                                <li className=' ml-3' >
                                                    <h2 className='  text-white text-lg sm:text-xl f-f-m-g '  >
                                                    Eliminate payment related churn.
                                                    </h2>
                                                </li>
                                            </ul>

                                        </li>
                                        <li>

                                            <ul className=' items-center flex ' >
                                                <li>
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="11" cy="11" r="11" fill="#5B2EBC" />
                                                        <path d="M7.86145 10.8649C8.76785 11.785 9.54122 12.5701 9.54122 12.5701L14.1472 7.8558" stroke="white" stroke-width="1.63076" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </li>
                                                <li className=' ml-3' >
                                                    <h2 className='  text-white text-lg sm:text-xl f-f-m-g '  >
                                                    No more small ticket payments.
                                                    </h2>
                                                </li>
                                            </ul>

                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
