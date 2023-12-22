import React from 'react'
import SectionTitle from './SectionTitle';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import {Swiper,SwiperSlide} from 'swiper/react';

// import projects from '../datas/projects';
// import ProjectsSection from './ProjectsSection';
import Mujhana from '../components/images/mujhana.png';
import coolweb from '../components/images/coolweb.png';
import Cheers from '../components/images/cheers.png';
import calc from '../components/images/calc.png';
import clock from '../components/images/clock.png';
import './Portfolio.css';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const Portfolio = () => {
  const sliderSettings = {
    // dots:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    
  }
  return (
    
    <div id="Portfolio">
      <div className='container'>
        <SectionTitle heading="Projects" 
        subheading="Some of my recent works"/>
        {/* <div className='project_allItems'> */}
        <Slider  className='card' {...sliderSettings}>
         
        <Card style={{ width: '18rem' }} data-aos="flip-right">
      <Card.Img variant="top" src={Mujhana} />
      <Card.Body>
        <Card.Title>Mujhana Shopping</Card.Title>
        
        <Card.Link href="https://github.com/123Raihana/123Raihana.github.io">  <FaGithub/></Card.Link>
        <Card.Link href=""><FaGlobe/></Card.Link>
      </Card.Body>
    </Card>
    
   
    <Card style={{ width: '18rem' }} data-aos="flip-right">
      <Card.Img variant="top" src={calc} />
      <Card.Body>
        <Card.Title >Card Title</Card.Title>
        
        <Card.Link href="https://github.com/123Raihana/123Raihana.github.io.calc">  <FaGithub/></Card.Link>
        <Card.Link href=" https://123raihana.github.io/123Raihana.github.io.calc/"><FaGlobe/></Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} data-aos="flip-right">
      <Card.Img variant="top" src={Cheers} />
      <Card.Body>
        <Card.Title>e-Commerce website</Card.Title>
        
        <Card.Link href="#">  <FaGithub/></Card.Link>
        <Card.Link href="#"><FaGlobe/></Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} data-aos="flip-right">
      <Card.Img variant="top" src={clock} />
      <Card.Body>
        <Card.Title >Card Title</Card.Title>
        
        <Card.Link className='link' href="https://github.com/123Raihana/123Raihana.github.io.clock">  <FaGithub/></Card.Link>
        <Card.Link  className='link'href=" https://123raihana.github.io/123Raihana.github.io.clock/"><FaGlobe/></Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} data-aos="flip-right">
      <Card.Img variant="top" src={coolweb} />
      <Card.Body>
        <Card.Title>e-Commerce website</Card.Title>
        
        <Card.Link href="https://github.com/123Raihana/123Raihana.github.io.coolweb">  <FaGithub/></Card.Link>
        <Card.Link href="#"><FaGlobe/></Card.Link>
      </Card.Body>
    </Card>
        </Slider>
{/*          
         </div>
         */}

      
        
          </div> 
    </div>
  )
}

export default Portfolio