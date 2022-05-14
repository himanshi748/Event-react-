import React from 'react';
import './App.css';

class Change extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName:''
        };
    }
    changeText(event) {
        this.setState({
            companyName: event.target.value
        });
    }
    render() {
        return (
            <>
            <form>
            <h2>Simple Event</h2>
            <label htmlFor='name'>Enter name :  </label>
            <input type='text' id='companyName' onChange={this.changeText.bind(this)}/>

            <h4>You entered :{ this.state.companyName }</h4>
            </form>
            </>
        );
    }

}

export default Change;