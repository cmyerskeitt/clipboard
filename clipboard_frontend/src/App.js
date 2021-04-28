import React from 'react';
import MyCalendar from './calendar/MyCalendarContainer'
import HeaderContainer from './header/HeaderContainer';
import {connect} from 'react-redux'
import {fetchLessons} from './actions/fetchLessons'
import DaysContainer from './containers/LessonsContainer'




class App extends React.Component {

 
  componentDidMount(){
  this.props.fetchLessons({type: 'FETCH_LESSONS', payload: {days: ['20210430']}})
  }
  
    render (){
      return (

          <div className="App">
            <HeaderContainer/>
            <DaysContainer/>
            <MyCalendar/>
          </div>
  
    )
  
  }
}

// const mapStateToProps = (state) => {
//   return {
//     days: state.days
//   }
// }

export default connect(null, {fetchLessons})(App);
  