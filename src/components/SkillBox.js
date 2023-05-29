import React from 'react'
import LineMaxWidth from './header/LineMaxWidth';

function SkillBox({ name, percent, delay }) {

  return (
    <div className="skill-box">
      <span style={{ fontSize: "18px" }} className='skill-title'>{name}</span>
      <LineMaxWidth />
    </div >
  )
}

export default SkillBox;