// import cuid from 'cuid'

export default function lessonReducer(state = {lessons: [], loading: false}, action){
   console.log(action.payload)
  switch (action.type){
    case 'FETCH_LESSONS':
        return {lessons: action.lessons}
        // return {lessons: moment(action.payload).format()}
    case 'CREATE_LESSON':
        // const lesson = {lessons: action.lesson[0], id: cuid()}
        return {...state, lessons: [...state.lessons, action.payload]}
        // return {lessons: moment([...state.lessons, action.lesson]).format()}
    default:
        return state
  }
}
