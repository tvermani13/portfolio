import React from 'react'
import './Skills.css'

import {FaJava, FaPython, FaReact, } from 'react-icons/fa'
import {GrOracle} from 'react-icons/gr'
import {SiAssemblyscript, SiCplusplus} from 'react-icons/si'


const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
	)
}



const languages = [
  {
      id: "1",
      icon: <FaJava />,
      skill: "Java",
      level: "80"
  },
  {
      id: "2",
      icon: <FaPython />,
      skill: "Python",
      level: "70"
  }, 
  {
      id: "3",
      icon: <GrOracle />,
      skill: "JSP",
      level: "60"
  },
  {
      id: "4",
      icon: <FaReact />,
      skill: "React JS",
      level: "60"
  },
  {
      id: "5",
      icon: <SiAssemblyscript />,
      skill: "Assembly",
      level: "40"
  },
  {
      id: "6",
      icon: <SiCplusplus />,
      skill: "C, C++",
      level: "20"
  },
]

const financialSkills = [
  {
      id: "1",
      icon: <FaJava />,
      skill: "Stocks",
      level: "95"
  },
  {
      id: "2",
      icon: <FaJava />,
      skill: "Fixed Income",
      level: "70"
  },
  {
      id: "3",
      icon: <FaJava />,
      skill: "ETFs/Mutual Funds",
      level: "90"
  },
  {
      id: "4",
      icon: <FaJava />,
      skill: "Options",
      level: "75"
  }
]


const Skills = () => {
  return (
    <section id="Skills">

      <h2>Skills</h2>

      <div className="container skills__container">

      <div className="skills__section">
        <h3 className='title__text'>Programming Languages</h3>
        {
        languages.map(({id, icon, skill, level}) => {
          return(
            <div className="skill-box">
              <span className="title__text"> {skill} </span>
              <Progress done={level} />
            </div>
          )
        })
      }
      </div>

    <div className="skills__section">

      <h3 className='title__text'>Financial Instruments</h3>
      {
        financialSkills.map(({skill, level}) => {
          return(
            <div className="skill-box">
              <span className="title__text"> {skill} </span>
              <Progress done={level} />
            </div>
          )
        })
      }

    </div>
    </div>
    </section>
  )
}

export default Skills