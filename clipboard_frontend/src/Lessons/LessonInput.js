import React from 'react' 
import { connect } from 'react-redux'
import {createLesson} from '../actions/createLesson'
import './Lesson.css'


class LessonInput extends React.Component { 
    constructor(){
        super()
         this.state = {
            title: "",
            start: "",
            end: ""
        }
    }
   
    
    
    handleOnChange = event => {
        const {value, name} = event.target
        this.setState({
            [name]: value  
        })
       console.log({[name]: value})
    }

   
    handleOnSubmit = event => {
        event.preventDefault()
        const lesson = {...this.state, id: (Math.random)}
        this.props.createLesson(lesson)
        console.log(lesson)
        this.setState({
            title: "",
            start: "",
            end: ""
        })
    }  

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit} className="form">
                    <br></br>
                    <br></br>
                    <label> Title: </label>
                    <input type="text" value={this.state.title} name="title" onChange={this.handleOnChange}/><br></br>
                    <br></br>
                    <label> Start: </label>
                    <input type="datetime-local" value={this.state.start}  name="start" onChange={this.handleOnChange}/><br></br>
                    <br></br>
                    <label> End: </label>
                    <input type="datetime-local" value={this.state.end} name="end" onChange={this.handleOnChange}/><br></br>
                    <br></br>
                    <br></br>
                    <center><input type='submit' value='submit' onSubmit={this.handleOnSubmit}/></center>
                </form>
            </div>
        )
    }
}

  


  const mapDispatchToProps = dispatch => ({
    createLesson: (lesson) => dispatch(createLesson(lesson)),
  })


export default connect(null, mapDispatchToProps)(LessonInput)