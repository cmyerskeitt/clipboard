// import cuid from 'cuid'

export default function lessonReducer(state = {lessons: []}, action){
  debugger 
  console.log(action.payload)
  console.log(action.lessons)
  console.log(action.type)
  switch (action.type){
    case 'FETCH_LESSONS':
        return {lessons: action.payload}
    case 'CREATE_LESSON':
      // const lesson = {lessons: action.lesson, id: cuid()}
      debugger
        return {lessons: [...state.lessons, action.lesson]}
    default:
        return state
  }
}
