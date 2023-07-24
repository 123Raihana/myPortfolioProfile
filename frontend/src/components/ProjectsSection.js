import React from 'react'
import { Link } from 'react-router-dom';
import raihana from '../components/images/raihana .A.jpg';
export default function ProjectsSection() {
  return (
    <div>
        <Link to='/projects' className='projectItem_img'>
            <img src={raihana} alt='project_img'></img>
        </Link>
        <div className='projectItem_info'>
            <Link to="#">
                <h3 className='projectItem_title'>Project1</h3>
            </Link>
            <p className='projectItem_title'>lorem afijga</p>
        </div>
    </div>
  )
}
