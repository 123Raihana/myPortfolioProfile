import React from "react";
import "./Home.css";
import { SocialIcon } from "react-social-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import FileDownload from "js-file-download";
import Nav from "react-bootstrap/Nav";
import HeroImg from "../components/images/HeroImg.png";
import PText from "./PText";
import Button from "./Button";
import Typed from "react-typed";

// const [outline,setButton] = useState(false);

// function buttonFn () =>{

// }
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/fetchData").then((response) => {
      setData(response.data);
    });
  }, []);
  console.log(data);
  //  const download=(e)=>{
  //   e.preventDefault()
  //   axios({
  //     url:"http://localhost:4000/fetchData",
  //     method:"GET",
  //     responseType:"blob"
  //   }).then((res)=>{
  //     FileDownload(res.data,"Downloaded.pdf")
  //   })
  //  }

  return (
    <>
      <div id="Home">
        <div className="container">
          {/* <Row>
      <Col md={8} xs={12} sm={12}> */}

          <div id="content">
            <p>Hi, I am</p>
            {/* {data.map((item) => (
      <>
       <><img src={item.img}/></>
      <>
      <p>{item.name} </p>
      <p>{item.designation}</p>
      <p>{item.intro}</p>
      </>
     
      </>
    ))
    } */}
            <p
              data-aos="fade-down"
              data-aos-duration="3000"
              style={{ fontSize: "40px", color: "red" }}
            >
              Raihana A
            </p>
            <h4>
              <Typed
                strings={["Web Developer", "Frontend Developer"]}
                typeSpeed={140}
                backSpeed={100}
                loop={true}
              ></Typed>
            </h4>

            <p>
              Frontend web developer with over 3 years of experience in creating
              dynamic and engaging web experiences. <br />I specialize in
              designing intuitive user interfaces and developing responsive
              websites.
            </p>
            <div className="button">
              <button id="btn1">
                <a href="./Raihana Resume.pdf" id="download" download>
                  DownloadCV
                </a>
              </button>

              <Nav.Link href="#Blog">
                <button id="btn2" className="button">
                  Contact Me
                </button>
              </Nav.Link>
            </div>
          </div>

          {/* <div id='exp'>
      <p>1 yr Job experience</p>
      <p>2 project experience</p>
      <p>Support online 24/7</p>
    </div> */}
          <div id="icons">
            <ol>
              <SocialIcon url="https://linkedin.com/in/raihana-a-179aa924a" />
            </ol>
            <ol>
              <SocialIcon url="https://github.com/123Raihana" />
            </ol>
            <ol>
              <SocialIcon url="https://whatsapp.com/9361572102" />
            </ol>
            <ol>
              <SocialIcon url="https://web.telegram.org/z/#1679652113" />
            </ol>
          </div>
        </div>

        {/* </Col> 
    <Col md={4} xs={12} sm={12}>
       <div className='hero_img'>
        <img src={HeroImg} alt=''/>
      </div>
      <div id='design'></div>
      </Col> 
  </Row>*/}
        {/* <div className='container'>
      <h1 className='hero_heading'>
        <span>Hello, This is </span>
        <span>Raihana A</span>
      </h1>
     
      <div className='hero_info'>
        <PText>I am working as a freelance web designer and developer for 1.5 years.
          I love to design and make new web experiences for the people.
        </PText>
        <Button btnLink='#Portfolio' btnText='see my works'  />
      </div>
    </div> */}
      </div>
    </>
  );
};

export default Home;
