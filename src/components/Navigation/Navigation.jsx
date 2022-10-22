import {React, useState} from 'react'
import './Navigation.css'
import {AiOutlineHome, AiOutlineUser, AiFillProject} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {GiSkills} from 'react-icons/gi'
import {RiContactsFill} from 'react-icons/ri'


const Navigation = () => {
  const [activeNav, setActiveNav] = useState('#')
  return ( 
    <nav>
      <a href="#Home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#About" onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#Skills" onClick={() => setActiveNav('#Skills')} className={activeNav === '#Skills' ? 'active' : ''}><GiSkills/></a>
      <a href="#Experience" onClick={() => setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'active' : ''}><BiBook/></a>
      <a href="#Projects" onClick={() => setActiveNav('#Projects')} className={activeNav === '#Projects' ? 'active' : ''}><AiFillProject/></a>
      <a href="#Contacts" onClick={() => setActiveNav('#Contacts')} className={activeNav === '#Contacts' ? 'active' : ''}><RiContactsFill/></a>
    </nav>
  ) 
}

export default Navigation