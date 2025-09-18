import Accordion from 'react-bootstrap/Accordion';
function Faq() {
  return (
    <div className="container">
      <Accordion >
        <div className="row">
          <div className="col-lg-6">
            <Accordion.Item className='mt-3 border-top' eventKey="0">
              <Accordion.Header  > <b  className='fs-5'>What is your return policy ?</b></Accordion.Header>
              <Accordion.Body>
               We offer a hassle-free return policy. If you’re not satisfied with your purchase, you can return it within 30 days for a full refund or exchange. Please refer to our Returns & Exchanges page for detailed instructions.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className='mt-3 border-top'>
              <Accordion.Header><b className='fs-5'>How can I track my order ?</b> </Accordion.Header>
              <Accordion.Body>
               Tracking your order is easy! Once your order is shipped, we’ll send you a confirmation email with a tracking number. You can use this number to track your order’s status on our Order Tracking page.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className='mt-3 border-top'>
              <Accordion.Header> <b  className='fs-5'>What payment methods do you accept ?</b></Accordion.Header>
              <Accordion.Body>
               We accept major credit cards (Visa, MasterCard, American Express) and PayPal for secure and convenient payments.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" className='mt-3 border-top'>
              <Accordion.Header> <b  className='fs-5'>Do you offer international shipping ?</b></Accordion.Header>
              <Accordion.Body>
                Yes, we offer international shipping to most countries. Shipping fees and delivery times may vary based on your location. Please refer to our Shipping Information page for more details.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8" className='mt-3 border-top'>
              <Accordion.Header> <b  className='fs-5'>How can I contact your customer support ?</b></Accordion.Header>
              <Accordion.Body>
             You can reach our friendly customer support team through our Contact Us page, where you’ll find a contact form and our email address. We’re here to assist you with any questions or concerns you may have.
              </Accordion.Body>
            </Accordion.Item>
          </div>
          <div className="col-lg-6">
            <Accordion.Item eventKey="1" className='mt-3 border-top'>
              <Accordion.Header> <b  className='fs-5'>How do I care for my garments ?</b></Accordion.Header>
              <Accordion.Body>
             Care instructions can usually be found on the product’s care label or on the product page itself. We recommend following the provided guidelines to ensure the longevity and quality of your items.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className='mt-3 border-top'>
              <Accordion.Header> <b  className='fs-5'>Do you offer gift wrapping services ?</b> </Accordion.Header>
              <Accordion.Body>
             Yes, we offer gift wrapping services for a small additional fee. You can select this option during the checkout process.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5" className='mt-3 border-top'>
              <Accordion.Header> <b  className='fs-5'>Do you offer online ordering and shipping ?</b></Accordion.Header>
              <Accordion.Body>
               Yes, we offer online ordering with shipping options available. Contact us for more information.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7" className='mt-3 border-top '>
              <Accordion.Header> <b  className='fs-5'>Can I sign up for exclusive offers and updates ?</b></Accordion.Header>
              <Accordion.Body>
              Absolutely! Join our newsletter to receive exclusive offers, promotions, and updates on the latest fashion trends. You can sign up at the bottom of our homepage.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9" className='mt-3 border-top'>
              <Accordion.Header> <b  className='fs-5'>How do I create an account ?</b></Accordion.Header>
              <Accordion.Body>
                Creating an account is easy! Simply click on the “Sign Up” link at the top of the page and follow the prompts to enter your information. You’ll then have access to order history, wishlists, and faster checkout.
              </Accordion.Body>
            </Accordion.Item>
          </div>
        </div>
      </Accordion>
    </div>
  );
}

export default Faq;
