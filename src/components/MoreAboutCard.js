import React from 'react'
import LineMaxWidth from './header/LineMaxWidth'
import './MoreAboutCard.css'

function MoreAboutCard({ title, data, style }) {
  return (
    <div style={style} className='more-about-card-wrapper'>
      <h3 className='more-about-card-title'>{title}</h3>
      <ul>
        <LineMaxWidth />
        {data.map((item) => {
          return (
            <li className='more-about-card-text' key={item.id}>
              {item.text + ": "}
              <span className='more-about-card-subtext'>
                {item.subtext}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MoreAboutCard