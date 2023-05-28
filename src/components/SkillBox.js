import React from 'react'
import { motion } from 'framer-motion'
import LineMaxWidth from './header/LineMaxWidth';
import { useInView } from 'react-intersection-observer';

function SkillBox({ name, percent, delay }) {
  const [testRef, inView] = useInView();

  return (
    <div className="skill-box">
      <span style={{ fontSize: "18px" }} className='skill-title'>{name}</span>
      <LineMaxWidth />
    </div >
  )
}

export default SkillBox;