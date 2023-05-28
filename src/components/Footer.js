import React from 'react'
import './Footer.css'
import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from 'react-icons/bs'


function Footer() {
  return (
    <footer className='footer-wrapper'>
      <div className='footer-icon-wrapper'>
        <a href='https://www.facebook.com/Nikapanqvela1/' rel="noopener noreferrer" target={"_blank"}>
          <BsFacebook className='footer-icon' />
        </a>
        <a href='https://www.instagram.com/nikapanqvela/' rel="noopener noreferrer" target={"_blank"}>
          <BsInstagram className='footer-icon' />
        </a>
        <a href='https://github.com/NikaPankvelashvili' rel="noopener noreferrer" target={"_blank"}>
          <BsGithub className='footer-icon' />
        </a>
        <a href='https://www.linkedin.com/in/nika-pankvelashvili-6b8b85248/' rel="noopener noreferrer" target={"_blank"}>
          <BsLinkedin className='footer-icon' />
        </a>
      </div>
      <p className='footer-rights'>All rights reserved © 2023</p>
    </footer>
  )
}

export default Footer