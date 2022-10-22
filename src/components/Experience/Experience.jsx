import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const dataWorkExperience = [
  {
    title: "Wakefern Food Corp",
    description: "SWE Internship: JSP, Java backend development"
  },
  {
    title: "Netsmartz",
    description: "SWE Internship: swift, iOS mobile development"
  },
  {
    title: "Strictly Accounting, CPA",
    description: "Accounting internship: tax returns and appeals"
  }
]

const dataReleventCoursework = [
  {
    title: "Intro to Robotics and Perception",
    description: "Course on AI, ML, python programming, simulation of robots, etc."
  },
  {
    title: "Data Structures and Algorithms",
    description: "Course on Binary Trees, HashMaps, Graph Algorithms, etc. "
  },
  {
    title: "Computer Programming and Organization",
    description: "Course on Circuits, Assembly, C programming"
  }
]

const Experience = () => {
  return (
    <section id='Experience'>
      <h2> My Experience </h2>

      <div className="container experience__container">

        <div className = "work__experience">
          <h3>Work Experience</h3>
          <div className="experience__content">
          {
          dataWorkExperience.map(({title, description}) => {
            return(
              <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>{title}</h4>
                <small className="text-light">{description}</small>
              </div>
            </article>
            )
          })
        } 
        </div>      
        </div>

        <div className = "work__experience">
          <h3>Relevant Coursework</h3>
          <div className="experience__content">
            {
              dataReleventCoursework.map(({title, description}) => {
                return(
                  <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon"/>
                  <div>
                    <h4>{title}</h4>
                    <small className="text-light">{description}</small>
                  </div>
                </article>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience