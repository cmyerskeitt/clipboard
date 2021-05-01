import React from 'react';
// import MyCalendar from './calendar/MyCalendarContainer'
import HeaderContainer from './header/HeaderContainer';
import {connect} from 'react-redux'
import {fetchLessons} from './actions/fetchLessons'
import HomeContainer from './home/homeContainer';
import LessonsContainer from './Lessons/LessonsContainer'
import LessonInput from './Lessons/LessonInput'
import {createLesson} from './actions/createLesson'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends React.Component {

 
  componentDidMount(){
  this.props.fetchLessons()
  }
  
    render (){
      return (  
        <Router>
          <div className="App">
            <HeaderContainer/>
            <switch>
              <Route exact path="/lessons/new">
                <LessonInput createLesson={this.props.createLesson}/>
              </Route>
              <Route exact path="/lessons">
                 <LessonsContainer lessons={this.props.lessons}/>
              </Route>
              <Route exact path="/">
                 <HomeContainer/>
              </Route>
            {/* <MyCalendar lessons={this.props.lessons} /> */}
            </switch>
          </div>
        </Router>
     )
  
    }
}

const mapStateToProps = (state) => {
  return {
    lessons: state.lessons
  }
}

const mapDispatchToProps = dispatch => ({
  fetchLessons: () => dispatch(fetchLessons()),
  createLesson: (lesson) => dispatch(createLesson(lesson)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
  