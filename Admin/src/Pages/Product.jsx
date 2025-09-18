import React ,{ useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../Context/ContextProvide'
import { uploadimage } from '../assets/assests'
const Product = () => {
    const {productData,deleteFun,updateButtonFun ,updatename,setupdatname,updatdesc, setupdatdesc,updatcategory,setupdatcategory,
        updatprice,setupdatprice,updatepreviewimg,updateImageFun,updateSubmitFun
}= useContext(MyContext)
  return (
    <>
 <div className="container my-3">
    <div className='d-flex justify-content-between '>
        <h1>Product List</h1>
        <Link to='/'>
        <button className='btn btn-primary'>Admin Panel</button>
        </Link>
    </div>
    <table className='table border border-primary  text-center align-middle mt-5'>
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
           {productData.map((value,index)=>(  //normal pranthesis diractha kudukala but curly braces return la write pannanum
            <tr key={index}>
                <td>
                    <img src={value.img} alt="" height='80' width='80' />
                </td>
                <td>{value.name}</td>
                <td>{value.category}</td>
                <td>{value.price}</td>
                <td>{value.desc}</td>
                <td>
                    <button className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#updatemodal' onClick={()=> updateButtonFun(value._id)} >Update</button>
                </td>
                <td>
                    <button className='btn btn-close ' onClick={()=> deleteFun(value._id)}></button>
                </td>
            </tr>
           ))}
        </tbody>
    </table>

    <div className="modal fade" id='updatemodal'>
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h4>Upadte Data</h4>
                    <button className='btn btn-close ' data-bs-dismiss='modal'></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={updateSubmitFun} >
                        <label className='form-label'>Update Image</label>
                        <input type="file" hidden id='updateFile' className='form-control mb-2'onChange={updateImageFun} /><br />
                        <label htmlFor="updateFile" className='form-label'>
                           <img src={ updatepreviewimg ? updatepreviewimg : uploadimage.uploadimg2} alt="" height='80' width='80' />
                        </label> <br />
                        <label className='form-label'>Update Name</label>
                        <input type="text" className='form-control mb-2' value={updatename}  onChange={(e)=> setupdatname(e.target.value)}  /><br />
                          <label className='form-label'>Update Category</label>
                          <select className='form-control mb-2' value={updatcategory} onChange={(e)=> setupdatcategory(e.target.value)}  >
                            <option hidden>Choose</option>
                             <option >Arrival</option>
                            <option >Shop</option>
                          </select>
                          <br />
                          <label className='form-label'>Update Desc</label>
                        <input type="text" className='form-control mb-2' value={updatdesc} onChange={(e)=> setupdatdesc(e.target.value)}   /><br />
                          <label className='form-label'>Update Price</label>
                        <input type="text" className='form-control mb-2' value={updatprice} onChange={(e)=> setupdatprice(e.target.value)}   /><br />
                        <input type='submit' className='btn btn-success form-control'  />
                    </form>
                </div>
            </div>
        </div>
    </div>
 </div>

    </>
  )
}

export default Product