import React from 'react'
import './Button.css'

export default function Button({btnLink='test',btnText='Test',outline=false}) {
  return (
    <div className='Button' outline={outline}>
        <a href={btnLink} className='button'>
            {btnText}</a></div>
  )
}
