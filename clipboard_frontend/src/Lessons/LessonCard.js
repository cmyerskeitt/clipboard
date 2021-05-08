import React from 'react'



const LessonCard = props => {
    return(
        // debugger 
        <div className="lesson-card" >
            <h5>
                {props.lesson.title}
            </h5>
            Start Time: {props.lesson.start.toString()}<br></br>
            <br></br>
            End Time: {props.lesson.end.toString()}
        </div>

    )
}
export default LessonCard