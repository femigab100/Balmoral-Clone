import React,{useEffect} from 'react';
import Image1 from '../assets/oregun/1.jpg'
import Image2 from '../assets/oregun/2.jpg'
import Image3 from '../assets/oregun/3.jpg'
import Image4 from '../assets/oregun/4.jpg'
import { FaEnvelope, FaInstagramSquare, FaWhatsapp} from 'react-icons/fa';
import '../App.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navigation from '../Components/Navigation'
import Feedback from '../Components/Feedback';

function Oregun() {

  useEffect(() => {
    AOS.init({duration: 500})
},[]);

  const images = [
    { image: Image1 },
    { image: Image4 },
    { image: Image3 },
    { image: Image2 }
  ];
  return (<>
  <Navigation/>
  <div className='container' data-aos="fade-out">

    <h1 className='bold'>The Balmoral Hall</h1>
    <h3>98, Kudirat Abiola Way, Oregun, ikeja, Lagos State.</h3>
    <p>3,000 sitting capacity</p>
    <div className='icons'>
    <a className='mail' href='mailto:Nathanael@balmoral.com.ng'><FaEnvelope/></a> 
      <a href='https://www.instagram.com/balmoralhalloregun?igsh=MzRlODBiNWFlZA=='><FaInstagramSquare/></a>
      <a href=' https://wa.me/+2348094151640'><FaWhatsapp/></a>
    </div>

    <div>
      <p className='text'>The Balmoral Hall is a state of the art event centre located at the popular Kudirat Abiola Way, Oregun, Ikeja, Lagos. The Balmoral Hall provides an excellent environment for all kinds of event ranging from corporate event, weddings, engagement ceremonies, Burial ceremonies, Birthday ceremonies etc. The facilities on ground and the professional staffs, well trained and diverse in event planning makes The Balmoral Oregun event centre stand out in its environs.</p>
    </div>
    <div className='amenities'>
      <div >
        <h4 className='feed'>AMENITIES/ BENEFITS</h4>
          <ul>
            <li>Excellent Customer Service and Relationship.</li>
            <li>20m by 60m Marquee Tent.</li>
            <li>2 Car Parking Space (indoor & outdoor.)</li>
            <li>Changing Room.</li>
            <li>Air Conditioning.</li>
            <li>Serene Toilets.</li>
            <li>Gold and Silver Chivalry Chairs.</li>
            <li>Generator Lighting for Uninterrupted Power.</li>
            <li>2 Vendor's Areas.</li>
            <li>Accessibility to the expressway.</li>
            <li>4 in-house security</li>
            <li>2 Lasma</li>
            <li>2 mopol for the second parking space.</li>
            <li>Event duration- 8hours + 1hour complementary.</li>
          </ul>
      </div>
      <div>
        <h4 className='feed'>RATE</h4>
        <p>The Venue Price is 3 Million</p>

        <h4 className='feed'>CAPACITY</h4>
          <ul>
            <li>Banquet Seating: 800</li>
            <li>Theater Seating: 1,500</li>
          </ul>
          <p>Capacity is dependent the client's floor plan</p>
          <p>NOTE: The hall does not come with a stage and we don't power band/ Dj. <br /> You are also going to do the lagos state safety clearance.  </p>
          <small><i>We are looking forward to hosting your event here at Balmoral Convention Center. Thank You.</i></small>

      </div>
    </div>

<div className='capacity'>
      <h4 className='feed'>CAPACITY</h4>
    <ul>
      <li>30m by 70m = 2100sqm</li>
      <li>1700 Banquet sitting</li>
      <li>3500 Theater sitting</li>
  </ul>
<p>Capacity is dependent the client's floor plan</p>


</div>



    <h2 className='text-center feed'>Gallery</h2>
    <div className="image-container text-center">
  {images.map((data, index) => (
    <div key={index}>
      <img src={data.image} alt={`Image ${index + 1}`} data-aos="flip-right" />
    </div>
  ))}
</div>


</div>
<Feedback/>
    </>
  )
}
export default Oregun