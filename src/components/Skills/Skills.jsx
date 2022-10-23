import React from 'react'
import './Skills.css'

import {FaJava, FaPython, FaReact, } from 'react-icons/fa'
import {GrOracle} from 'react-icons/gr'
import {SiAssemblyscript, SiCplusplus} from 'react-icons/si'

const data = [
  {
      id: "1",
      icon: <FaJava />,
      skill: "Java",
      level: "90"
  },
  {
      id: "2",
      icon: <FaPython />,
      skill: "Python",
      level: "90"
  }, 
  {
      id: "3",
      icon: <GrOracle />,
      skill: "JSP",
      level: "90%"
  },
  {
      id: "4",
      icon: <FaReact />,
      skill: "React JS",
      level: "90%"
  },
  {
      id: "5",
      icon: <SiAssemblyscript />,
      skill: "Assembly",
      level: "90%"
  },
  {
      id: "6",
      icon: <SiCplusplus />,
      skill: "C, C++",
      level: "10%"
  },

  
  {
      id: "11",
      icon: <FaJava />,
      skill: "Stocks",
      level: "95%"
  },
  {
      id: "12",
      icon: <FaJava />,
      skill: "Fixed Income",
      level: "95%"
  },
  {
      id: "13",
      icon: <FaJava />,
      skill: "ETFs/Mutual Funds",
      level: "95%"
  },
  {
      id: "14",
      icon: <FaJava />,
      skill: "Options",
      level: "95%"
  },
  {
      id: "15",
      icon: <FaJava />,
      skill: "Futures/",
      level: "95%"
  }
]

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

const Skills = () => {
  return (
    <section id="Skills">

      <h2>Skills</h2>

      <div className="container skills__container">

      <div className="skills__section">
        <h3 className='title__text'>Programming Languages</h3>

        <div className="skill-box">
          <span className="title">Java</span>
          {/* <div className="skill-bar">
            <span className="skill-per java">
              <span className="tooltip">80%</span>
            </span>
          </div> */}
          <Progress done="80" />
        </div>

        <div className="skill-box">
          <span className="title">Python</span>
          {/* <div className="skill-bar">
            <span className="skill-per python">
              <span className="tooltip">70%</span>
            </span>
          </div> */}
          <Progress done="70" />
        </div>

        <div className="skill-box">
          <span className="title">React JS</span>
          {/* <div className="skill-bar">
            <span className="skill-per react">
              <span className="tooltip">60%</span>
            </span>
          </div> */}
          <Progress done="60" />
        </div>

        <div className="skill-box">
          <span className="title">JSP</span>
          {/* <div className="skill-bar">
            <span className="skill-per jsp">
              <span className="tooltip">70%</span>
            </span>
          </div> */}
          <Progress done="70" />
        </div>

        <div className="skill-box">
          <span className="title">Assembly</span>
          {/* <div className="skill-bar">
            <span className="skill-per assembly">
              <span className="tooltip">40%</span>
            </span>
          </div> */}
          <Progress done="40" />
        </div>

        <div className="skill-box">
          <span className="title">C/C++</span>
          {/* <div className="skill-bar">
            <span className="skill-per c">
              <span className="tooltip">20%</span>
            </span>
          </div> */}
          <Progress done="20" />
        </div>
      </div>

    <div className="skills__section">

      <h3 className='title__text'>Financial Instruments</h3>

      <div className="skill-box">
        <span className="title">Stocks</span>
        {/* <div className="skill-bar">
          <span className="skill-per stocks">
            <span className="tooltip">95%</span>
          </span>
        </div> */}
        <Progress done="95" />
      </div>

      <div className="skill-box">
        <span className="title">Fixed Income</span>
        {/* <div className="skill-bar">
          <span className="skill-per fixed-income">
            <span className="tooltip">70%</span>
          </span>
        </div> */}
        <Progress done="70" />
      </div>

      <div className="skill-box">
        <span className="title">ETFs/Mutual Funds</span>
        {/* <div className="skill-bar">
          <span className="skill-per funds">
            <span className="tooltip">90%</span>
          </span>
        </div> */}
        <Progress done="90" />
      </div>

      <div className="skill-box">
        <span className="title">Options</span>
        {/* <div className="skill-bar">
          <span className="skill-per options">
            <span className="tooltip">75%</span>
          </span>
        </div> */}
        <Progress done="75" />
      </div>

    </div>
    </div>
    </section>
  )
}

export default Skills

    // Programming skills: java, python, c, assembly, reactjs, JSP
    // Investment skills: Stocks, bonds, ETFs, options, spreads, mutual funds, etc. (check resume)