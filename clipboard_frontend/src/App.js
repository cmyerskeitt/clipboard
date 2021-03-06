import React from 'react';
import MyCalendar from './calendar/MyCalendarContainer'
import HeaderContainer from './header/HeaderContainer';
import {connect} from 'react-redux'
import {fetchLessons} from './actions/fetchLessons'
import HomeContainer from './home/homeContainer';
import LessonsContainer from './Lessons/LessonsContainer'
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
            <Switch>
            <Route path="/lessons/new">
              <LessonsContainer />
            </Route>
            <Route path="/lessons">
              <MyCalendar lessons={this.props.lessons} /> 
            </Route>
            <Route exact path="/">
              <HomeContainer/>
            </Route>
            </Switch>
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
  fetchLessons: () => dispatch(fetchLessons())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
