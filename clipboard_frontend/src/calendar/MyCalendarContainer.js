import React from 'react'
import {Calendar, Views, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)


class  MyCalendar extends React.Component{
  constructor(){
    super()
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
    this.state = {
      lessons: []
    }
  }

//   componentDidMount(){
//     this.props.fetchLessons()
// }

  //insert NewLessonForm?addNewLessonAlert => AddNewLesson 
  handleSelectedSlot = ({start, end}) => {
    const title = window.prompt(('New Lesson Title'))
    var startDate = moment.start
    var endDate = moment.end
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

  }

  //display Lesson Component 
  onLessonClick = (event) => {
    console.log(event)
    window.alert(event.title)
  }


  render(){
    return(
      <div>
        <Calendar
          selectable={true}
          localizer={localizer}
          events={this.state.lessons}
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




export default MyCalendar