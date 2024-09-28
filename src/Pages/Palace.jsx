import React,{useEffect} from 'react';
import Image1 from '../assets/palace/1.jpg'
import Image2 from '../assets/palace/2.jpg'
import Image3 from '../assets/palace/3.jpg'
import Image4 from '../assets/palace/4.jpg'
import Image5 from '../assets/palace/5.jpg'
import Image6 from '../assets/palace/6.jpg'
import Image7 from '../assets/palace/7.jpg'
import { FaEnvelope, FaInstagramSquare, FaWhatsapp} from 'react-icons/fa';
import '../App.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navigation from '../Components/Navigation'
import Feedback from '../Components/Feedback';

function Palace() {

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

    <h1 className='bold'>The Balmoral Hall</h1>
    <h3>Federal Palace Hotel, VI, Lagos State.</h3>
    <p>200 Seating Capacity </p>  
    <div className='icons'>
    <a className='mail' href='mailto:Nathanael@balmoral.com.ng'><FaEnvelope/></a>  
      <a href='https://www.instagram.com/balmoralevents?igsh=MzRlODBiNWFlZA=='><FaInstagramSquare/></a>
      <a href=' https://wa.me/+2348094151640'><FaWhatsapp/></a>
    </div>
    
     <div className='amenities'>
      <div >
        <h4 className='feed'>AMENITIES/ BENEFITS</h4>
          <ul>
            <li>8 hours for your event.</li>
            <li>1 hour pre-event cooling.</li>
            <li>Effective cooling (Air Conditioners).</li>
            <li>Two Generators.</li>
            <li>Five-star Toilets.</li>
            <li>Green Room.</li>
            <li>Banquet Chairs & Banquet Tables.</li>
            <li>Large parking space.</li>
            <li>Façade/Photo area.</li>
            <li>Additional hours attract extra cost. Kindly note that you can't bring in catering.</li>
            <li>A complimentary room for your event at Federal Palace Hotel.</li>
            <li>Discounted Rate for your hotel bookings for your guests, using Balmoral Convention Center as your code.</li>
          </ul>
      </div>
      <div>
        <h4 className='feed'>RATE</h4>
        <p>1.5 MILLION (EXCLUSIVE OF TAXES)</p>

        <h4 className='feed'>CAPACITY</h4>
          <ul>
            <li>Banquet Seating: 200</li>
            <li>Theater Seating: 300</li>
          </ul>
          <p>Capacity is dependent the client's floor plan</p>
          <small><i>We are looking forward to hosting your event here at Balmoral Convention Center. Thank You.</i></small>

      </div>
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
export default Palace