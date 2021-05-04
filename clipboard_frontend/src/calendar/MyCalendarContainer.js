import React from 'react'
import {Calendar, Views, momentLocalizer} from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import { connect } from 'react-redux';
import {createLesson} from "../actions/createLesson"
import moment from 'moment'


const localizer = momentLocalizer(moment)

class MyCalendar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lessons: this.props.lessons
    }
    console.log(this.props.lessons)
  }
  
  // handleSelectedSlot = ({start, end}) => { 
  //   console.log(start)
  //   const title = window.prompt(('New Lesson Title'))
  //   // let s = moment(start)
  //   let e = moment(end).toString()
  //   // console.log(s)
  //   let ss = moment(start).format()
  //   // console.log(ss)
  //   let event = {title: title, start: new Date(ss), end: new Date(e)}
  //   console.log(event)
  //   this.props.createLesson(event)
  //   if (title)
  //     this.setState({
  //     lessons: [
  //       ...this.state.lessons]})
        
  // }
  
   
    onLessonClick = (event) => {
      console.log(event)
      window.alert(
      event.start
        )
    }


    render(){
      return(
        <div>
          <Calendar
            // selectable={true}
            localizer={localizer}
            events={this.props.lessons}
            step={10}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            views={["month"]}
            defaultView={Views.MONTH}
            onSelectEvent={this.onLessonClick}
            // onSelectSlot={this.handleSelectedSlot}
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

const mapStateToProps = (state) => {
  return {
    lessons: state.lessons
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyCalendar)


  // <Calendar
  // popup
  // selectable={true}
  // localizer={localizer}
  // events={this.props.lessons}
  // step={10}
  // startAccessor="start"
  // endAccessor="end"
  // defaultDate={new Date()}
  // views={['month','week','day']}
  // defaultView={Views.WEEK}
  // onSelectEvent={this.onLessonClick}
  // onSelectSlot={this.handleSelectedSlot}
  // style={{ 
  //   height: "100vh",
  // }}
