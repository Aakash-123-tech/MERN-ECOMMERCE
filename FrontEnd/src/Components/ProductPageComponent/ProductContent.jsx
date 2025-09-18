// import React, { useContext, useState } from 'react'
// import { Link, useParams } from 'react-router-dom';
// import Breadcrumb from 'react-bootstrap/Breadcrumb';
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation, Pagination, Autoplay } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/navigation'
// import { allProducts, Infoproduct1, Shopimages } from '../../assets/assets';
// import { useEffect } from 'react';
// import { MyContext } from '../../../Context/Context';

// const ProductContent = () => {

//   const{productData}=useContext(MyContext)
//    const [count, setCount] = useState(0);
//    const {id}=useParams()
//    const selectedProduct=productData.find((a)=> a._id ===(id) )
// const addfun = () => {
//     setCount(count => count + 1);
// };

// const removefun = () => {
//     setCount(count => (count > 0 ? count - 1 : 0));
// };
//   useEffect(() => {
//     // window.scrollTo(0, 0);
//     window.scrollTo(0,0);
//   }, [id]);
//   return (
//   <>
//   <div className="container  mt-5  " >
//         <nav aria-label="breadcrumb">
//           <ol className="breadcrumb ">
//             <li className="breadcrumb-item">
//               <Link to="/" className="fw-bold text-dark text-decoration-none">Home</Link>
//             </li>
//             <li  className="breadcrumb-item">
//                <Link to='/shop' className='fw-bold text-dark text-decoration-none'>Shop</Link>
//             </li >
//             <li className="breadcrumb-item active text-secondary" aria-current="page">
//               {selectedProduct.description}
//             </li>
//           </ol>
//         </nav>
//       </div>
//       <div className="container">
//         <div className="row">
//            <div className="col-lg-6">
//             <img src={selectedProduct.img} height={500} className='w-100' alt="" />
//            </div>
//            <div className="col-lg-6">
//             <div className="card border-0">
//                 <div className="card-body ">
//                     <p className='fs-1'>{selectedProduct.description}</p>
//                     <p className='text-secondary fs-2 fw-bold'>{selectedProduct.price}</p>
//                     <hr />
//                     <p className='text-secondary '>A product short description is a concise and brief overview of a product, providing key information to potential customers. Typically, it is a brief summary that highlights the most important features, benefits, and characteristics of the product. The goal is to quickly communicate relevant details to the consumer and entice them to learn more or make a purchase.</p>
//                         <button className='border-0 bg-light fs-1 ' onClick={removefun}>-</button><span className='fs-2 ms-3'>{count}</span><button className='border-0 bg-light  fs-1 ms-3' onClick={addfun}>+</button>
//                         <button className='btn btn-dark ms-3 mb-3 btn-md'>Add to Cart </button>
//                          <div className='productWhislist'><i className="bi bi-suit-heart product-heart fa-1x text-dark"></i> Add to wishlist</div>
                  
//                 </div>
//             </div>
//            </div>
//         </div>
//       </div>

//       <div className="container text-center mt-5">
//         <h1 >Related Products</h1>
//       </div>
//       <div className="container ">
//       <div className="row">
//             <Swiper
//                 slidesPerView={4}
//                 spaceBetween={30}
//                 modules ={[ Navigation, Autoplay ]}
//                 navigation 
//                 pagination={{clickable : true }}
//                 autoplay={true}
//                 loop={true}
//                 speed={10}
    
//                 breakpoints = {{
//                     320 : {
//                         slidesPerView : 1
//                     },
//                     768 : {
//                         slidesPerView : 2
//                     },
//                     1024 : {
//                         slidesPerView : 4
//        }
//                 }}
//             >
//                 <SwiperSlide>
//                   <div className="col mt-3">
//                     <div className="card border-0">
//                        <img src={Shopimages.shop1}  alt="brand1" />
//                       <div className="card-body">
//                        <p className='text-secondary'>JACKETS</p>
//                        <p>adidas X Pop Beckenbauer Track Jacket</p>
//                        <p>$120.00</p>
//                       </div>
//                     </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                    <div className="col mt-3">
//                     <div className="card  border-0">
//                        <img src={Shopimages.shop3}  alt="brand2 "  />
//                       <div className="card-body">
//                        <p className='text-secondary'>JACKETS</p>
//                        <p>adidas X Pop Polo shirt, navy / blue</p>
//                        <p>$69.99</p>
//                       </div>
//                     </div>
//                    </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="col mt-3">
//                     <div className="card  border-0">
//                        <img src={Shopimages.shop2} alt="brand3"  />
//                       <div className="card-body">
//                         <p className='text-secondary'>JACKETS</p>
//                        <p>adidas X Pop Classic t-shirt, grey / navy</p>
//                        <p>$120.00</p>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//                  <SwiperSlide>
//                   <div className="col mt-3">
//                     <div className="card  border-0">
//                       <img src={Shopimages.shop7}  alt="brand4"  />
//                       <div className="card-body">
//                       <p className='text-secondary'>JACKETS</p>
//                        <p>Carhartt American Script Sweat, tobacco</p>
//                        <p>$120.99</p>
//                       </div>
//                     </div>
//                   </div>    
//                 </SwiperSlide>
//                  <SwiperSlide>
//                   <div className="col mt-3">
//                     <div className="card  border-0">
//                       <img src={Shopimages.shop8}  alt="brand4"  />
//                       <div className="card-body">
//                     <p className='text-secondary'>JACKETS</p>
//                        <p>Carhartt Detroit Jacket (summer), zeus rigid</p>
//                        <p>$140.99</p>
//                       </div>
//                     </div>
//                   </div>   
//                 </SwiperSlide>
//             </Swiper>
//             </div>
//             </div>

