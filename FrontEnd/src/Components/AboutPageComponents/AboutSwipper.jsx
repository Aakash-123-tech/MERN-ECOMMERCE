import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { Teams } from '../../assets/assets'
const AboutSwipper = () => {
  return (
    <>
     <div className='container text-center mt-5'>
      <h1> Meet The Our Team</h1>
    </div>
    <div className="container TeamComponent mt-3">
      <div className="row">
            <Swiper
               slidesPerView={4}
                spaceBetween={50}
                modules ={[ Navigation, Autoplay ]}
                navigation 
                pagination={{clickable : true }}
                autoplay={true}
                loop={true}
                speed={10}
    
                breakpoints = {{
                    320 : {
                        slidesPerView : 1
                    },
                    768 : {
                        slidesPerView : 3
                    },
                    1024 : {
                        slidesPerView : 4
       }
                }}
            >
                <SwiperSlide>
                    <div className="col mt-3">
                    <div className="card text-center border-0">
                      <img src={Teams.Teamimage4}  alt="brand4"  />
                      <div className="card-body">
                       <h4>Sofiah Patel</h4>
                       <p className='text-secondary'>MARKETING MANAGER</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" col mt-3">
                    <div className="card border-0 text-center ">
                       <img src={Teams.Teamimage1}  alt="brand1" />
                      <div className="card-body text-center">
                       <h4>Marcus Turner</h4>
                       <p className='text-secondary'>CEO/FOUNDER</p>
                      </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div className="col  mt-3">
                    <div className="card border-0 text-center">
                       <img src={Teams.Teamimage2}  alt="brand2 "  />
                      <div className="card-body text-center">
                       <h4>Emily Rodriguez</h4>
                       <p className='text-secondary'>ART DIRECTOR</p>
                      </div>
                    </div>
                   </div>
                </SwiperSlide>
                 <SwiperSlide>
                     <div className="col mt-3">
                    <div className="card border-0 text-center">
                       <img src={Teams.Teamimage3} alt="brand3"  />
                      <div className="card-body text-center">
                      <h4>Adrion Johnson</h4>
                      <p>FASHION DESIGNER</p>
                      </div>
                    </div>
                  </div>
                    
                </SwiperSlide>
            </Swiper>
            </div>
            </div>
    </>
  )
}

export default AboutSwipper