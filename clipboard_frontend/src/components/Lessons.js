import React from 'react'

const Lessons = (props) => {
    console.log(props)
    return (
        <div>
            {props.lessons.map(lesson=> <li key={lesson.id}>{lesson.title}</li>)}
        </div>
        
    )
   
}
export default Lessons 