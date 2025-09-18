
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { MenImages } from '../../assets/assets'

const Day10_Swiper = () => {
  return (
    <>
    <div className="swiper container-fluid bg-light">
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
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
                    slidesPerView : 1
                },
                1024 : {
                    slidesPerView : 1
   }
            }}
        >
            <SwiperSlide>
                <img src={MenImages.menimage1} className='swipeHome' alt="" height='600' width='100%' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MenImages.menimage2} className='swipeHome' alt="" height='600' width='100%' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MenImages.menimage3} className='swipeHome' alt="" height='600' width='100%' />
            </SwiperSlide>
        </Swiper>
        <div className='carousel-content m-5 lh-base   '>
            <h4>NEW ARRIVALS</h4>
             <strong className=' d-block w-50 ' >Stylish Comfort For Fall Nights</strong>
             <button className='btn btn-dark  shop-btn p-3 mb-5  '>Shop Now</button>
        </div>
        </div>
    </>
  )
}

export default Day10_Swiper