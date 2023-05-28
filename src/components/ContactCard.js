import React from 'react'
import "./ContactCard.css"
import LineMaxWidth from './header/LineMaxWidth'

function ContactCard({ photo, headline, subtext, headlineStyle }) {
  return (
    <div className='contact-card-wrapper'>
      <div className='props-image'>
        {photo}
      </div>
      <h2 style={headlineStyle}>{headline}</h2>
      <LineMaxWidth />
      <h3 className='fullscreen-contact-card-subtext' style={{ margin: "5px 0", textAlign: "center" }}>{subtext}</h3>
    </div>
  )
}

export default ContactCard;