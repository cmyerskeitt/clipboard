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
                    <p>
                    <label> Date: </label>
                    <input type="date" value={this.state.date} onChange={this.handleOnChange}/>
                    </p>
                    <input type='submit' value='submit'/>
                </form>
            </div>
        )
    }
}

export default NewDateForm