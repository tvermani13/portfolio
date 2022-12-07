import React from 'react'
import NewResume from '../../assets/Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={NewResume} download className='btn'>Download resume</a>
        <a href="#Contacts" className='btn-primary'>Contact me</a>
    </div>
  )
}

export default CTA