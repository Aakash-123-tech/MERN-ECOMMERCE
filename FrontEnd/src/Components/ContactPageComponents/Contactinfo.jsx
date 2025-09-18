import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Contactinfo = () => {
  return (
    <>
      <Container className="mt-4">
        <h1 className="mb-3 text-center">Contact Us</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center">
            <li className="breadcrumb-item">
              <Link to="/" className="fw-bold text-dark text-decoration-none">Home</Link>
            </li>
            <li className="breadcrumb-item active text-secondary" aria-current="page">
              Contact Us
            </li>
          </ol>
        </nav>
      </Container>

      <Container className="my-4">
        <Row className="g-4">
          <Col xs={12} md={3} lg={3}>
            <Card className="border-0 text-center h-100 shadow-sm">
              <Card.Body>
                <i className="bi bi-geo-alt-fill fa-3x text-dark mb-3"></i>
                <Card.Title className='mt-3'>Store Address</Card.Title>
                <Card.Text className="text-secondary">
                  POBox16122 Collins Street West<br />
                  Victoria 8007 Australia
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={3} lg={3}>
            <Card className="border-0 text-center h-100 shadow-sm">
              <Card.Body>
                <i className="bi bi-telephone-fill fa-3x text-dark mb-3"></i>
                <Card.Title className='mt-3'>Call Infos</Card.Title>
                <Card.Text className="text-secondary">
                  Open a chat or give us a call at<br />
                  <strong>+61 38376 6284</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={3} lg={3}>
            <Card className="border-0 text-center h-100 shadow-sm">
              <Card.Body>
                <i className="bi bi-envelope fa-3x text-dark mb-3"></i>
                <Card.Title className='mt-3'>Email Support</Card.Title>
                <Card.Text className="text-secondary">
                  Send mail to<br />
                  <strong>support@mixtas.com</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={3} lg={3}>
            <Card className="border-0 text-center h-100 shadow-sm">
              <Card.Body>
                <i className="bi bi-chat-left fa-3x text-dark mb-3"></i>
                <Card.Title className='mt-3'>Live Support</Card.Title>
                <Card.Text className="text-secondary">
                  Live chat service<br />
                  <a  target="_blank" rel="noopener noreferrer" className='text-decoration-none fw-bold text-secondary'>https://www.livechat.com</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={6} className='mt-3'>
            <p className='fs-1'>Get In Touch</p>
            <input type="text"  placeholder='Your Name' className=' border-top-0 border-start-0 border-end-0  border border-2 border mt-3 form-control' required />
             <input type='email'  placeholder='Your Email' className='  border-top-0 border-start-0 border-end-0 mt-5 border border-2  form-control'  required />
              <input type="text"  placeholder='Subject' className=' border-top-0 border-start-0 border-end-0 mt-5 border border-2  form-control'  required />
              <textarea  placeholder='Your Message(optional)'  className=' pt-2 textarea border-top-0 border-start-0 border-end-0 mt-5 border border-2  form-control'></textarea>
              <button className='btn btn-dark mt-4'> Send Message</button>
          </Col>
           <Col mx={12} md={12} lg={6}>
           <div className='ratio ratio-4x3 mt-4'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1575.866446566832!2d144.94913000000003!3d-37.819725!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5a3ff30273%3A0x55700729bcaebb85!2s16122%20Collins%20St%2C%20West%20Melbourne%20VIC%203008%2C%20Australia!5e0!3m2!1sen!2sin!4v1753970302186!5m2!1sen!2sin" width="600" height="520"  
    allowFullScreen  loading="lazy" ></iframe>
           </div>   
          </Col>
        </Row>
      </Container>
      
    </>
  );
};
export default Contactinfo;
