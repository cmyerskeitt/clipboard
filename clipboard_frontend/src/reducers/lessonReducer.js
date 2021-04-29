// import cuid from 'cuid'

export default function lessonReducer(state = {lessons: []}, action){

  // const moment = require('moment')
  switch (action.type){
    case 'FETCH_LESSONS':
      //  const moment = require('moment')
        return {lessons: action.payload}
        // return {lessons: moment(action.payload).format()}
    case 'CREATE_LESSON':
        // const lesson = {lessons: action.lesson[0], id: cuid()}
        return {lessons: [...state.lessons, action.lesson]}
        // return {lessons: moment([...state.lessons, action.lesson]).format()}
    default:
        return state
  }
}
