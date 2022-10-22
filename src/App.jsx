import React from 'react'
import Header from './components/Header/Header.jsx'
import Navigation from './components/Navigation/Navigation.jsx'
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx'
import Experience from './components/Experience/Experience.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contacts from './components/Contacts/Contacts.jsx'
import Footer from './components/Footer/Footer.jsx'


const App = () => {
    return (
        <>
            <Header />
            <Navigation />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contacts />
            <Footer />
        </>
    )
}

export default App