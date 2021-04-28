import React from 'react'
import {Calendar, Views, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import { connect } from 'react-redux';

const localizer = momentLocalizer(moment)


class  MyCalendar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      lessons: []
    }
  }

  
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
          end

        }
      ]
    })
    // action.preventdefault()
    this.props.createLesson(this.state)
    console.log(this.state.lessons)
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


const mapStateToProps = state => {
    return {
      lessons: state.lessons 
    }
}

// const mapDispatchToProps = (dispatch) => {
//   return{
//       createLesson: (lesson) => dispatch(createLesson(lesson)),
//   }
// }


export default connect(mapStateToProps)(MyCalendar)

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