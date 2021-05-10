import React from 'react'
import LessonCard from './LessonCard.js'
import './Lesson.css'


class LessonList extends React.Component{
 
        render (){
                const lessons = this.props.lessons.map(lesson => <LessonCard key={lesson.id} lesson={lesson} />)

        return(
            <ul>
                <center>
                    {lessons}
                </center>
                
            </ul>

        )  
    }
}




export default LessonList

