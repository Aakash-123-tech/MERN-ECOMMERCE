import React from 'react'
import TopNavbar from '../Components/HomePageComponents/TopNavbar'
// Home.jsx
import { Swiper, SwiperSlide } from 'swiper/react'; // 
import 'swiper/css'; // core Swiper
import SwiperHomepage from '../Components/HomePageComponents/SwiperHomepage';
import NewArrivals from '../Components/HomePageComponents/NewArrivals';
import Brand from '../Components/HomePageComponents/Brand';
import BlogComponent from '../Components/HomePageComponents/BlogComponent';


const Home = () => {
  return (
    <>  
    <SwiperHomepage/>
    <NewArrivals/>
    <Brand/>
    <BlogComponent/>
    </>
  )
}

export default Home