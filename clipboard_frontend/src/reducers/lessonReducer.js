
export default function lessonReducer(state = {lessons: []}, action){
    // console.log(action.payload)
   switch (action.type){
     case 'FETCH_LESSONS':
         const l = action.lessons.map(function(a){
             return {...a, start: new Date(a.start), end: new Date(a.end)}
             
         })
         return {lessons: l}
     case 'CREATE_LESSON':
         const a = {...action.payload, start: new Date(action.payload.start), end: new Date(action.payload.end)}
         return {...state, lessons: [...state.lessons, a]}
     default:
         return state
   }
 }

