import React from 'react'



export default function LessonCard(props){
    return(
        <div id={props.lesson.id}>
            <h3>
                {props.lesson.title}
            </h3>
                    <b>Start Time </b> {props.lesson.start}<br></br>
                    <b>End Time </b> {props.lesson.end}
        </div>

    )
}