import React,{useEffect} from 'react';
import Image1 from '../assets/villa/1.jpg'
import Image3 from '../assets/villa/3.jpg'
import Image4 from '../assets/villa/4.jpg'
import Image5 from '../assets/villa/5.jpg'
import Image6 from '../assets/villa/6.jpg'
import Image8 from '../assets/villa/8.jpg'
import Image9 from '../assets/villa/9.jpg'
import Image10 from '../assets/villa/10.jpg'
import { FaEnvelope, FaInstagramSquare, FaWhatsapp} from 'react-icons/fa';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navigation from '../Components/Navigation'
import Feedback from '../Components/Feedback';

function Villa() {

  useEffect(() => {
    AOS.init({duration: 500})
},[]);

  const images = [
    { image: Image1 },
    { image: Image6 },
    { image: Image3 },
    { image: Image4 },
    { image: Image5 },
    { image: Image9 },
    { image: Image8 },
    { image: Image10 },
  ];
  return (<>

<Navigation/>
<div className='container' data-aos="fade-out">

    <h1 className='bold'>Villa Valha Lagos</h1>
    <h3>1 Grillo Street, Ikoyi, Lagos-Nigeria.</h3>
    <div className='icons'>
      <a className='mail' href='mailto:Nathanael@balmoral.com.ng'><FaEnvelope/></a>  
      <a href='https://www.instagram.com/thevillavalhallalagos?igsh=MzRlODBiNWFlZA=='><FaInstagramSquare/></a>
      <a href=' https://wa.me/+2348094151640'><FaWhatsapp/></a>
    </div>
    <div>
      <p className='text'>Villa Valhalla was constructed with luxury in mind! From the executive suites to the pool, we planned out the anticipated and emerging needs of our clientele and the means to offer these benefits to our constant streams of guests (corporate, vacationers, events and locals)</p>

      <p className='text'>
      An upscale all-inclusive private luxury party house designed to create a differentiated get away and resort style experience in the center of a commercial hub of Ikoyi.
      A fully furnished private residence with a blend of modern architecture, state of the art features and world class amenities featuring three fully furnished ensuite bedrooms in the heart of Ikoyi. Lagos, Nigeria. Villa Valhalla capitalizes on personalized service, comfort and premium lifestyle.
      </p>
    </div>

    <div className='amenities'>
      <div >
        <h4 className='feed'>RATES</h4>
        <ul>
  <li>
    Day Booking - Weekdays (Monday - Thursday) 12 noon - 8 pm:
    <ul>
      <li>Normal Season (11th JAN - 30th NOV): N750,000</li>
      <li>Peak Season (1st DEC - 10th JAN): N1,000,000</li>
    </ul>
  </li>
  <li>
    Day Booking - Weekends (Friday & Sunday) 12 noon - 10 am:
    <ul>
      <li>Normal Season (11th JAN - 30th NOV): N1,000,000</li>
      <li>Peak Season (1st DEC - 10th JAN): N1,250,000</li>
    </ul>
  </li>
  <li>
    Overnight Stay - Weekdays (Monday - Thursday) 2 pm - 12 noon next day:
    <ul>
      <li>Normal Season (11th JAN - 30th NOV): N1,000,000</li>
      <li>Peak Season (1st DEC - 10th JAN): N1,500,000</li>
    </ul>
  </li>
  <li>
    Photoshoot Package (Monday & Wednesday):
    <ul>
      <li>N300,000 per 3 hours</li>
      <li>N500,000 per 4 hours</li>
    </ul>
  </li>
  <li>
    Overnight Stay - Weekends (Friday & Sunday) 12 noon - 12 noon the next day:
    <ul>
      <li>Normal Season (11th JAN - 30th NOV): N1,250,000</li>
      <li>Peak Season (1st DEC - 10th JAN): N1,500,000</li>
    </ul>
  </li>
  <li>
    Special Events (Any day of the week) Open to large guest size:
    <ul>
      <li>Normal Season (11th JAN - 30th NOV): N1,500,000</li>
      <li>Peak Season (1st DEC - 10th JAN): N2,000,000</li>
    </ul>
  </li>
  <li>
    5% Discount for more than 2 days Booked / 10% Discount for more than 3 days
  </li>
</ul>


<ul>
            <small><i>Additional hours attract extra cost.</i></small>
            <small><i> <br/> We are looking forward to hosting your event here at
Balmoral Convention Center. Thank You.</i></small>
          </ul>
      </div>
    </div>

    <h2 className='text-center feed'>Gallery</h2>
    <div className="image-container text-center">
  {images.map((data, index) => (
    <div key={index}>
      <img src={data.image} alt={`Image ${index + 1}`} data-aos="flip-right"/>
    </div>
  ))}

</div>

</div>
<Feedback/>
    </>
  )
}

export default Villa