import React from 'react';
import MyCalendar from './calendar/MyCalendar'
import HeaderContainer from './header/HeaderContainer';
import NewDateForm from './components/NewDateForm'



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
            <HeaderContainer/>
            <NewDateForm/>
            <MyCalendar/>
          </div>
  
    )
  }
}
  export default App;
  