import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import './MyIntro.css'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import raihana from "../components/images/raihana .A.jpg"
import {FaUserGraduate} from 'react-icons/fa';
import {MdWork} from 'react-icons/md';
const MyIntro = () => {
  const [data,setData] = useState([]);
 useEffect(()=>{ 
  axios.get("http://localhost:4000/fetchData").then(response => {
   setData(response.data);
  })
 }, []);
 console.log(data);

 window.addEventListener("load", () => {
  const myAnimationElement = document.querySelector("#skills")
  myAnimationElement.classList.add("animate");
 });
  return (
    <div id="MyIntro" className="container">
      {/* {data.map((item)=>(
        <div key={item.id}> <img src={item.img}/>
        <p>{item.name}</p></div>
       
      ))} */}
     <h6 className='head'>MyIntro</h6>
     <Row>
    
      <Col md={4}>
     
       <div className='img' data-aos="zoom-in-up">
        <img src={raihana} alt="geragf" />
       </div>
      </Col>
      <Col md={8} id="info">
      <p>About Me</p>
      <p>I am working as a freelance web designer and developer for 1.5 years.<br/>
          I love to design and make new web experiences for the people.</p>
          <p>name : Raihana A</p>
          <p>phone : +919361572102</p>
          <p>email : raihana2028@gmail.com</p>
          {/* <h6>My Interests</h6>
          <div className='flex'>
            <p>Music</p>
            <p>Travel</p>
            <p>Movie</p>
            <p>Photo</p>
            </div> */}
      </Col>
      
     </Row>
     <h6 className='head'>My Skills</h6>
 <Row>
  <Col xs={12} md={6}>
     <div className='skills'>
      <span className='Name'>Html</span>
      <div id='percent'>
        <div className='progress' style={{width:"95%"}}></div>
      </div>
      <span className='Value'>95%</span>
     </div>
     <div className='skills'>
      <span className='Name'>css</span>
      <div id='percent'>
        <div className='progress' style={{width:"80%"}}></div>
      </div>
      <span className='Value'>80%</span>
     </div>
     <div className='skills'>
      <span className='Name'>Javascript</span>
      <div id='percent'>
        <div className='progress' style={{width:"70%"}}></div>
      </div>
      <span className='Value'>70%</span>
     </div>
     <div className='skills'>
      <span className='Name'>ReactJs</span>
      <div id='percent'>
        <div className='progress' style={{width:"90%"}}></div>
      </div>
      <span className='Value'>95%</span>
     </div>
     </Col>
     <Col xs={12} md={6}>
     <div className='skills'>
      <span className='Name'>Bootstrap</span>
      <div id='percent'>
        <div className='progress' style={{width:"85%"}}></div>
      </div>
      <span className='Value'>85%</span>
     </div>
     <div className='skills'>
      <span className='Name'>Expressjs</span>
      <div id='percent'>
        <div className='progress' style={{width:"50%"}}></div>
      </div>
      <span className='Value'>50%</span>
     </div>
     <div className='skills'>
      <span className='Name'>mongodb</span>
      <div id='percent'>
        <div className='progress' style={{width:"51%"}}></div>
      </div>
      <span className='Value'>51%</span>
     </div>
     <div className='skills'>
      <span className='Name'>nodejs</span>
      <div id='percent'>
        <div className='progress' style={{width:"49%"}}></div>
      </div>
      <span className='Value'>49%</span>
     </div>
     </Col>
     </Row>
     <div className='title'>
     <h6 className='head'>My Qualification</h6>
     <p>Awesome Journey</p>
     </div>
     <Row>
      <Col>
      <h3>Education</h3>
      <p><FaUserGraduate className='icon'/> &nbsp;(2017-2021) Al-Ameen Engineering College,Erode,Tamilnadu.
        </p>
        <p><FaUserGraduate className='icon'/> &nbsp; (2015-2017) Govt Girls Hr Secondary School,sivagiri,Erode.</p></Col>
        <Col>
        <h3>Experience</h3>
        <p> <MdWork className='icon'/> &nbsp; Cognizant Technology Solutions : 1.5 years experience</p></Col>
     </Row>
    </div>
  )
}

export default MyIntro