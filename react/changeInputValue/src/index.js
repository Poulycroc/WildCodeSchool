import React from "react"
import {render} from "react-dom" 
import data from './data.json';
import Student from './student'


class App extends React.Component {
    state = {
        text: "Test"
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    render() {
        const items = []
      
        for (const [index, value] of data.entries()) {
            items.push(<Student quantity={value.quantity} key={index} product_name={value.product_name}/>)
        }
      
        return (
            <div className="container">
                <h1>Test : {this.state.text}</h1>
                <input 
                    type="text"
                    placeholder="write something"
                    onChange={(event) => this.handleChange(event)}
                    value={this.state.text}
                />

                <ul>
                    {items}
                </ul>
            </div>
        )
    }
} 

render(<App />, document.getElementById('root'))