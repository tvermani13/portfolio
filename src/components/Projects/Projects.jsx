import React from 'react'
import './Projects.css'
import IMG1 from '../../assets/ACT-logo.jpg'
import IMG2 from '../../assets/CampusDiscovery.png'
import IMG3 from '../../assets/CSV.png'
import IMG4 from '../../assets/Frintz-logo.png'
import IMG5 from '../../assets/WebScraper.png'
import IMG6 from '../../assets/React.png'


// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";


// import { Pagination } from "swiper";

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'ACT Driving Simulator',
    github: 'https://github.com/tvermani13/VIP-Projects',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Campus Discovery',
    github: 'https://github.gatech.edu/Team-31-TUHAJS/Campus-Discovery',
    demo: 'https://github.com'
  }, 
  {
    id: 3,
    image: IMG3,
    title: 'CSV Data Processing',
    github: 'https://github.com/tvermani13/CSV-Data-Cleanup/tree/main',
    demo: 'https://github.com'
  }, 
  {
    id: 4,
    image: IMG4,
    title: 'Frintz',
    github: 'https://github.com',
    demo: 'https://frintz.com/'
  }, 
  {
    id: 5,
    image: IMG5,
    title: 'Webscraper (incomplete)',
    github: 'https://github.com/tvermani13/Web-Scraper',
    demo: 'https://github.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'React Portfolio (this site)',
    github: 'https://github.com/tvermani13/professional-portfolio',
    demo: 'https://tvermani13.github.io/professional-portfolio/'
  }  
]

const Projects = () => {
  return (
    <section id='Projects'>
      <h5>My Recent Work (Swipe)</h5>
      <h2>Projects</h2>
      <div className='portfolio__container'>
        {/* <Swiper className="container project__container" pagination={true} modules={[Pagination]} > */}
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              // <SwiperSlide key={id} className="container portfolio__item">
              <article className="container portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3> {title} </h3>
                <div className="portfolio__item-cta">
                  <a href= {github} className="btn" rel="noreferrer" target='_blank'>Github</a> {/* Insert links to specific repos on github*/}
                  <a href= {demo} className="btn btn-primary" rel="noreferrer" target='_blank'>Live Demo</a> {/* Insert live demo link if applicable */}
                </div>
              </article>
            // </SwiperSlide>
            )
          })
        }

      {/* </Swiper> */}
      </div>
    </section>
  )
}

export default Projects

/* 

Projects: 

Frintz (no github)
CSV to spreadsheet (github)
2340 Campus Discover (github)
VIP (github)
Web-scraper  WORK ON THIS WITH OR WITHOUT HENOK

FIGURE OUT HOW TO FIX ALIGNMENTS WITH TEXT AND IMAGES - SAME SIZE IMAGES???

*/