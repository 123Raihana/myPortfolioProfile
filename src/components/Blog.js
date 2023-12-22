import React, { useState } from 'react'
import ScrollToTop from "react-scroll-to-top";
import {Form,Button, Col,Container,Row} from "react-bootstrap";
import emailjs from '@emailjs/browser';
import {FaPhone, FaMailBulk, FaSearchLocation,FaLinkedinIn, FaGithub, FaWhatsapp, FaTelegram} from 'react-icons/fa';
// import { SocialIcon } from 'react-social-icons';
import "./Blog.css";
const Result = () =>{
  return(
    <p>your message has been successfully sent. I will contact you soon.</p>
  )
}
const Blog = () => {
  const [result,showResult] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_97hfotp', 'template_gzt0fpt', e.target, 'L21AtYQpGVVPpNIiW')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
    showResult(true);
  };
  return (
    <>
    <ScrollToTop className='arr' smooth/>
    <div id='Blog'>
    <div className='title' >
      <h2>Contact Me</h2>
    </div>
      <Container>
        <Row>
          <Col md={9}>
          
    <div className='main'>
    <Form className='rounded'  onSubmit={sendEmail}>
    <Row>
          <Col>
       <Form.Group className='mb-3' controlId="formBasicName">
         <Form.Label>Name</Form.Label>
         <Form.Control className='w-75' type="name"  name="from_name" placeholder='Name' required/>
       </Form.Group>
       
       <Form.Group className='mb-3'>
         <Form.Label >Subject</Form.Label>
         <Form.Control className='w-75'  type="subject" name="subject" placeholder='subject' required></Form.Control>
       </Form.Group>
       <Form.Group className='mb-3'>
         <Form.Label >Message</Form.Label>
         <Form.Control className='w-75' type="Message" name="message" placeholder='message' required></Form.Control>
       </Form.Group><br/>
       <Button variant="secondary" type="submit">
        Send Message
       </Button>
       <div className='row'>{result ? <Result/> : null}</div>
      
    </Col>
    <Col>
    <Form.Group className='mb-3'>
         <Form.Label >Email</Form.Label>
         <Form.Control className='w-75'  type="email" name="email_id" placeholder='email' required></Form.Control>
       </Form.Group>
    </Col>
    </Row>
    </Form>
    </div>
    </Col>
    
    
    
    <Col md={3} className="contact">
  
   <h6>  <FaPhone className='icons phone' />+919361572102</h6>

   
   <h6> <FaMailBulk className='icons mail'/> raihana2028@gmail.com</h6>
 
   
   <h6> <FaSearchLocation className='icons location'/> Sivagiri,Erode</h6>
   
   </Col>


  
   
   
   
   
    </Row>
    </Container>
    {/* <div className='right'>
      <SocialIcon url='https://telephone.com'></SocialIcon>
    </div> */}
    <div id="foot">
    <p>Portfolio</p>
    <div className='text'>
    <FaLinkedinIn className='footer'/>
    <FaGithub className='footer'/>
    <FaWhatsapp className='footer'/>
    <FaTelegram className='footer'/>
    </div>
    <p>All rights reserved</p>
    </div>
    </div>
    </>
  )
}

export default Blog