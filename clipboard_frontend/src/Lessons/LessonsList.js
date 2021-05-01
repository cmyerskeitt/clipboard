import React from 'react'
import { connect } from 'react-redux'
import LessonCard from './LessonCard.js'
import './Lesson.css'

class LessonList extends React.Component{
 
        render (){
                const lessons = this.props.lessons.map(lesson => <LessonCard key={lesson.id} lesson={lesson} />) 
        

        return(
            <div>
                <ul>
                    <li>
                       {lessons} 
                    </li>
                </ul>
            </div>
        )  
    }
}

const mapStateToProps = (state) => {
    return {
        lessons: state.lessons
    }
}

export default connect(mapStateToProps)(LessonList)

// const lessons = this.props.lessons.map(lesson => <h5>{lesson.title} ~ {lesson.start}~ {lesson.start}</h5>) 
 //    makeLessonCards(){
        // return (this.props.lessons.map(lesson => (
        //     // <LessonCard lesson={lesson} key={lesson.id}/>
        //     <LessonCard lesson={lesson} />
        // )))