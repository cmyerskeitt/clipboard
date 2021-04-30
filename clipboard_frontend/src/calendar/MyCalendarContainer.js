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
  

  // const event = this.props.lessons.map(event => <Event event={event}/>)
  
  //insert NewLessonForm?addNewLessonAlert => AddNewLesson 
  handleSelectedSlot = ({start, end}) => { 
    console.log(this.props.lesson)
    const title = window.prompt(('New Lesson Title'))
    // // var startDate = moment(start).format()
    // // var endDate = moment(end).format()
    // // console.log(start)
    // // console.log(end)
    let event = {title: title, start: start, end: end }
    this.props.createLesson(event)
    console.log(start)
    console.log(end)
    console.log(this.state.lessons)
    if (title)
      this.setState({
      lessons: [
        ...this.state.lessons]})
        console.log(this.state.lessons)
        console.log(this.props.lessons)
  }
  
    //     // {
    //     //   title,
    //     //   start,
    //     //   end,
    //     // }
    //   ]
    // })
    
    // console.log(this.state.lessons)
    // var formatStart = new Date(start).toJSON
    // var formatEnd = new Date(end).toJSON
   

    // debugger
    
    // // this.setState({
    // //   lessons: []
    // // })
    // // debugger
    
    

  


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
              height: "100vh"
            }}/>
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

  // let d1Start = moment().add(1, "hours").toDate();
  // let d1End = moment(d1Start).add(1, "hours").toDate();


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