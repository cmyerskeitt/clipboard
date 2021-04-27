import React from 'react';
import MyCalendar from './calendar/MyCalendarContainer'
import HeaderContainer from './header/HeaderContainer';
import {connect} from 'react-redux'
import {fetchDays} from './actions/fetchDays'
// import DaysContainer from './containers/DaysContainer'
// import NewDateForm from './components/NewDayForm'



class App extends React.Component {

   //cdm-fetchday 
  componentDidMount(){
  this.props.fetchDays({type: 'FETCH_DAYS', payload: {days: ['20210430']}})
  //   fetch('http://localhost:3000/api/v1/days')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(console.log)
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

// const mapStateToProps = (state) => {
//   return {
//     days: state.days
//   }
// }

export default connect(null, {fetchDays})(App);
  