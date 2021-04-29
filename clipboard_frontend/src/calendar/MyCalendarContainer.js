import React from 'react'
import {Calendar, Views, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import { connect } from 'react-redux';
import {createLesson} from "../actions/createLesson"



const localizer = momentLocalizer(moment)


class MyCalendar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      lessons: this.props.lessons
    }
    console.log(this.state.lessons)
  }
  
  
  //insert NewLessonForm?addNewLessonAlert => AddNewLesson 
  handleSelectedSlot = ({start, end}) => { 
    console.log(this.state.lesssons)
    const title = window.prompt(('New Lesson Title'))
    var startDate = moment(start).format()
    var endDate = moment(end).format()
    console.log(startDate)
    console.log(endDate)
    if (title)
      this.setState({
      lessons: [
        ...this.state.lessons,
        {
          title,
          start,
          end,

        }
      ]
    })
    console.log(this.state.lessons)
    debugger
    this.props.createLesson(this.state.lessons)
    debugger
    this.setState({
      lessons: []
    })
    // debugger
  }


  


  //display Lesson Component 
  onLessonClick = (event) => {
    console.log(event)
    window.alert(
      event.title && event.start
      )
  }


  render(){
    return(
      <div>
        <Calendar
          selectable={true}
          localizer={localizer}
          events={this.props.lessons}
          step={10}
          startAccessor="start"
          endAccessor="end"
          defaultDate={new Date()}
          views={['month','week','day']}
          defaultView={Views.WEEK}
          onSelectEvent={this.onLessonClick}
          onSelectSlot={this.handleSelectedSlot}
          style={{ 
            height: "100vh",
          }}
      
        />
      </div>
      )
  }
}


// const mapStateToProps = state => {
//     return {
//       lessons: state.lessons 
//     }
// }

const mapDispatchToProps = (dispatch) => {
  return{
      createLesson: (lesson) => dispatch(createLesson(lesson)),
  }
}


export default connect(null, mapDispatchToProps)(MyCalendar)

    // const now = new Date();
  //   const myLessonsList = [{
  //     //test events/ call LessonList Component(C) => lesson(P) Compnent
  //     id: 14,
  //     title: 'Today',
  //     start: new Date(new Date().setHours(new Date().getHours() - 3)),
  //     end: new Date(new Date().setHours(new Date().getHours() + 3)),
  // },
  // {
  //     id: 15,
  //     title: 'Point in Time Event',
  //     start: now,
  //     end: now,
  // }]