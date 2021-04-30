import React from "react"
import {connect} from 'react-redux'
import LessonsList from './LessonsList'

class LessonsContainer extends React.Component{
    render(){
        debugger
        return(
            <div>
                <h2> All Lessons </h2>
                {this.props.lessons.map(lesson => <h5>{lesson.title} ~ {lesson.start}</h5>)}
            </div>
        )
    }
}
 
const mapStateToProps = (state) => {
    return {lessons: state.lessons}
}
export default connect(mapStateToProps)(LessonsContainer)