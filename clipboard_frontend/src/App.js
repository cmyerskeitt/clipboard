import React from 'react';
import MyCalendar from './calendar/MyCalendarContainer'
import HeaderContainer from './header/HeaderContainer';
import {connect} from 'react-redux'
import {fetchLessons} from './actions/fetchLessons'
import HomeContainer from './home/homeContainer';


class App extends React.Component {

 
  componentDidMount(){
  this.props.fetchLessons()
  
  }
  
    render (){
      return (

          <div className="App">
            <HomeContainer/>
            <HeaderContainer/>
            <MyCalendar lessons={this.props.lessons} />
          </div>
  
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
  