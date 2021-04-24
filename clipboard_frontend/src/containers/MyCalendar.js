import React from 'react'
import {Calendar, Views, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)

class  MyCalendar extends React.Component{
  constructor(){
    super()
    const now = new Date();
    const myLessonsList = [{
      //test events
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
  handleSelect = ({start, end}) => {
    const title = window.prompt(('New Lesson Title'))
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
  }

  onLessonClick = (event) => {
    console.log(event)
  }

  render(){
    return(
      <div>
        <Calendar
          selectable={true}
          localizer={localizer}
          events={this.state.lessons}
          startAccessor="start"
          endAccessor="end"
          defaultDate={new Date()}
          views={['month','week','day']}
          defaultView={Views.WEEK}
          onSelectEvent={this.onLessonClick}
          onSelectSlot={this.handleSelect}
          style={{ height: "100vh" }}
        />
      </div>
      )
  }
}
export default MyCalendar