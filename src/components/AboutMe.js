import React, { forwardRef } from 'react'
import "./AboutMe.css"
import LineMaxWidth from './header/LineMaxWidth';

// eslint-disable-next-line
function AboutMe({ }, ref) {
  return (
    <div className='fullscreen-text' style={{ scrollMargin: "68px" }} ref={ref}>
      <div className='title'>
        <p className='introduction'>Hello, I am <span className='highlight'>Nikoloz Pankvelashvili</span> from <span className='highlight'>Tbilisi, Georgia</span></p>
        <LineMaxWidth />
        <p className='introContent'>I am Nikoloz Pankvelashvili from Tbilisi, Georgia. I graduated from Vladimir Komarov School
          of Physics and Mathematics N199. I received a gold medal from the Ministry of Education of Georgia as one of the best
          students. During school, I've participated in several olympiads in Physics and Mathematics. I was a backup member of
          Georgia's Physics team for IPHO back in 2019. Because of my achievements, the Ministry of Education sent me to
          CERN, Geneva, Switzerland. Currently, I am a Computer Science student at Kutaisi International University. I am on the
          Dean's List because of my high GPA. Over the past two years, I've been a student teaching assistant in Fundamentals of
          Programming, Computer Architecture, and Algorithms and Data Structures.
        </p>
      </div>
    </div>
  )
}

export default forwardRef(AboutMe);