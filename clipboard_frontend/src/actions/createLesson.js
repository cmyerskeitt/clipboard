export const createLesson = (lesson) => {
    console.log({lesson})
    return (dispatch) => {
        debugger
        fetch('http://localhost:3000/api/v1/lessons', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accepts: "application/json",
            },
            body: JSON.stringify(lesson),
        })
            .then((res) => res.json())
            //   .then(data => console.log(data))
            //  .catch(console.log)
            .then((lesson) => {
                dispatch({type: "CREATE_LESSON", payload: lesson})
            })
    }
}