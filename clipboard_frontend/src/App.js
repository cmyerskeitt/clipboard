import React from 'react';
import MyCalendar from './calendar/MyCalendarContainer'
import HeaderContainer from './header/HeaderContainer';
import {connect} from 'react-redux'
import {fetchLessons} from './actions/fetchLessons'
// import {createLesson} from "./actions/createLesson"

class App extends React.Component {

 
  componentDidMount(){
  this.props.fetchLessons()
  
  }
  
    render (){
      return (

          <div className="App">
            <HeaderContainer/>
            <MyCalendar lessons={this.props.lessons} />
          </div>
  
    )
  
  }
}

const mapStateToProps = (state) => {
  return {
    lessons: state.lessons
  }
}

const mapDispatchToProps = dispatch => ({
  fetchLessons: () => dispatch(fetchLessons()),
  // createLesson: () => dispatch(createLesson()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
  