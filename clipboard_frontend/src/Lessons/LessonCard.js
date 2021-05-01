import React from 'react'



export default function LessonCard(props){
    return(
       
        <div className="lesson-card" id={props.key}>
            <section>
            <h5>
                {props.lesson.title}
            </h5>
                    <b>Start Time </b> {props.lesson.start}<br></br>
                    <b>End Time </b> {props.lesson.end}
            </section>
        </div>

    )
}