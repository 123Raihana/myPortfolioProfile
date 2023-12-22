import { formToJSON } from 'axios'
import React, { useState } from 'react'
import SectionTitle from './SectionTitle';
import PText from './PText';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './Testimonial.css';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import Testimonials from '../datas/testimonial.js';
const Testimonial = () => {
  const [activeIndex,setActiveIndex] = useState(0);
  const activeSlide = Testimonials[activeIndex];
  function handleNext() {
    if(activeIndex >= Testimonials.length - 1){
      setActiveIndex(0);
    } else{
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  }
  function handlePrev() {
    if(activeIndex <= 0){
      setActiveIndex( Testimonials.length - 1);
    } else{
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  }
  return (
    <div id="Testimonial">
      <div className='container'>
        <SectionTitle 
        heading='Testimonials' 
        subheading='see what our clients say about us'
        />
        <div className='testimonial_wrapper'>
          <SwitchTransition component={null}>
            <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
              <div className='testimonial_info'>
                <div className='testimonial_desc'>
                  <PText>
                   {activeSlide.desc}
                  </PText>
                </div>
                <h2 className='testimonial_name'>{activeSlide.name}</h2>
                <p className='testimonial_title'>{activeSlide.title},<br/>{activeSlide.org}</p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className='arrows'>
          <div className='prev'
          onClick={handlePrev}
          role="button"
          tabIndex={0}
          onKeyDown={handlePrev}>
            <MdArrowBack/>
          </div>
          <div className='next'
          onClick={handleNext}
          role="button"
          tabIndex={0}
          onKeyDown={handleNext}>
            <MdArrowForward/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial