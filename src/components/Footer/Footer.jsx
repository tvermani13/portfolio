import React from 'react'
import './Footer.css'

import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <a href="#Home" className="footer__logo">Tejas Vermani</a>

      <ul className='permalinks'>
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Contacts">Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/tejas.vermani/" target="_blank" rel="noreferrer"> <AiFillFacebook /> </a>
        <a href="https://www.instagram.com/tvermani13/" target="_blank" rel="noreferrer"> <AiFillInstagram/></a>
        <a href="https://twitter.com/tvermani13" target="_blank" rel="noreferrer"> <AiFillTwitterCircle /> </a>
      </div>

      <div className="footer__copyright">
        <small>! &copy; Tejas Vermani. No rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer