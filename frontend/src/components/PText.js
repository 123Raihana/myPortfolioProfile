import React from 'react'
import './PText.css'


export default function PText({children}) {
  return (
    <div className='style'>
        <p>{children}</p>
    </div>
  )
}
