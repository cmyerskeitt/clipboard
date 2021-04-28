import React from 'react';
import MyCalendar from './calendar/MyCalendarContainer'
import HeaderContainer from './header/HeaderContainer';
import {connect} from 'react-redux'
import {fetchLessons} from './actions/fetchLessons'


class App extends React.Component {

 
  componentDidMount(){
  this.props.fetchLessons()
  }
  
    render (){
      return (

          <div className="App">
            <HeaderContainer/>
            <MyCalendar />
          </div>
  
    )
  
  }
}

const mapStateToProps = (state) => {
  return {
    lessons: state.lessons
  }
}

export default connect(mapStateToProps, {fetchLessons})(App);
  