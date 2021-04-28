export default function lessonReducer(state = {lessons: []}, action){
  debugger 
  console.log(action.payload)
  console.log(action.type)
  switch (action.type){
    case 'FETCH_LESSONS':
        return {lessons: action.payload}
    case 'CREATE_LESSON':
        return {lessons: action.payload}
    default:
        return state
  }
}
