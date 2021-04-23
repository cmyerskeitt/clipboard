import React from 'react';

class App extends React.Component {


  componentDidMount(){
    fetch('http://localhost:3000/api/v1/days')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(console.log)
  }
  
    render (){
      return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    )
  }
}
  export default App;
  