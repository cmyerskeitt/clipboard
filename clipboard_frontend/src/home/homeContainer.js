import homeImage from './homeImage.jpg'
import './home.css'
import React from 'react'

class HomeContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            black: true 
        }
    }

    changeColor=()=>{
        this.setState({
           black: !this.state.black
        })
    }
  
    render(){
        let changingClass = this.state.black ? 'background-black' : 'background-white'
    return (
        <div className={changingClass} >
            <center>
            <h2>Welcome to Clipboard!</h2>
            <p>
            Clipboard is a lesson tracking web application designed to help make preparing for your day easier. <br></br>
            Add your lesson information and quickly pinpoint when you will be teaching what and identify what you should start planning for next. 
            </p>
            <img src={homeImage} alt="Clipboard on Wall" id="home-image"/><br></br>
            <small>
                Photo source: <a href="https://images.unsplash.com/photo-1618514951866-efc95de03f37?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNsaXBib2FyZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">Luba Ertel</a>

            </small> <br></br>
            <button onClick={this.changeColor} > Change color </button>
            </center>
        </div>
    )
  }
}

export default HomeContainer 
