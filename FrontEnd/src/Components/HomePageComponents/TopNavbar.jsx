import React, { useContext } from 'react'
import { MyContext } from '../../../Context/Context'
const TopNavbar = () => {
  const{logoutFun}=useContext(MyContext)
  return (
    <>
    <div className='border text-center mt-1 p-1 '>
        <div className='container d-flex justify-content-between align-items-center  black'  >
            <div>Free shopping on US orders $100 & Free exchanges</div>
            <div>
                <select className='border-0' >
                    <option >ENGLISH</option>
                    <option >TAMIL</option>
                    <option >HINDI</option>
                 </select>
                 <select className='border-0 ms-3 '>
                  <option value="">USA</option>
                 </select>
                  <button className='btn btn-outline-danger btn-sm ms-4 ' onClick={logoutFun}>Logout</button>
          <div>
           
          </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default TopNavbar