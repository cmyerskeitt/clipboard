import React from 'react';
import MyCalendar from './calendar/MyCalendarContainer'
import HeaderContainer from './header/HeaderContainer';
import {connect} from 'react-redux'
import {fetchLessons} from './actions/fetchLessons'
import LessonsContainer from './containers/LessonsContainer'




class App extends React.Component {

 
  componentDidMount(){
  this.props.fetchLessons({type: 'FETCH_LESSONS', payload: {}})
  }
  
    render (){
      return (

          <div className="App">
            <HeaderContainer/>
            <LessonsContainer/>
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
  