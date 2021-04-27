export function fetchDays(){
    // return action 
    return (dispatch) => {
    console.log("inside fetch")
    fetch('http://localhost:3000/api/v1/days')
    .then(response => response.json())
    .then(days => dispatch({
        type: 'FETCH_DAYS',
        payload: days
    }))
    
    }
}

// fetch('http://localhost:3000/api/v1/days')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(console.log)
// }