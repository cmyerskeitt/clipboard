import React from 'react' 


class NewDateForm extends React.Component { 
    state = {
            date: ""
        }
    

    handleOnChange = event => {
        this.setState({
            date: event.target.value 
        })
       
    }

    handleOnSubmit = event => {

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label> Date: </label>
                    <input type="date" value={this.state.date} onChange={this.handleOnChange}/>
                    <input type='submit' value='submit'/>
                </form>
            </div>
        )
    }
}

export default NewDateForm