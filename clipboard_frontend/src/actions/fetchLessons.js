export function fetchLessons(){
    // return action 
    return (dispatch) => {
    console.log("inside fetch")
    fetch('http://localhost:3000/api/v1/lessons')
    .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(console.log)
    .then(lessons => dispatch({
        type: 'FETCH_LESSONS',
        lessons:lessons
    }))
    
    }
}

// fetch('http://localhost:3000/api/v1/days')
// .then(response => response.json())

// }