import React from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)

const myEventsList= [
  {
    'title': 'Event 1',
    'startDate': new Date(2018,1,2,8),
    'endDate': new Date(2018,1,2,10)
  },
  {
    'title': 'Event 2',
    'startDate': new Date(2018,1,3,12),
    'endDate': new Date(2018,1,3,15)
  }];

const MyCalendar = props => (
  <div>
    <Calendar
      localizer={localizer}
      // defaultView="work_week"
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: "100vh" }}
    />
  </div>
)

export default MyCalendar