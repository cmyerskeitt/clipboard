import React from 'react'
import {Calendar, Views, momentLocalizer} from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import { connect } from 'react-redux';
import {createLesson} from "../actions/createLesson"
import moment from 'moment'

const localizer = momentLocalizer(moment)


class MyCalendar extends React.Component {


  handleSelectedSlot = ({start, end}) => { 
    const title = window.prompt(('New Lesson Title'))
    let event = {title: title, start: start, end: end}
    this.props.createLesson(event)  
    }

  onLessonClick = (event) => {
          window.alert(
           event.start
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
            defaultDate={moment().toDate()}
            views={["month", "week", "day"]}
            defaultView={Views.MONTH}
            onSelectEvent={this.onLessonClick}
            onSelectSlot={this.handleSelectedSlot}
            style={{ 
              height: "100vh"}}
            />
        </div>
      )
    }
}


const mapDispatchToProps = (dispatch) => {
  return{
      createLesson: (lesson) => dispatch(createLesson(lesson)),
   
      
  }
}
export default connect(null, mapDispatchToProps)(MyCalendar)


 

