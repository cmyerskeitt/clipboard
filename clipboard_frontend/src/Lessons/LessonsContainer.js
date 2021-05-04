import React from "react"
import {connect} from 'react-redux'
import LessonInput from '../Lessons/LessonInput'
import LessonsList from '../Lessons/LessonsList'

class LessonsContainer extends React.Component{
    render(){
        // debugger
        return(
            <div>
                <LessonInput />
                <LessonsList lessons={this.props.lessons}/>
            </div>
        )
    }
}
 
const mapStateToProps = (state) => {
    return {lessons: state.lessons}
}


  
export default connect(mapStateToProps)(LessonsContainer)

//  {this.props.lessons.map(lesson => <h5>{lesson.title} ~ {lesson.start}</h5>)}
//  {this.props.lessons.map(lesson => <h5>{lesson.title} ~ {lesson.start}</h5>)}