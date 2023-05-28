import React, { forwardRef } from 'react'
import ContactCard from './ContactCard'
import { HiDevicePhoneMobile } from 'react-icons/hi2'
import { FiMail } from 'react-icons/fi'
import { BsBuilding } from 'react-icons/bs'

function Contact({ }, ref) {
  return (
    <div className='contact-wrapper' ref={ref} style={{ scrollMargin: "68px" }}>
      <div className='contact-title-wrapper'>
        <h2 className='contact-title'>Contact</h2>
      </div>
      <div className='fullscreen-contact-card-container' style={{ backgroundColor: "#FB2056", marginTop: "-4px", padding: "40px" }}>
        <ContactCard
          photo={<HiDevicePhoneMobile style={{ height: "50px", width: "50px", color: "#FB2056" }} />}
          headline="+995 577 00 85 52"
          subtext="Monday - Friday from 10am - 8pm"
        />
        <ContactCard
          photo={<FiMail style={{ height: "50px", width: "50px", color: "#FB2056" }} />}
          headline="pankvelashvili.nikoloz@kiu.edu.ge"
          subtext="Contact Me Every Time!"
          headlineStyle={{ fontSize: "17.5px" }}
        />
        <ContactCard
          photo={<BsBuilding style={{ height: "50px", width: "50px", color: "#FB2056" }} />}
          headline="Tbilisi"
          subtext="Georgia"
        />
      </div>
    </div>
  )
}

export default forwardRef(Contact);