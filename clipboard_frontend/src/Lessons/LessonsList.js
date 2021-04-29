import React from 'react'
import { connect } from 'react-redux'
import LessonCard from './LessonCard.js'


class LessonList extends React.Component{
    makeLessonCards(){
        
        return (this.props.lessons.map(lesson => (
            // <LessonCard lesson={lesson} key={lesson.id}/>
            <LessonCard lesson={lesson} />
        )))
    }

    render(){
        return this.props.lessons
        // return <div>{this.makeLessonCards()} </div>
    }
}

const mapStateToProps = (state) => {
    return {
        lessons: state.lessons
    }
}

export default connect(mapStateToProps)(LessonList)