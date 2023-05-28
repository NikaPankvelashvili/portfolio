import React from 'react'
import "./PhotoWithText.css";
import LineMaxWidth from './header/LineMaxWidth'

function PhotoWithText({ image, headline, subtext, style }) {
  return (
    <>
      {/* <div className='parallax-wrapper-outer'>
        <div className='parallax-wrapper'>
          <div className='parallax-section'>
            <div className='parallax-bg' style={{ backgroundImage: `url(${image})` }}></div>
            <h2>{headline}{<LineMaxWidth />}{subtext}</h2>
          </div>
        </div>
      </div>
      <div className='parallax-wrapper-outer'>
        <div className='parallax-wrapper'>
          <div className='parallax-section'>
            <div className='parallax-bg' style={{ backgroundImage: `url(${image})` }}></div>
            <h2>{headline}{<LineMaxWidth />}{subtext}</h2>
          </div>
        </div>
      </div> */}
      <div className='image-bg' style={{ backgroundImage: `url(${image})` }}>
        <div className='photoText'>
          <h1>{headline}</h1>
          <div style={{ padding: "0 20%" }}>
            <LineMaxWidth />
          </div>
          <h2>{subtext}</h2>
        </div>

      </div>
      <div className='photo-wrapper'>
        <img className='photo' style={style} src={image} alt={image} />
        <div className='photoText'>
          <h1>{headline}</h1>
          <div style={{ padding: "0 20%" }}>
            <LineMaxWidth />
          </div>
          <h2>{subtext}</h2>
        </div>
      </div>
    </>
  )
}

export default PhotoWithText