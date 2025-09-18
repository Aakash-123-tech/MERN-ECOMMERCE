import React, { useContext } from 'react'
import { uploadimage } from '../assets/assests'
import { MyContext } from '../Context/ContextProvide'
import { Link } from 'react-router-dom'

const Form = () => {
    const {name, setname,category,setcategory,desc,setdesc,price,setprice,ImageFun,previewimg,submitFun}=useContext(MyContext)

  return (
    <>
      <div className="container my-3">
        <div className='d-flex justify-content-between  '> 
            <h1>Add Products</h1>
            <div >
            <Link to='/product'>
                <button className='btn btn-primary'> View Products</button>
            </Link>
             <Link to='/user'>
                <button className='btn btn-primary ms-3 '> View Users</button>
            </Link>
            </div>
        </div>
        <form  className='mt-3 ' onSubmit={submitFun}>
            <label className='form-label' >Upload Product Imaged</label>
            <input type="file" id='file' className='form-control  mb-3' hidden onChange={ImageFun} /><br />
            <label htmlFor="file" className='form-label'>
                <img src= { previewimg ? previewimg :uploadimage.uploadimg2}  alt="" height='130' width='130'/> 
            </label><br />     
            <label  className='form-label'>Product Name</label>
            <input type="text" className='form-control  mb-3' value={name} onChange={e=> setname(e.target.value) } />
            <label className='form-label' >Product Category</label>
            <select  className='form-control  mb-3'  value={category} onChange={e=> setcategory(e.target.value)}>
                <option hidden>Choose</option>
                <option >New Arrival</option>
                <option >Shop</option>
            </select>
             <label  className='form-label'>Product Desc</label>
            <input type="text" className='form-control  mb-3'value={desc} onChange={e=> setdesc(e.target.value)} />
             <label  className='form-label'>Product Price</label>
            <input type="text" className='form-control mb-3' value={price} onChange={e=> setprice(e.target.value)} />
            <input type='submit' className='form-control btn btn-primary' />
        </form>
      </div>
    </>
  )
}

export default Form