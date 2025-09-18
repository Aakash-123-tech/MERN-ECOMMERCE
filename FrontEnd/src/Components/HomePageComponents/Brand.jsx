import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { brandimages } from '../../assets/assets'

const Brand = () => {
  return (
    <>
   <div className='arival-content text-center mt-4'>
        <h6 className='text-secondary'>TOP PRODUCTS</h6>
        <h1 className='arrivalNew'>Popular Products</h1>
    </div> 
    <div className='container mt-5'>
            <Swiper
               slidesPerView={6}
               spaceBetween={20}
                modules={[ Navigation, Autoplay ]}
                navigation
                pagination={{clickable : true }}
                autoplay={true}
                loop={true}
                speed={500}
    
                breakpoints = {{
                    320 : {
                        slidesPerView : 1
                    },
                    768 : {
                        slidesPerView : 4
                    },
                    1024 : {
                        slidesPerView : 6
       }
                }}
            >
                <SwiperSlide>
                    <img src={brandimages.brand1} className='mt-2 ' alt="brand1" height='80' width='90' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={brandimages.brand2}  alt="brand2" height='100' width='100' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={brandimages.brand3} alt="brand3" height='100' width='100' />
                </SwiperSlide>
                 <SwiperSlide>
                    <img src={brandimages.brand4}  alt="brand4" height='100' width='100' />
                </SwiperSlide>
                 <SwiperSlide>
                    <img src={brandimages.brand5}  alt="brand5" height='100' width='100' />
                </SwiperSlide>
                 <SwiperSlide>
                    <img src={brandimages.brand6}  alt="brand6" height='100' width='100' />
                </SwiperSlide>
                 <SwiperSlide>
                    <img src={brandimages.brand7} className='brand7' alt="" height='100' width='100' />
                </SwiperSlide>
                 <SwiperSlide>
                    <img src={brandimages.brand8} className='brand8' alt="" height='100' width='100' />
                </SwiperSlide>
            </Swiper>
            </div>
            </>
    
  )

}

export default Brand