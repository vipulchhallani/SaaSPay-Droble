import React from 'react'
import Builderimg from '../../assets/images/Builderimg.svg'
import Bijliimg from '../../assets/images/Bijliimg.svg'
import Dotimg from '../../assets/images/Dotimg.svg'
import Slider from "react-slick";



export default function Hero() {
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: 3000,


  };
  return (
    <div className='bg-black-vlight xl:pt-14 mt-10'>
      <div className='w-11/12 2xl:max-w-[1240px] 3xl:w-[1500px] mx-auto py-6 xl:py-20 ' >
        <div className="grid grid-cols-12 lg:gap-4">
          <div className="col-span-12 xl:col-span-3">
            <img src={Builderimg} className=' w-auto sm:w-[201px] h-auto xl:h-[300px]  mt-2 xl:mt-10' alt="" />
          </div>
          <div className="col-span-12 xl:col-span-6">

            {/* slider start */}
            <Slider {...settings} className='mehakmalik-setting' >
              <div>
                <div className="text-center xl:text-start">
                  <div className="inline-flex items-center space-x-3">
                    <img src={Bijliimg} className='w-[79px] h-[79px] ' alt="" />
                    <button className='w-[206px] h-[55px] rounded-[50px] border border-[#4E5D7833] items-center bg-white '>
                      <ul className='inline-flex items-center space-x-4 mt-1'>
                        <li><img src={Dotimg} className='w-[31px] h-[31px] ' alt="" /></li>
                        <li className='f-f-r text-[21px] text-[#4E5D7899] '>Case Study</li>
                      </ul>
                    </button>
                  </div>
                  <h1 className='f-f-r-g font-bold text-6xl sm:text-8xl md:text-[64px] text-black-light mt-10'>How SaaSPay helped Builder.ai</h1>
                  <p className='f-f-r text-lg sm:text-[20px] md:text-xl text-[#4E5D78] mt-5'>With a payback period of 8+ months, Dunzo was able to free up recurring parked capital otherwise locked in SaaS tools. This resulted in decreased monthly burn and a healthy uptick in EBITDA margin, improving the startup's...</p>
                </div>
              </div>
              <div>
                <div className="text-center xl:text-start">
                  <div className="inline-flex items-center space-x-3">
                    <img src={Bijliimg} className='w-[79px] h-[79px] ' alt="" />
                    <button className='w-[206px] h-[55px] rounded-[50px] border border-[#4E5D7833] items-center bg-white '>
                      <ul className='inline-flex items-center space-x-4 mt-1'>
                        <li><img src={Dotimg} className='w-[31px] h-[31px] ' alt="" /></li>
                        <li className='f-f-r text-[21px] text-[#4E5D7899] '>Case Study</li>
                      </ul>
                    </button>
                  </div>
                  <h1 className='f-f-r-g font-bold text-6xl sm:text-8xl md:text-[64px] text-black-light mt-10'>How SaaSPay helped Builder.ai</h1>
                  <p className='f-f-r text-lg sm:text-[20px] md:text-xl text-[#4E5D78] mt-5'>With a payback period of 8+ months, Dunzo was able to free up recurring parked capital otherwise locked in SaaS tools. This resulted in decreased monthly burn and a healthy uptick in EBITDA margin, improving the startup's...</p>
                </div>
              </div>

              <div>
                <div className="text-center xl:text-start">
                  <div className="inline-flex items-center space-x-3">
                    <img src={Bijliimg} className='w-[79px] h-[79px] ' alt="" />
                    <button className='w-[206px] h-[55px] rounded-[50px] border border-[#4E5D7833] items-center bg-white '>
                      <ul className='inline-flex items-center space-x-4 mt-1'>
                        <li><img src={Dotimg} className='w-[31px] h-[31px] ' alt="" /></li>
                        <li className='f-f-r text-[21px] text-[#4E5D7899] '>Case Study</li>
                      </ul>
                    </button>
                  </div>
                  <h1 className='f-f-r-g font-bold text-6xl sm:text-8xl md:text-[64px] text-black-light mt-10'>How SaaSPay helped Builder.ai</h1>
                  <p className='f-f-r text-lg sm:text-[20px] md:text-xl text-[#4E5D78] mt-5'>With a payback period of 8+ months, Dunzo was able to free up recurring parked capital otherwise locked in SaaS tools. This resulted in decreased monthly burn and a healthy uptick in EBITDA margin, improving the startup's...</p>
                </div>
              </div>

              <div>
                <div className="text-center xl:text-start">
                  <div className="inline-flex items-center space-x-3">
                    <img src={Bijliimg} className='w-[79px] h-[79px] ' alt="" />
                    <button className='w-[206px] h-[55px] rounded-[50px] border border-[#4E5D7833] items-center bg-white '>
                      <ul className='inline-flex items-center space-x-4 mt-1'>
                        <li><img src={Dotimg} className='w-[31px] h-[31px] ' alt="" /></li>
                        <li className='f-f-r text-[21px] text-[#4E5D7899] '>Case Study</li>
                      </ul>
                    </button>
                  </div>
                  <h1 className='f-f-r-g font-bold text-6xl sm:text-8xl md:text-[64px] text-black-light mt-10'>How SaaSPay helped Builder.ai</h1>
                  <p className='f-f-r text-lg sm:text-[20px] md:text-xl text-[#4E5D78] mt-5'>With a payback period of 8+ months, Dunzo was able to free up recurring parked capital otherwise locked in SaaS tools. This resulted in decreased monthly burn and a healthy uptick in EBITDA margin, improving the startup's...</p>
                </div>
              </div>





            </Slider>
            {/* slider end */}

          </div>
          <div className="col-span-12 xl:col-span-3">
            <img src={Builderimg} className=' w-auto sm:w-[201px] h-auto xl:h-[300px] mt-28 xl:mt-[100%] ml-auto ' alt="" />
          </div>
        </div>

      </div>




    </div>
  )
}
