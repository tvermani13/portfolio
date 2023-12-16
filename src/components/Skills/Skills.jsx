import React from 'react'
import './Skills1.css'

import {FaJava, FaPython, FaReact, FaNode} from 'react-icons/fa'
// import {GrOracle} from 'react-icons/gr'
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
    icon: <FaPython />,
    skill: "Python",
    level: "90"
  }, 
  {
      id: "2",
      icon: <FaJava />,
      skill: "Java",
      level: "80"
  },
  {
      id: "7",
      icon: <FaNode />,
      skill: "Node.js",
      level: "50"
  },
  // {
  //     id: "3",
  //     icon: <GrOracle />,
  //     skill: "JSP",
  //     level: "60"
  // },
  {
      id: "4",
      icon: <FaReact />,
      skill: "React",
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
      level: "40"
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
      skill: "Bonds",
      level: "70"
  },
  {
      id: "3",
      icon: <FaJava />,
      skill: "ETFs",
      level: "90"
  },
  {
      id: "4",
      icon: <FaJava />,
      skill: "Options",
      level: "75"
  }
]

const cloudTechnologies = [
  {
    id: '1',
    icon: <FaJava />,
    skill: 'AWS',
    level: '70',
  },
  {
    id: '2',
    icon: <FaJava />,
    skill: 'Azure',
    level: '20',
  },
  {
    id: '3',
    icon: <FaJava />,
    skill: 'Google',
    level: '20',
  },
];

const Skills = () => {
  return (
    <section id="Skills">
      <h2>Skills</h2>

      <div className="container skills__container">
        <div className="skills__section">
          <h3 className="title__text">Programming Languages</h3>
          {languages.map(({ id, icon, skill, level }) => {
            return (
              <div className="skill-box">
                <span className="title__text"> {skill} </span>
                <Progress done={level} />
              </div>
            );
          })}
        </div>

        <div className="skills__section">
          <h3 className="title__text">Financial Instruments</h3>
          {financialSkills.map(({ skill, level }) => {
            return (
              <div className="skill-box">
                <span className="title__text"> {skill} </span>
                <Progress done={level} />
              </div>
            );
          })}
        </div>

        <div className="skills__section">
          <h3 className="title__text">Cloud</h3>
          {cloudTechnologies.map(({ skill, level }) => {
            return (
              <div className="skill-box">
                <span className="title__text"> {skill} </span>
                <Progress done={level} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
  // return (
  //   <section id="Skills">
  //     <h2>Skills</h2>

  //     <div className="container skills__container">

  //     <div className="skills__section">
  //       <h3 className='title__text'>Programming Languages</h3>
  //       {
  //       languages.map(({id, icon, skill, level}) => {
  //         return(
  //           <div className="skill-box">
  //             <span className="title__text"> {skill} </span>
  //             <Progress done={level} />
  //           </div>
  //         )
  //       })
  //     }
  //     </div>

  //   <div className="skills__section">
  //     <h3 className='title__text'>Financial Instruments</h3>
  //     {
  //       financialSkills.map(({skill, level}) => {
  //         return(
  //           <div className="skill-box">
  //             <span className="title__text"> {skill} </span>
  //             <Progress done={level} />
  //           </div>
  //         )
  //       })
  //     }
  //   </div>

  //   <div className="skills__section">
  //       <h3 className="title__text">Cloud Technologies</h3>
  //       {cloudTechnologies.map(({ skill, level }) => {
  //         return (
  //           <div className="skill-box">
  //             <span className="title__text"> {skill} </span>
  //             <Progress done={level} />
  //           </div>
  //         );
  //       })}
  //     </div>

  //   </div>
  //   </section>
  // )
}

export default Skills