import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../Context/ContextProvide'

const User = () => {
    const {userData,userDeleteFun}=useContext(MyContext)
  return (
   <>
      <div className="container my-3">
          <div className='d-flex justify-content-between '>
              <h1>User List</h1>
              <Link to='/'>
              <button className='btn btn-primary'>Admin Panel</button>
              </Link>
          </div>
          <table className='table border border-primary  text-center  mt-5'>
              <thead>
                  <tr>
                      <th>UserName</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
               {
                userData.length === 0 
                ?
                <tr>
                    <td colSpan={4}> No User Found</td>
                </tr>
                :
                userData.map((value,index)=>(
                    <tr key={index}>
                        <td>{value.username}</td>
                        <td>{value.email}</td>
                        <td>{value.password}</td>
                        <td>
                            <button className='btn btn-close' onClick={()=> userDeleteFun(value._id)}></button>
                        </td>
                    </tr>
                ))
               }
             </tbody>
       </table>
   </div>

   </>
  )
}

export default User