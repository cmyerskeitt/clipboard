import React from "react"
import {connect} from 'react-redux'
import LessonsList from './LessonsList'

class LessonsContainer extends React.Component{
    render(){
        return(
            <div>
                <h2> All Lessons </h2>
                <LessonsList lessons={this.props.lessons}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps)(LessonsContainer)