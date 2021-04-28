import React from 'react' 
import Days from '../components/Lessons'
import {connect} from 'react-redux'
import {fetchLessons} from '../actions/fetchLessons'

class DaysContainer extends React.Component {

    componentDidMount(){
        this.props.fetchLessons()
    }


    render(){
        return(
            <div>
                {/* <NewDayForm selectedDay={this.props.selectedDay}/> */}
                <Days days={this.props.days}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        days: state.days
    }
}

// const mapDispatchToProps = dispatch => ({
//     fetchDays: date => dispatch({type: 'SELECTED_DAY', date})
// })



export default connect(mapStateToProps, {fetchLessons})(DaysContainer)