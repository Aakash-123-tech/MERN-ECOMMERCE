import React from 'react'
import Faq from '../Components/FaqPageComponents/Faq'
import { Link } from 'react-router-dom'

const FAQ = () => {
  return (
    <>
     <div className="container  mt-3  " >
      <h1 className="mb-2 fs-1 text-center">FAQs</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center">
          <li className="breadcrumb-item">
            <Link to="/" className="fw-bold text-dark text-decoration-none">Home</Link>
          </li>
          <li className="breadcrumb-item active text-secondary" aria-current="page">
            FAQs
          </li>
        </ol>
      </nav>
    </div>
    <Faq/>
    </>
  )
}

export default FAQ