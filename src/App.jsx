import React from 'react'

import Header from './components/Header/Header.jsx'
import Navigation from './components/Navigation/Navigation.jsx'
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx'
import Experience from './components/Experience/Experience.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contacts from './components/Contacts/Contacts.jsx'
import Footer from './components/Footer/Footer.jsx'
import Timeline from './components/Timeline/Timeline.jsx'
import timelineData from './data/timelineData'

const App = () => {
    return (
        <>
            <Header />
            <Navigation />
            <About />
            <Experience />
            <Timeline data={timelineData}/>
            <Skills />            
            <Projects />
            <Contacts />
            <Footer />
        </>
    )
}

export default App