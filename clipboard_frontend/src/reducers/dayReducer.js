export default function dayReducer(state = {days: []}, action){
  // debugger 
  switch (action.type){
    case 'FETCH_DAYS':
        return {days: action.payload}
    default:
        return state
  }
}

// export default function dayReducer(state = {days: [], lessons:[]}, action){
//   return state
// }