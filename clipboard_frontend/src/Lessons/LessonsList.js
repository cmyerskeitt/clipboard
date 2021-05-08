import React from 'react'
// import { connect } from 'react-redux'
import LessonCard from './LessonCard.js'
import './Lesson.css'

class LessonList extends React.Component{
 
        render (){

                // const lessons = this.props.lessons.map(lesson => <LessonCard key={lesson.id} title={lesson.title} start={lesson.start} end={lesson.end} />)
                const lessons = this.props.lessons.map(lesson => <LessonCard key={lesson.id} lesson={lesson} />)

                
                

        return(
            <ul>
                <center>
                    {/* {console.log(lessons)} */}
                    {lessons}
                </center>
                
            </ul>

        )  
    }
}

// const mapStateToProps = (state) => {
//     return {
//         lessons: state.lessons
//     }
// }

export default LessonList

// const lessons = this.props.lessons.map(lesson => <h5>{lesson.title} ~ {lesson.start}~ {lesson.start}</h5>) 
// const allLessons = this.props.lessons
//                 const lessons = allLessons.map(lesson => <LessonCard key={lesson.id} lesson={lesson} />)


