import React from 'react'



const LessonCard = props => {

    return(
        <div className="lesson-card" >
            <h5>
                {props.lesson.title}
            </h5>
            Start Time: {props.lesson.start.toString()}<br></br>
            <br></br>
            End Time: {props.lesson.end.toString()}
            {/* <button onClick={() => this.handleOnClick()}>X</button> */}
        </div>

    )
}
export default LessonCard


