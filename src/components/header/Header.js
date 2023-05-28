import React from 'react'
import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import './Header.css';
import Dropdown from './Dropdown';
import { ClickAwayListener } from '@mui/base';
import { IoClose } from 'react-icons/io5';
import { BiRocket } from 'react-icons/bi'

function Header({ handlers }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => { setShowMenu(false) }}>
      <header className='header'>
        <div className='header-container'>
          <BiRocket onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })} className='logo' />
          <div onClick={() => { setShowMenu(!showMenu) }} className='toggle'>
            {(!showMenu) ? <RxHamburgerMenu className='burger-icon' /> : <IoClose className='burger-icon' />}
          </div>
          <ul className='navigation-ul'>
            <li onClick={handlers[0]}>About Me</li>
            <li onClick={handlers[1]}>Projects</li>
            <li onClick={handlers[2]}>Honours</li>
            <li onClick={handlers[3]}>Contact</li>
          </ul>
        </div>
        <Dropdown handlers={handlers} showMenu={showMenu} setShowMenu={setShowMenu} />
      </header>
    </ClickAwayListener>
  )
}

export default Header;