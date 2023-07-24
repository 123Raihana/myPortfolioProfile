import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {MdClose, MdMenu} from 'react-icons/md';
import './Header.css';
const Header = () => {
    const [active, setActive] = useState("#home");
    const [showNav, setShowNav] = useState(false);
    const [menu,setMenu] = useState(false);
    return (
        
        <div className='th' >
            {/* <Navbar  className='head' variant="dark">
                <Container>
                    <Navbar.Brand className='text-dark-emphasis' href="#home">Portfolio</Navbar.Brand>
                    <Nav className='ml-auto'>
                        <Nav.Link className='text-dark-emphasis' href="#home">Home</Nav.Link>
                        <Nav.Link className='text-dark-emphasis' href="#MyIntro">MyIntro</Nav.Link>
                        <Nav.Link className='text-dark-emphasis' href="#Services">Services</Nav.Link>
                        <Nav.Link className='text-dark-emphasis' href="#Portfolio">Portfolio</Nav.Link>
                        <Nav.Link className='text-dark-emphasis' href="#Testimonial">Testimonial</Nav.Link>
                        <Nav.Link className='text-dark-emphasis' href="#Blog">Blog</Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}
            <nav>
               
                <div className='logo'>
                <div id='mobile-menu-icon' onClick={()=>{setShowNav(!showNav);setMenu(true)}}
                    role="button"
                    onKeyDown={()=>{setShowNav(!showNav)}}
                    tabIndex={0} >
                    <MdMenu style={{fontSize:"30px"}} 
                    // className={menu?"menuHide":"menuShow"}
                    />
                </div>
                <ul className={!showNav ? 'hide-item':'navItems'  }>
                    <div className='closeNavIcon'
                    onClick={()=>{setShowNav(!showNav);setMenu(false)}}
                    role="button"
                    onKeyDown={()=>setShowNav(!showNav)}
                    tabIndex={0} >
                        <MdClose style={{fontSize:"30px",color:'black'}}/>
                    </div>
                    <li onClick={()=>setShowNav(!showNav)}
                    role="button"
                    onKeyDown={()=>setShowNav(!showNav)}
                    tabIndex={0}><a href='#Home' onClick={()=>{setActive("#Home")}} className={active==="#Home"?"activate":" "}>Home</a></li>
                    <li onClick={()=>setShowNav(!showNav)}
                    role="button"
                    onKeyDown={()=>setShowNav(!showNav)}
                    tabIndex={0}><a href='#MyIntro'  onClick={()=>{setActive("#MyIntro")}} className={active==="#MyIntro"?"activate":" "} >MyIntro</a></li>
                    <li onClick={()=>setShowNav(!showNav)}
                    role="button"
                    onKeyDown={()=>setShowNav(!showNav)}
                    tabIndex={0}><a href='#Services'  onClick={()=>{setActive("#Services")}} className={active==="#Services"?"activate":" "}>Services</a></li>
                    <li onClick={()=>setShowNav(!showNav)}
                    role="button"
                    onKeyDown={()=>setShowNav(!showNav)}
                    tabIndex={0}><a href='#Portfolio'  onClick={()=>{setActive("#Portfolio")}} className={active==="#Portfolio"?"activate":" "}>Portfolio</a></li>
                    <li onClick={()=>setShowNav(!showNav)}
                    role="button"
                    onKeyDown={()=>setShowNav(!showNav)}
                    tabIndex={0}><a href='#Testimonial' onClick={()=>{setActive("#Testimonial")}} className={active==="#Testimonial"?"activate":" "}>Testimonial</a></li>
                    <li onClick={()=>setShowNav(!showNav)}
                    role="button"
                    onKeyDown={()=>setShowNav(!showNav)}
                    tabIndex={0}><a href='#Blog'  onClick={()=>{setActive("#Blog")}} className={active==="#Blog"?"activate":" "}>Contact</a></li>
                 
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header