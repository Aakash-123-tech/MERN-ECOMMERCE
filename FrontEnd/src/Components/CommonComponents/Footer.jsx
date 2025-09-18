import React from 'react'
import { footerLogo } from '../../assets/assets'

const Footer = () => {
  return (
    <>
      <div className="container-fluid footerSection p-5 mt-5">
         <div className="row">
          <div className="col-lg-3 col-md-6 mt-3">
            <h1>Mixtas</h1>
            <p>Whether you're a trendsetter, a minimalist, or an adventure at heart, Mixtas has something for everyone. Our diverse range of styles caters to various personas.  </p>
             <div>
              <i className=" footer-icon  fs-5 ms-2  mt-3 fa-brands fa-facebook"></i>
              <i className=" footer-icon  fs-5 ms-2  mt-3 fa-brands fa-x-twitter"></i>
              <i className="  footer-icon  fs-5  ms-2 mt-3 fa-brands fa-instagram"></i>
              <i className="  footer-icon  fs-5 ms-2 mt-3 fa-brands fa-pinterest"></i>
             </div> 
          
          </div>
         <div className="col-lg-2 col-md-6 mt-3">
          <h5>About Us</h5>
          <p className='footer-content'>Our Story</p>
          <p className='footer-content'>Mission & Values</p>
          <p className='footer-content'>Meet the Team</p>
          <p className='footer-content'>Sustainablility Efforts</p>
          <p className='footer-content'>Brand Partnerships</p>
          <p className='footer-content'> Influencer Collaborations</p>
         </div>
         <div className="col-lg-2 col-md-6 mt-3">
          <h5 >Accessibility</h5>
          <p className='footer-content'> Accessibility Statement</p>
          <p className='footer-content'>Site Map</p>
          <p className='footer-content'>Web Accessibity Options</p>
          <p className='footer-content'>ADA Compliance</p>
          <p className='footer-content'>Privacy Policy</p>
          <p className='footer-content'>Terms of Service </p>
         </div>
         <div className="col-lg-2 col-md-6 mt-3">
          <h5>Join Our Community</h5>
          <p className='footer-content'>VIP Membership</p>
          <p className='footer-content'>Loyalty Program</p>
          <p className='footer-content'>Customer Reviews</p>
          <p className='footer-content'>Style Forums</p>
          <p className='footer-content'>Job Openings</p>
          <p className='footer-content'>Culture and Values </p>
         </div>
         <div className="col-lg-3 col-12 mt-3">
          <h4>Let's get in touch </h4>
          <p>Sign up for our newsletter and receive 10% off your</p>
          <input type="gmail" className='form-control' placeholder='Enter Your email address' />
         </div>
         </div><br /><br />
          <hr  />
          <div className="container-fluid  ">
            <div className="row ">
              <div className="col-lg-6 ">
                <p className='text-light'>&copy; 2024 Mixtas All rights reserved. Developed By Apsara Rose Delina </p>
              </div>
              <div className="col-lg-6 ">
                 <img src={footerLogo.footerImage} alt="" className='w-75'/>
              </div>
            </div>
           
          </div>
      </div>  
     
    </>
  )
}

export default Footer