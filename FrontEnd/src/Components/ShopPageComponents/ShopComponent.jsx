import React, { useContext } from 'react'
import { allProducts } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../../../Context/Context'

const ShopComponent = () => {
  const navigate=useNavigate()
  const {productData}=useContext(MyContext)
  return (
    <>
        {/* <div className="container">
            <div className="row " >
                {allProductss. filter(value=> value.category === 'shop').map((value,index) =>(
                     <div className="col-lg-3 col-md-6 col-12" key={index} >
                         <div className="card border-0 mt-3">
                             <img src={value.img} alt={value.name} className="main-img" />
                            <div className="card-body ">
                              <p>{value.name}</p>
                              <p>{value.description}</p>
                              <p>{ ` $${value.price}`}</p>
                            </div>
                         </div>
                     </div>
                ))}
            </div>
        </div> */}
        <div className="container">
          <div className="row">
            {productData.filter(value=> value.category === 'Shop').map((value,index)=>(
               <div className="col-lg-3 col-md-6 col-12" key={index}>
                   <div className="card border-0 mt-3" onClick={()=>navigate(`/product/${value._id}`)}>
                    <img src={value.img} alt={value.name}  />
                    <div className="card-body">
                      <p>{value.name}</p>
                      <p>{value.description}</p>
                      <p>{` $${value.price}`}</p>
                    </div>
                   </div>
               </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default ShopComponent