import React from 'react'
import {Calendar, Views, momentLocalizer} from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import { connect } from 'react-redux';
import {createLesson} from "../actions/createLesson"
import moment from 'moment'


// moment.locale("en");
const localizer = momentLocalizer(moment)
// console.log(moment)
// let allViews = Object.keys(Views).map(k => Views[k])

class MyCalendar extends React.Component {
  constructor(props){
    super(props)
    // debugger
    this.state = {
      lessons: this.props.lessons
    }
    console.log(this.props.lessons)
  }
  

  // const event = this.props.lessons.map(event => <Event event={event}/>)
  
  //insert NewLessonForm?addNewLessonAlert => AddNewLesson 
  handleSelectedSlot = ({start, end}) => { 
    console.log(start)
    const title = window.prompt(('New Lesson Title'))
    // let s = moment(start)
    let e = moment(end).toString()
    // console.log(s)
    let ss = moment(start).format()
    // console.log(ss)
    let event = {title: title, start: new Date(ss), end: new Date(e)}
    console.log(event)
    this.props.createLesson(event)
    if (title)
      this.setState({
      lessons: [
        ...this.state.lessons]})
    //     console.log(this.state.lessons)
        
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
            views={["month","week","day"]}
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

const mapStateToProps = (state) => {
  return {
    lessons: state.lessons
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyCalendar)

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

  // 2021-04-30T16:03:47-04:00
  // Fri Apr 30 2021 01:20:00 GMT-0400 (Eastern Daylight Time)