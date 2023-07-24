import React from 'react'
import SectionTitle from './SectionTitle';
import ServicesSectionItems from './ServicesSectionItems';
import './Services.css';
import { MdDesktopMac,MdCode, MdPhonelinkSetup } from 'react-icons/md';
const Services = () => {
  return (
    <div id="Services" className='container' >
      <SectionTitle heading="Services" subheading="What I will do for you"/>
      <div className='services_allItems' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
<ServicesSectionItems 
  icon={<MdDesktopMac/>}
  title="Web Des"
  desc="I do ui/ux design for the
  website that helps website to get a unique look."
/>
<ServicesSectionItems
icon= {<MdCode/>}
title="Web Dev"
desc="I also develop the websites.
I create high performance website with blazing fast speed."/>
<ServicesSectionItems 
icon = {<MdPhonelinkSetup/>}
title="App Dev"
desc="I develop mobile application. I create mobile app with eye catching ui."/>
      </div>
    </div>
  )
}

export default Services;