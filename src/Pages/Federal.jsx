import React,{useEffect} from 'react';
import Image1 from '../assets/federal/1.jpg'
import Image2 from '../assets/federal/2.jpg'
import Image3 from '../assets/federal/3.jpg'
import Image4 from '../assets/federal/4.jpg'
import Image5 from '../assets/federal/5.jpg'
import Image6 from '../assets/federal/6.jpg'
import Image7 from '../assets/federal/7.jpg'
import { FaEnvelope, FaInstagramSquare, FaWhatsapp} from 'react-icons/fa';
import '../App.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navigation from '../Components/Navigation'
import Feedback from '../Components/Feedback';

function Federal() {

  useEffect(() => {
    AOS.init({duration: 500})
},[]);

  const images = [
    { image: Image1 },
    { image: Image2 },
    { image: Image3 },
    { image: Image4 },
    { image: Image5 },
    { image: Image6 },
    { image: Image7 },

  ];
  return (<>
  <Navigation/>
  <div className='container' data-aos="fade-out">

    <h1 className='bold'>Balmoral Convention Center</h1>
    <h3>6-8 Ahmadu Bello Way, Federal Palace Hotel, VI, Lagos State.</h3>
    <div className='icons'>
    <a className='mail' href='mailto:Nathanael@balmoral.com.ng'><FaEnvelope/></a>  
      <a href='https://www.instagram.com/balmoralevents?igsh=MzRlODBiNWFlZA=='><FaInstagramSquare/></a>
      <a href=' https://wa.me/+2348094151640'><FaWhatsapp/></a>
    </div>

    <div data-aos="fade-out">
      <p className='text'>Nestled in the heart of Victoria Island, our Balmoral Convention Centre is an epitome of sophistication. With its expansive spaces and state-of-the-art facilities, it's an ideal choice for large-scale conferences, exhibitions, and grand celebrations. The iconic skyline serves as a backdrop, adding an extra touch of grandeur to your event.
      The Balmoral Convention Center, Federal Palace Hotel, Victoria Island is located on the premises of the Federal Palace Hotel, a 5 star luxury hotel that offers state of the art facility and comforts of unimaginable proportions.
      Strategically located at the heart of Victoria Island, the Balmoral Convention Centre is the preferred venue for gatherings of all kinds in the region with proximity to both Island and mainland audiences.
      With the state of the art facilities and amenities, Balmoral Convention Centre guarantees a memorable and unforgettable moments when you use our centers for your wedding, birthdays, weddings, festivals, exhibitions among others with a 5 star room to retire to at the Federal Palace Hotel We had your event in mind when designing and building The Balmoral Convention Center.</p>
    </div>
    <div className='amenities'>
      <div >
        <h4 className='feed'>AMENITIES</h4>
          <ul>
            <li>8 hours for your event.</li>
            <li>1 hour pre-event cooling.</li>
            <li>Effective cooling (Air Conditioners).</li>
            <li>Two Generators.</li>
            <li>Five-star Toilets.</li>
            <li>Green Room</li>
            <li>Banquet Chairs & Banquet Tables.</li>
            <li>Large parking space</li>
            <li>Façade/Photo area</li>
            <li>10 service points / Vendors space</li>
            <small><i>Additional hours attract extra cost. Kindly note that you can bring in catering.</i></small>
          </ul>
      </div>
      <div>
        <h4 className='feed'>BENEFITS</h4>
          <ul>
            <li>A complimentary room for your event.</li>
            <li>Discounted Rate for your hotel bookings, using
  Balmoral Convention Center as your code.</li>
          </ul>
        <h4 className='feed'>RATE</h4>
        <p>8 MILLION NAIRA (EXCLUSIVE OF TAXES)</p>
        <p>10 MILLION (INCLUSIVE OF TAXES FOR DECEMBER 2024 ONLY)</p>
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
<small><i>We are looking forward to hosting your event here at
Balmoral Convention Center. Thank You.</i></small>

</div>



    <h2 className='text-center feed'>Gallery</h2>
    <div className="image-container text-center">
  {images.map((data, index) => (
    <div key={index}>
      <img src={data.image} alt={`Image ${index + 1}`} data-aos="flip-right" />
    </div>
  ))}
</div>

<Feedback/>
</div>
    </>
  )
}

export default Federal