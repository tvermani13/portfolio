import {React, useState} from 'react';
import TimelineItem from './TimelineItem';
import './Timeline.css'


const Timeline = ({ data }) =>
    <section id="Timeline"> 
    <h2>Timeline</h2>
    {data.length > 0 && (

    <div className="timeline-container">
        {data.map((item, idx) => (
            <TimelineItem data={item} key={idx} />
        ))}

    </div>
    )}
    </section>
    

export default Timeline;