//   </>
//   )
// }

// export default ProductContent
import React, { useContext, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { Shopimages } from '../../assets/assets';
import { MyContext } from '../../../Context/Context';

const ProductContent = () => {
  const { productData } = useContext(MyContext);
  const [count, setCount] = useState(0);
  const { id } = useParams();

  // find product safely (id from params is string → convert to match _id)
  const selectedProduct = productData.find((a) => String(a._id) === String(id));

  const addfun = () => {
    setCount((count) => count + 1);
  };

  const removefun = () => {
    setCount((count) => (count > 0 ? count - 1 : 0));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // if no product found
  if (!selectedProduct) {
    return (
      <div className="container text-center mt-5">
        <h2 className="text-danger">Product not found</h2>
        <Link to="/shop" className="btn btn-dark mt-3">Back to Shop</Link>
      </div>
    );
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="container mt-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" className="fw-bold text-dark text-decoration-none">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/shop" className="fw-bold text-dark text-decoration-none">Shop</Link>
            </li>
            <li className="breadcrumb-item active text-secondary" aria-current="page">
              {selectedProduct.name}
            </li>
          </ol>
        </nav>
      </div>

      {/* Product Section */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              src={selectedProduct.img}
              height={500}
              className="w-100"
              alt={selectedProduct.description}
            />
          </div>
          <div className="col-lg-6">
            <div className="card border-0">
              <div className="card-body">
                <p className="fs-1">{selectedProduct.name}</p>
                <p className="text-secondary fs-2 fw-bold">${selectedProduct.price}</p>
                <hr />
                <p className="text-secondary">
                  A product short description is a concise and brief overview of a product,
                  providing key information to potential customers. Typically, it is a brief summary
                  that highlights the most important features, benefits, and characteristics of the product.
                </p>
                <div className="d-flex align-items-center mb-3">
                  <button className="border-0 bg-light fs-1" onClick={removefun}>-</button>
                  <span className="fs-2 ms-3">{count}</span>
                  <button className="border-0 bg-light fs-1 ms-3" onClick={addfun}>+</button>
                  <button className="btn btn-dark ms-3 btn-md">Add to Cart</button>
                </div>
                <div className="productWhislist">
                  <i className="bi bi-suit-heart product-heart fa-1x text-dark"></i> Add to wishlist
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="container text-center mt-5">
        <h1>Related Products</h1>
      </div>
      <div className="container">
        <div className="row">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={true}
            loop={true}
            speed={1000}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 }
            }}
          >
            <SwiperSlide>
              <div className="col mt-3">
                <div className="card border-0">
                  <img src={Shopimages.shop1} alt="brand1" />
                  <div className="card-body">
                    <p className="text-secondary">JACKETS</p>
                    <p>adidas X Pop Beckenbauer Track Jacket</p>
                    <p>$120.00</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col mt-3">
                <div className="card border-0">
                  <img src={Shopimages.shop3} alt="brand2" />
                  <div className="card-body">
                    <p className="text-secondary">JACKETS</p>
                    <p>adidas X Pop Polo shirt, navy / blue</p>
                    <p>$69.99</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col mt-3">
                <div className="card border-0">
                  <img src={Shopimages.shop2} alt="brand3" />
                  <div className="card-body">
                    <p className="text-secondary">JACKETS</p>
                    <p>adidas X Pop Classic t-shirt, grey / navy</p>
                    <p>$120.00</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col mt-3">
                <div className="card border-0">
                  <img src={Shopimages.shop7} alt="brand4" />
                  <div className="card-body">
                    <p className="text-secondary">JACKETS</p>
                    <p>Carhartt American Script Sweat, tobacco</p>
                    <p>$120.99</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col mt-3">
                <div className="card border-0">
                  <img src={Shopimages.shop8} alt="brand5" />
                  <div className="card-body">
                    <p className="text-secondary">JACKETS</p>
                    <p>Carhartt Detroit Jacket (summer), zeus rigid</p>
                    <p>$140.99</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductContent;
