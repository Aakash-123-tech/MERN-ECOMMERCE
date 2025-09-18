import React from 'react';
import { Link } from 'react-router-dom';
import ShopComponent from '../Components/ShopPageComponents/ShopComponent';

const Shop = () => {
  return (
    <>
    <div className="container  mt-3  " >
      <h1 className="mb-2 fs-1 text-center">Shop</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center">
          <li className="breadcrumb-item">
            <Link to="/" className="fw-bold text-dark text-decoration-none">Home</Link>
          </li>
          <li className="breadcrumb-item active text-secondary" aria-current="page">
            Shop
          </li>
        </ol>
      </nav>
    </div>
    <ShopComponent/>
    </>
  );
};

export default Shop;
