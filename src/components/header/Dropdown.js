import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaProjectDiagram } from 'react-icons/fa'
import { BsMegaphone } from 'react-icons/bs'
import { BiMedal } from 'react-icons/bi'
import './Dropdown.css'
import LineMaxWidth from './LineMaxWidth'

export default function Dropdown({ showMenu, handlers, setShowMenu }) {
  return (
    showMenu ?
      <nav>
        <ul>
          <LineMaxWidth />
          <li className='dropdown-li' onClick={() => { handlers[0](); setShowMenu(false) }}><CgProfile className='icon' /><span className='dropdown-span'>About Me</span></li>
          <LineMaxWidth />
          <li className='dropdown-li' onClick={() => { handlers[1](); setShowMenu(false) }}><FaProjectDiagram className='icon' /><span className='dropdown-span'>Projects</span></li>
          <LineMaxWidth />
          <li className='dropdown-li' onClick={() => { handlers[2](); setShowMenu(false) }}><BiMedal className='icon' /><span className='dropdown-span'>Honours And Education</span></li>
          <LineMaxWidth />
          <li className='dropdown-li' onClick={() => { handlers[3](); setShowMenu(false) }}><BsMegaphone className='icon' /><span className='dropdown-span'>Contact</span>  </li>
          <LineMaxWidth />
        </ul>
      </nav>
      : null
  )
}
