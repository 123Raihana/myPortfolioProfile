import React from 'react'
import { MdDesktopMac } from 'react-icons/md';
import PText from './PText';
import './ServicesSectionItems.css';
export default function ServicesSectionItems({
    icon =   <MdDesktopMac/>,
    title = 'Web Design',
    desc = " afhfoagnjj",
}) {
  return (
    <div>
        <div className='servicesItem_icon'>
          {icon}
            <div className='servicesItem_title'>{title}</div>
            <PText>{desc}
            </PText>
        </div>
    </div>
  )
}
