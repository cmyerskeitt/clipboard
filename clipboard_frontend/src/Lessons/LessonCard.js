import React from 'react'



export default function LessonCard(props){
    return(
        <div className="lesson-card" >
            <section>
            <h5>
                {props.lesson[0]}
            </h5>
                    <b>Start Time </b> {props.lesson[1]}<br></br>
                    <b>End Time </b> {props.lesson[2]}
            </section>
        </div>

    )
}