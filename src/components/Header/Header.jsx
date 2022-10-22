import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/Headshot.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <section id="Home">
      <header> 
      <div className="container header__container">
        <h5>Meet:</h5>
        <h1>Tejas Vermani</h1>
        <h5 className='text-light'>Georgia Tech Computer Science Student</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href="#Contacts" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
    </section>
  )
}

export default Header