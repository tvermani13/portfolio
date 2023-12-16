import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const dataWorkExperience = [
  {
    title: "Carrier Global",
    description: "Internet of Things: SWE and Architecture"
  },
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
    title: "Machine Learning",
    description: "Inductive, analytical, numerical, and theoretical approaches to ML."
  },
  {
    title: "Data Structures and Algorithms",
    description: "Course on Binary Trees, HashMaps, Graph Algorithms, etc. "
  },
  {
    title: "Systems and Networking",
    description: "System structure and networking, abstractions in OS; usage of computing resources."
  }, 
  {
    title: "Objects and Design",
    description: "Full-stack web development course; AGILE, SOLID, GRASP"
  },
  {
    title: "Design and Analysis of Algorithms",
    description: "Design and analysis of efficient algorithms for computational problems."
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