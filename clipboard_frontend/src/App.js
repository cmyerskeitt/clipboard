import React from 'react';
import MyCalendar from './calendar/MyCalendarContainer'
import HeaderContainer from './header/HeaderContainer';
import {connect} from 'react-redux'
// import DaysContainer from './containers/DaysContainer'
// import NewDateForm from './components/NewDayForm'



class App extends React.Component {
   //cdm-fetchday 
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/days')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(console.log)
  }
  
    render (){
      return (

          <div className="App">
            <HeaderContainer/>
            {/* <DaysContainer/> */}
            <MyCalendar/>
          </div>
  
    )
  
  }
}

  export default connect(mapStateToProps)(App);
  