import React,{useEffect} from 'react';
import Image1 from '../assets/sheraton/1.jpg'
import Image2 from '../assets/sheraton/2.jpg'
import Image3 from '../assets/sheraton/3.jpg'
import Image4 from '../assets/sheraton/4.jpg'
import Image5 from '../assets/sheraton/7.jpg'
import Image6 from '../assets/sheraton/6.jpg'
import Image7 from '../assets/sheraton/5.jpg'
import Image8 from '../assets/sheraton/8.jpg'
import { FaEnvelope, FaInstagramSquare, FaWhatsapp} from 'react-icons/fa';
import '../App.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navigation from '../Components/Navigation'
import Feedback from '../Components/Feedback';

function Sheraton() {

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
    { image: Image8 },
  ];
  return (<>
  <Navigation/>
  <div className='container' data-aos="fade-out">

    <h1 className='bold'>Balmoral Convention Center</h1>
    <h3>30 Mobolaji Bank Anthony way, Sheraton Lagos Hotel, ikeja. Lagos State</h3>
    <p>3,000 sitting capacity</p>
    <div className='icons'>
    <a className='mail' href='mailto:Nathanael@balmoral.com.ng'><FaEnvelope/></a>   
      <a href='https://www.instagram.com/balmoral_cc_ikeja?igsh=MzRlODBiNWFlZA=='><FaInstagramSquare/></a>
      <a href=' https://wa.me/+2348094151640'><FaWhatsapp/></a>
    </div>
 
    <div>
      <p className='text'>Balmoral Venues, a subsidiary of Balmoral Group, specializes in the management of event venue rentals. Balmoral Venues boasts an extensive network of strategically located event centers in Lagos and a mobile division that can provide venues at any location of choice. Our unique and spacious event center, situated at the Sheraton in Ikeja, Lagos, sets us apart as one of the largest and most sought-after venue providers in Nigeria and West Africa. Our team of dedicated professionals ensure a seamless event management experience, regardless of the location. As a premium venue, the Balmoral Convention Center With multiple locations in Lagos and expand to other cities like Abuja and outside Africa, we are the largest venue providers in Nigeria and West Africa.</p>

      <p className='text'>The Balmoral Convention Centre Sheraton is located at 30 Mobolaii Bank Anthony Way, Ikeja, Lagos, the Balmoral Convention Centre Sheraton is a stunning (50×30 meter) 1,950 square meter venue (inclusive of Mezzanine space 30 by 15m) that caters to a diverse range of events. Its prime location within the Sheraton Hotel makes it easily accessible. Boasting a generous capacity of over 2500 guests, the Balmoral Convention Centre Sheraton is one of the largest and most exceptional event centres on the mainland.</p>
    </div>
    <div className='amenities'>
      <div >
        <h4 className='feed'>AMENITIES</h4>
          <ul>
            <li>8 hours for your event.</li>
            <li>1 hour pre-event cooling.</li>
            <li>Large parking space</li>
            <li>Standard Generator.</li>
            <li>Five-star Toilets.</li>
            <li>Green Room</li>
            <li>Sophisticated Changing Rooms</li>
            <li>4 Parking Marshalls</li>
            <li>Exquiste Vow area</li>
            <li>Banquet Chairs & BanquetTables.</li>
            <li>State Of The Art Air Conditioning and Industrial Chillers.</li>
            <li>Serene Readily made Façade/Photoarea</li>
            <li>Condusive service points/Vendors space</li>
            <li>4 Toilets and Bathroom for Vendors</li>

            <small><i>Additional hours attract extra cost.<strong> Kindly note that you can bring in catering. </strong></i></small>
          </ul>
      </div>
      <div>
        <h4 className='feed'>BENEFITS</h4>
         <p>DISCOUNTED RATE FOR YOUR HOTEL BOOKING AT  SHERATON LAGOS HOTEL DURING YOUR EVENT PERIOD.</p>
        <h4 className='feed'>RATE</h4>
        <p>The Venue Price is 6 Million</p>
        <p>The Venue with light and sound is 8 Million</p>
        <p><i>All excluding VAT, Tax and client refundable of 200,000</i></p>
        <p><strong>Dec 2024 rates: 8Million (Venue Price)</strong></p>
      </div>
    </div>

<div className='capacity'>
      <h4 className='feed'>CAPACITY</h4>
    <ul>
      <li>Mainfloor: 1500sqm(30mx50m)</li>
      <li>Mezzaninefloor: 450sqm(30mx15m)</li>
      <li>Banquetseating: 2,000</li>
      <li>Theaterseating: 3,000</li>
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

</div>
<Feedback/>
    </>
  )
}

export default Sheraton