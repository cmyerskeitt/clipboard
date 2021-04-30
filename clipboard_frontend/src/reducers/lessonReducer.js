// import cuid from 'cuid'

export default function lessonReducer(state = {lessons: [], loading: false}, action){
   console.log(action.payload)

    debugger
  // const moment = require('moment')
  switch (action.type){
    case 'FETCH_LESSONS':
      //  const moment = require('moment')
        return {lessons: action.lessons, loading: true}
        // return {lessons: moment(action.payload).format()}
    case 'CREATE_LESSON':
        // const lesson = {lessons: action.lesson[0], id: cuid()}
        return {...state, lessons: [...state.lessons, action.payload],loading: true}
        // return {lessons: moment([...state.lessons, action.lesson]).format()}
    default:
        return state
  }
}
