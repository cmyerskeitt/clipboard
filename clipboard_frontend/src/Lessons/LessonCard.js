import React from 'react'



export default function LessonCard(props){
    return(
        <div id={props.lessons.key}>
            <h3>
                <u>{props.lesson.title}</u>
            </h3>
            <ul>
                <li>
                    <b>Start Time </b> {props.lesson.start}
                </li>
            </ul>
            <ul>
                <li>
                    <b>End Time </b> {props.lesson.end}
                </li>
            </ul>
        </div>

    )
}