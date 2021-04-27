import React from 'react'

const Days = (props) => {
    console.log(props)
    return (
        <div>
            {props.days.map(day => <li key={day.id}>{day.lessons.title}</li>)}
        </div>
        
    )
   
}
export default Days 