import React from 'react'
import Form from './Pages/Form'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ContextProvide from './Context/ContextProvide'
import Product from './Pages/Product'
import User from './Pages/User'
const App = () => {
  return (
   <>
   <BrowserRouter>
     <ContextProvide>
       <Routes>
          <Route path='/' element={<Form/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/user' element={<User/>}/>
       </Routes>
     </ContextProvide>
   </BrowserRouter>
   </>
  )
}

export default App