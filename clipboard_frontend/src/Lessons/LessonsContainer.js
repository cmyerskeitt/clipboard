import React from "react"
import {connect} from 'react-redux'
import LessonInput from '../Lessons/LessonInput'
import {createLesson} from '../actions/createLesson'
import LessonsList from '../Lessons/LessonsList'

class LessonsContainer extends React.Component{
    render(){
        // debugger
        return(
            <div>
                <LessonInput createLesson={this.props.createLesson}/>
                <LessonsList lessons={this.props.lessons}/>
            </div>
        )
    }
}
 
const mapStateToProps = (state) => {
    return {lessons: state.lessons}
}

const mapDispatchToProps = dispatch => ({
    createLesson: (lesson) => dispatch(createLesson(lesson)),
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(LessonsContainer)

//  {this.props.lessons.map(lesson => <h5>{lesson.title} ~ {lesson.start}</h5>)}
//  {this.props.lessons.map(lesson => <h5>{lesson.title} ~ {lesson.start}</h5>)}