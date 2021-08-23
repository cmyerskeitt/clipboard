export function fetchLessons(){  
    return (dispatch) => {
    console.log("inside fetch")
    fetch('http://localhost:3000/api/v1/lessons')
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(lessons => dispatch({
        type: 'FETCH_LESSONS',
        lessons: lessons
    }))
    
    }
}
