import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import './Header.css'

const HeaderSocials = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/tejasvermani/" rel="noreferrer" target="_blank"><BsLinkedin size={42}/></a>
        <a href="https://www.github.com/tvermani13" rel="noreferrer" target="_blank"><BsGithub size={42}/></a>
    </div>
  )
}

export default HeaderSocials