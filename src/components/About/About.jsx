import React from 'react'
import './About.css'
import ME from '../../assets/Me3.jpeg'
import {FcAbout} from 'react-icons/fc'
import {FiUsers} from 'react-icons/fi'
import {AiFillProject} from 'react-icons/ai'

const About = () => {
  return (
    <section id='About'>
      <h2>About Me:</h2>

      <div className="container about__container">
        <div className="about__me">
           <div className="about__me-image">
            <img src={ME} alt="" />
           </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
               <FiUsers className="about__icon"/>
              <h5>Work Experience</h5>
              <small>3+ years</small>
            </article>

            <article className="about__card">
               <AiFillProject className="about__icon"/>
              <h5> Languages </h5>
              <small> Java, Python, and more</small>
            </article>
            
            <article className="about__card">
               <FcAbout className="about__icon"/>
              <h5> Education </h5>
              <small> Georgia Tech B.S 2021-present </small>
            </article>

          </div>

          <p>
            I am a second-year computer science student at Georgia Institute of Technology
            with threads in Intelligence and Modeling & Simulation
          </p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About