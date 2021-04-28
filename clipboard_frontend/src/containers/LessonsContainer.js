import React from 'react' 
import Lessons from '../components/Lessons'
import {connect} from 'react-redux'
import {fetchLessons} from '../actions/fetchLessons'

class LessonsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchLessons()
    }


    render(){
        return(
            <div>
                {/* <NewDayForm selectedDay={this.props.selectedDay}/> */}
                <Lessons lessons={this.props.lessons}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lessons: state.lessons
    }
}

// const mapDispatchToProps = dispatch => ({
//     fetchLessons: date => dispatch({type: 'FETCH_LESSONS', date})
// })



export default connect(mapStateToProps, {fetchLessons})(LessonsContainer)