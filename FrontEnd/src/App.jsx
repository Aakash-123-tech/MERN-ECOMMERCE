import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import FAQ from './Pages/FAQ';
import Shop from './Pages/Shop';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/CommonComponents/Navbar';
import Footer from './Components/CommonComponents/Footer';
import ErrorPage from './Pages/ErrorPage';
import TopNavbar from './Components/HomePageComponents/TopNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Pages/Product';
import Context from '../Context/Context';
import Form from './Pages/Form';
import Protect from './Pages/Protect';
import { ToastContainer } from 'react-toastify';

// ✅ Layout wrapper
const Layout = ({ children }) => {
  const location = useLocation();
  const hideLayout = location.pathname === "/"; // Form page la hide panna

  return (
    <>
      {!hideLayout &&<Protect><TopNavbar /></Protect> }
      {!hideLayout && <Protect><Navbar /></Protect>}
      {children}
      {!hideLayout && <Protect><Footer/></Protect> }
    </>
  );
};

const App = () => {
  return (
    <>
    <ToastContainer/>
    <BrowserRouter>
      <Context>
        {/* ✅ Wrap Routes with Layout */}
        <Layout>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/home" element={ <Protect> <Home /></Protect> } />
            <Route path="/about" element={<Protect><About /></Protect>} />
            <Route path="/contact" element={ <Protect><Contact /></Protect>} />
            <Route path="/faq" element={ <Protect><FAQ /></Protect>} />
            <Route path="/shop" element={ <Protect><Shop /></Protect>} />
            <Route path="/product/:id" element={ <Protect><Product /></Protect>} />
            <Route path="*" element={ <Protect><ErrorPage /></Protect>} />
          </Routes>
        </Layout>
      </Context>
    </BrowserRouter>
    </>
  );
};

export default App;
