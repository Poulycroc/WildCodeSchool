import React, { Component } from 'react';
import axios from 'axios';

export default class TodoAdd extends Component {
    state = {
        task: ''
    };
    handleChange(event) {
        //console.log(event.target.value)
        this.setState({task: event.target.value});
    }

    handleSubmit (event) {
           event.preventDefault()  
           console.log(event) 

    const todo = {
        name: this.state.task
      };
  
    axios.post('http://localhost:7878/api/todos', { todo })
        .then(res => {
            console.log(res);
            console.log(res.data);
            console.log(this.props.handleInputValue('refresh'))
        })      
    }

    render() {
        return (
            <div>
                <form ref="form" onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        Todo Task:
                        <input type="text" name="name"  onChange={(event) => this.handleChange(event)}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
