import React,{useEffect} from 'react';
import Navigation from './Navigation'
import Feedback from './Feedback'
import {Link} from 'react-router-dom'
import Villa1 from '../assets/villa/villa1.jpg'
import Federal from '../assets/federal/Federal1.jpg'
import sheraton from '../assets/sheraton/sheraton1.jpg'
import oregun from '../assets/oregun/oregun1.jpg'
import Palace from '../assets/palace/palace.jpg';
import AOS from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
  useEffect(() => {
    AOS.init({duration: 500})
},[]);

  return (
    <>
<Navigation />
 
 <div className='groupall'>

  <div className='space'>
    <Feedback/>
  </div>

      <h2 className='ven text-center'>Venues</h2>
      {/* Villa Valha Lagos */}
        <div className="card text-center" data-aos="flip-left">
          <img src={Villa1} className="card-img-top" alt="Villa" />
          <div class="card-body">
            <h2 className="card-title">Villa Valha Lagos</h2>
            <h5 className="card-text">Ikoyi, Lagos State.</h5>
            <p>A Villa</p>
            <Link to="/villa" className="btn btn-outline-success">See More</Link>
          </div>
      </div>

      {/* Balmoral Convention Center */}
      <div className="card text-center" data-aos="flip-right">
          <img src={Federal} className="card-img-top" alt="Villa" />
          <div class="card-body">
            <h2 className="card-title">Balmoral Convention Center</h2>
            <h5 className="card-text">Federal Palace Hotel, Victoria Island, Lagos State.</h5>
            <p>2,000 Capacity Hall</p>
            <Link to="/Federal" className="btn btn-outline-success">See More</Link>
          </div>
      </div>

      {/* Balmoral Convention Center Sheraton */}
      <div className="card text-center" data-aos="flip-right">
          <img src={sheraton} className="card-img-top" alt="Villa" />
          <div class="card-body">
            <h2 className="card-title">Balmoral Convention Center</h2>
            <h5 className="card-text">Sheraton Hotel Ikeja, Lagos State.</h5>
            <p>3,000 Sitting Capacity Hall</p>
            <Link to="/sheraton" className="btn btn-outline-success">See More</Link>
          </div>
      </div>

      {/* Balmoral Convention Hall Oregun */}
      <div className="card text-center" data-aos="flip-left">
          <img src={oregun} className="card-img-top" alt="Villa" />
          <div class="card-body">
            <h2 className="card-title">The Balmoral Hall</h2>
            <h5 className="card-text">Oregun Ikeja, Lagos State.</h5>
            <p>1,000 Sitting Capacity Hall</p>
            <Link to="/oregun" className="btn btn-outline-success">See More</Link>
          </div>
      </div>

          {/* Balmoral Hall Federal Palace */}
          <div className="card text-center" data-aos="flip-right">
          <img src={Palace} className="card-img-top" alt="Villa" />
          <div class="card-body">
            <h2 className="card-title">The Balmoral Hall</h2>
            <h5 className="card-text">Federal Palace Hotel, Victoria Island, Lagos State.</h5>
            <p>200 Sitting Capacity Hall</p>
            <Link to="/palace" className="btn btn-outline-success">See More</Link>
          </div>
      </div>

 </div>


     
    </>
    )
}

export default Home