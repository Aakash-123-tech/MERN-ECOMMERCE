import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Aboutus } from '../../assets/assets';

function JustifiedExample() {
  return (
    <>
    <div className='bg-dark text-light p-5  text-center aboutContent '>
      <p className=' p-5 fs-1 ' >Discover the Art of Dressing Where Every Stitch Tells a Story and Every Outfit Paints a Picture</p>  
    </div>
    <div className='container mt-5'>
      
    <Tabs 
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3 custom-tab"
      justify
      
    
    >
      <Tab eventKey="home" title="About Mixtas" >
         <div className="row">
        <div className="col-lg-6  ">
          <div className="card">
           <img src={Aboutus.aboutimage} alt="img" height={400}  />
          </div>
          
        </div>
       
        <div className="col-lg-6  ">  
          <h1 className='fs-1 mt-5 ' >Unveiling Your Unique Fashion Journey</h1>
          <p className='fs-5 mt-3 text-secondary'>Welcome to Mixtas Store, where fashion meets individuality, and style is more than just clothing  it's a statement. Our passion for fashion drives us to curate a collection that celebrates diversity, embraces trends, and empowers you to express yourself through clothing.</p>
        </div>
       </div>
      </Tab>
      <Tab eventKey="profile" title="Our Story ">
  <section id="about-us" className="brand-story text-secondary container mt-5">
  <p>
    In the heart of [Your City], a dream was woven into the fabric of reality – the dream of creating a clothing haven that resonates with style enthusiasts, trendsetters, and those who seek to express themselves through fashion. Welcome to [Your Store Name], where every stitch tells a story.
  </p>
  <p>
    Founded in [Year], [Your Store Name] emerged from a passion for clothing and a commitment to providing a curated collection that transcends mere fashion trends. Our journey began with the belief that clothing is not just about covering the body; it’s a canvas for self-expression, an art form that reflects individuality.
  </p>
  <p>
    What sets us apart is our dedication to offering more than just garments – we curate experiences. From the luxurious touch of premium fabrics to the meticulous craftsmanship of each design, every piece at [Your Store Name] is a testament to our commitment to quality and style. Our curated selection embraces the essence of contemporary trends while celebrating the enduring charm of timeless classics.
  </p>
  <p>
    At [Your Store Name], we understand that fashion is more than a fleeting moment; it’s an ongoing narrative. Our collections are thoughtfully curated to tell stories that resonate with diverse tastes, preferences, and lifestyles. We believe in empowering our customers to embrace their unique identities through the choices they make in our store.
  </p>
  <p>
    Beyond the racks of clothing, [Your Store Name] is a community – a gathering place for fashion enthusiasts to connect, explore, and celebrate the art of dressing well. Our team is passionate about assisting you in creating looks that speak volumes and stand the test of time.
  </p>

  <p>
    As we continue to evolve, our commitment remains unwavering – to inspire confidence, foster self-expression, and redefine the way you experience fashion. Thank you for being a part of our story, and we look forward to helping you script your own fashion narrative at [Your Store Name].
  </p>
  <p> Feel free to customize the details to align with your store’s unique history and vision.</p>
</section>
      </Tab>
      <Tab eventKey="longer-tab" title="Our Misson">
        <section className='container mt-5 text-secondary' >
        <p>At [Your Store Name], we are driven by a singular mission: to empower individuals through the art of fashion. We believe that clothing is not just a means of covering the body but a powerful tool for self-expression, confidence, and individuality.</p>
        <div className='container'>
           <p> 
          1. <strong>Curate Exceptional Style:</strong> We are committed to curating a diverse and exceptional collection of clothing that transcends the boundaries of fashion. Our mission is to offer a carefully selected range of garments that reflect the latest trends, timeless classics, and unique pieces that resonate with our customers.
        </p>
        <p>
          2. <strong>Quality Craftsmanship:</strong>We prioritize quality craftsmanship in every stitch and detail. Our dedication to superior craftsmanship ensures that each garment is not just a piece of clothing but a work of art, designed to stand the test of time.
        </p>
        <p>
          3. <strong>Celebrate Diversity:</strong>Fashion is a universal language, and we celebrate the diversity of styles and tastes. Our mission is to provide a space where individuals from all walks of life can find clothing that aligns with their unique identity and personal expression.
        </p>
        <p>
          4. <strong>Customer Empowerment:</strong> We strive to empower our customers to embrace their individuality with confidence. Our team is committed to providing personalized assistance, style advice, and a seamless shopping experience that goes beyond transactions to create lasting connections.
        </p>
        <p>
          5. <strong>Sustainable Choices: </strong>As stewards of the environment, we are dedicated to making sustainable choices in our business practices. We actively seek eco-friendly materials, ethical manufacturing processes, and sustainable packaging options to contribute to a more conscious and responsible fashion industry.
        </p>
        <p>
          6. <strong>Community Engagement: </strong>[Your Store Name] is more than just a place to shop; it’s a community. Our mission extends beyond fashion to create a space where like-minded individuals can connect, share inspiration, and foster a sense of belonging.
        </p>
        <p>
          7. <strong>Innovation and Adaptability:</strong> In a dynamic and ever-changing fashion landscape, we embrace innovation and adaptability. Our mission is to stay ahead of the curve, offering the latest trends and technological advancements that enhance the overall shopping experience.

        </p>
        </div>
        <p>At [Your Store Name], our mission is not just about selling clothes; it’s about fostering a culture of confidence, creativity, and self-expression. Join us on this journey as we continue to redefine the way you experience fashion.”</p>
        <p>Feel free to modify the mission statement to align with the specific values and goals of your clothing store.</p>
        </section>
      </Tab>
      <Tab eventKey="contact" title="Connect with Us" >
        <section className='mt-5 container'>
          <h1 className='fw-bold'>Affilate Program</h1>
          <div className='container text-secondary mt-4'>
             <ul>
              <li><p> Build your own online sporting goods store!</p></li>
              <li><p>If you have a web site, you can make money selling sporting goods products. It’s easy and it’s free to join.</p></li>
              <li><p>Click here to join now and earn commissions of up to 6%</p></li>
             </ul>
          </div>
        </section>
      </Tab>
    </Tabs>
    </div>
    </>
  );
}

export default JustifiedExample;








