import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { Blogimages } from '../../assets/assets'

const BlogComponent = () => {
  return (
   <>
   <div className=' text-center mt-4'>
        <h6 className='text-secondary'>LATEST POSTS</h6>
        <h1 >Blog & Insights</h1>
    </div> 
    <div className="container BlogComponent">
      <div className="row">
            <Swiper
                slidesPerView={3}
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
                        slidesPerView : 3
       }
                }}
            >
                <SwiperSlide>
                  <div className="col mt-3">
                    <div className="card  border-0">
                       <img src={Blogimages.blog1}  alt="brand1" />
                      <div className="card-body">
                       <p className='text-secondary'> By admin • December 6,2020</p>
                       <p>Menswear Maven: Fashion Finds for Every Occasion</p>
                      </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div className="col mt-3">
                    <div className="card  border-0">
                       <img src={Blogimages.blog2}  alt="brand2 "  />
                      <div className="card-body">
                        <p className='text-secondary'> By admin • December 14,2023</p>
                        <p>Tailored Tales: Unveiling the Latest Trends in Men's Fashion</p>
                      </div>
                    </div>
                   </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="col mt-3">
                    <div className="card  border-0">
                       <img src={Blogimages.blog3} alt="brand3"  />
                      <div className="card-body">
                        <p className='text-secondary'>admin • December 14,2023</p>
                        <p>Gentleman's Gazette: A Guide to Timeless Men's Fashion</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                 <SwiperSlide>
                  <div className="col mt-3">
                    <div className="card  border-0">
                      <img src={Blogimages.blog4}  alt="brand4"  />
                      <div className="card-body">
                      <p className='text-secondary'>admin • December 14,2023</p>
                      <p>Mastering the Classics: A Gentleman’s Sartorial Guide</p>
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

export default BlogComponent