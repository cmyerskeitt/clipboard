// import cuid from 'cuid'

export default function lessonReducer(state = {lessons: [], loading: false}, action){
  debugger 
  console.log(action.payload)
  console.log(action.lessons)
  console.log(action.type)
  switch (action.type){
    case 'FETCH_LESSONS':
        return {lessons: action.payload}
    case 'CREATE_LESSON':
        return {lessons: [...state.lessons, action.lesson[0]]}
    default:
        return state
  }
}
