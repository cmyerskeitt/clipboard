export default function lessonReducer(state = {lessons: []}, action){
  // debugger 
  switch (action.type){
    case 'FETCH_LESSONS':
        return {lessons: action.payload}
    default:
        return state
  }
}
