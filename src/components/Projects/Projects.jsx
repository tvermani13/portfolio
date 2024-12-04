import React from 'react'
import './Projects.css'
import IMG0 from '../../assets/coachingconsulting.png'
import IMG1 from '../../assets/credit.jpg'
import IMG2 from '../../assets/ACT-logo.jpg'
import IMG3 from '../../assets/CampusDiscovery.png'
import IMG4 from '../../assets/Frintz-logo.png'
import IMG5 from '../../assets/React.png'
import IMG6 from '../../assets/Bank.png'
import IMG7 from '../../assets/DB.png'

const Projects = () => {
  const projects = [
    {
      id: 0,
      image: IMG1,
      title: 'Predicting Credit Risk (in progress)',
      github: 'https://github.com/Predicting-Credit-Risk/predicting-credit-risk',
      hasDemo: true,
      demo: 'https://predicting-credit-risk-jysg5sq5rq6dbfuznc5cqz.streamlit.app'
    },
    {
      id: 3,
      image: IMG0,
      title: 'Coaching and Consulting (in progress)',
      github: 'https://github.com/tvermani13/coaching-consulting',
      hasDemo: true,
      demo: 'https://coaching-consulting.vercel.app'
    },
    {
      id: 6,
      image: IMG6,
      title: 'Neural Net Income',
      github: "https://github.com/tvermani13/liquidity-optimizer",
      hasDemo: true,
      demo: "https://liquidity-optimizer.vercel.app"
    },
    {
      id: 7,
      image: IMG7,
      title: 'Databases Fullstack',
      github: "https://github.com/tvermani13/databases-fullstack",
      hasDemo: false,
      // demo: "https://databases-fullstack.vercel.app"
    },
    {
      id: 2,
      image: IMG3,
      title: 'Campus Discovery',
      github: 'https://github.gatech.edu/Team-31-TUHAJS/Campus-Discovery',
      hasDemo: false,
      // demo: 'https://github.com' ?? DEPLOY?
    }, 
    {
      id: 5,
      image: IMG5,
      title: 'React Portfolio (this site)',
      github: 'https://github.com/tvermani13/portfolio',
      hasDemo: true,
      demo: 'https://tvermani13.github.io/portfolio/'
    },
    {
      id: 1,
      image: IMG2,
      title: 'ACT Driving Simulator',
      github: 'https://github.com/tvermani13/VIP-Projects',
      hasDemo: false,
      // demo: 'https://github.com'
    }
    
    
  ];

  return (
    <section id='Projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className='portfolio__container'>
        {projects.map(({id, image, title, github, hasDemo, demo}) => {
            return(
              <article className="container portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3> {title} </h3>
                <div className="portfolio__item-cta">
                  <a href= {github} className="btn" rel="noreferrer" target='_blank'>Github</a>
                  {hasDemo && (
                    <a href={demo} className="btn" target="_blank" rel="noopener noreferrer">
                      Demo
                    </a>
                  )}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects