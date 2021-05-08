export const deleteLesson = (lesson) => {
    // return action
    console.log(lesson)
    return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/lessons/${lesson}`, {method: "DELETE"})
    .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(console.log)
    .then(lesson => dispatch({
        type: 'DELETE_LESSON',
        payload: lesson
    }))
    
    }
}