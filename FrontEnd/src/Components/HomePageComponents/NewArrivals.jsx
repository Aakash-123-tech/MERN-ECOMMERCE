import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { allProducts } from '../../assets/assets'
import { MyContext } from '../../../Context/Context';


const NewArrivals = () => {
   const{productData}=useContext(MyContext)
  const navigate=useNavigate()
  return (
    <>
    <div className='arival-content text-center mt-4'>
        <h6 className='text-secondary'>LATESH PRODUCTS</h6>
        <h1 className='arrivalNew'>New Arrivals</h1>
    </div>
    <div className="container">
        <div className="row " >
            {productData. filter(value=> value.category === 'New Arrival').map((value,index) =>(
                 <div className="col-lg-3 col-md-6 col-12" key={index} >
                     <div className="card border-0 mt-3" onClick={()=>navigate(`/product/${value._id}`)}>
                        {/* <div className="image-wrapper"> */}
                         <img src={value.img} alt={value.name} className="main-img" />
                         {/* <img src={value.Hoverimages} alt="hover" className="hover-img" /> */}
                      {/* </div> */}
                        <div className="card-body ">
                          <p>{value.name}</p>
                          <p>{value.description}</p>
                          <p>{ ` $${value.price}`}</p>
                        </div>
                     </div>
                 </div>
            ))}
        </div>
    </div>
    {/* <div className='text-center bg-light '>
      Show More Products
    </div> */}
    <div className='text-center mb-5'>
     <Link to='/shop'> <button className='btn btn-light border-dark rounded-0 ' >Show More Products</button></Link> 
    </div>
    </>
  )
}

export default NewArrivals