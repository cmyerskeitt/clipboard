import React from 'react' 
import NewDayForm from '../components/NewDayForm'
import {connect} from 'react-redux'

class DaysContainer extends React.Component {
    render(){
        return(
            <div>
                <NewDayForm selectedDay={this.props.selectedDay}/>
                {/* <Days/> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
        days: state.days
    })
}

const mapDispatchToProps = dispatch => ({
    selectedDay: date => dispatch({type: 'SELECTED_DAY', date})
})



export default connect(mapStateToProps, mapDispatchToProps)(DaysContainer)