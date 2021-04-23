import React from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)

class  MyCalendar extends React.Component{
  constructor(){
    super()
    const now = new Date();
    const myLessonsList = [{
      id: 14,
      title: 'Today',
      start: new Date(new Date().setHours(new Date().getHours() - 3)),
      end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
      id: 15,
      title: 'Point in Time Event',
      start: now,
      end: now,
  }]
    this.state = {
      lessons: myLessonsList
    }
  }


  render(){
    return(
      <div>
        <Calendar
          localizer={localizer}
          events={this.state.lessons}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100vh" }}
        />
      </div>
      )
  }
}
export default MyCalendar