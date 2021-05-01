import React from 'react' 
import { connect } from 'react-redux'
import {createLesson} from '../actions/createLesson'

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
    //    console.log(this.state.title)
    }

    //reroute to day view and display event/Day Component
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
                <form onSubmit={this.handleOnSubmit}>
                    <label> Title: </label>
                    <input type="text" value={this.state.title} name="title" onChange={this.handleOnChange}/>
                    <label> Start: </label>
                    <input type="datetime-local" value={this.state.start}  name="start" onChange={this.handleOnChange}/>
                    <label> End: </label>
                    <input type="datetime-local" value={this.state.end} name="end" onChange={this.handleOnChange}/>
                    <input type='submit' value='submit' onSubmit={this.handleOnSubmit}/>
                </form>
            </div>
        )
    }
}

  
//   const mapStateToProps = (state) => {
//     return {
//       lessons: state.lessons
//     }
//   }


  const mapDispatchToProps = dispatch => ({
    createLesson: (lesson) => dispatch(createLesson(lesson)),
  })


export default connect(null, mapDispatchToProps)(LessonInput)