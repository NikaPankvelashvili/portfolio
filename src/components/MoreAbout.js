import React, { forwardRef } from 'react'
import MoreAboutCard from './MoreAboutCard'
import { educationData, experienceData, honoursData } from './ProjectsData'

function MoreAbout({ }, ref) {
  return (
    <div className='more-about-container' ref={ref} style={{ scrollMargin: "68px" }}>
      <div className='more-about-container-left hidden-left' style={{ marginRight: "20px" }}>
        <MoreAboutCard style={{ marginTop: 0 }} title={"Honours"} data={honoursData} />
      </div>
      <div className='more-about-container-right hidden-right'>
        <MoreAboutCard title={"Educaction"} data={educationData} />
        <MoreAboutCard title={"Experience"} data={experienceData} />
      </div>
    </div>
  )
}

export default forwardRef(MoreAbout);