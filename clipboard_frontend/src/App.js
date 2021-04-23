import React from 'react';
import MyCalendar from './containers/MyCalendar'
// import react-big-calendar/lib/css/react-big-calendar.css




class App extends React.Component {
   
  // componentDidMount(){
  //   fetch('http://localhost:3000/api/v1/days/1/days')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(console.log)
  // }
  
    render (){
      return (
      <div className="App">
        <MyCalendar/>
      </div>
    )
  }
}
  export default App;
  