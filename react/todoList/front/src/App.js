import React, { Component } from "react";
import TodosContainer from './components/TodosContainer';
import TodoAdd from './components/TodoAdd'

class App extends Component {
  state = {
    count: 0
  };

  handleInputValue = () => {
    console.log(this.state.count)
    this.setState({count: this.state.count + 1}) 
  }

  render() {
    return (
      <div className="app-viewport">
        <div className="container">
          <TodoAdd handleInputValueProps={this.handleInputValue} />
          <TodosContainer key={this.state.count}/>
        </div>
      </div>
    );
  }
  

  
}

export default App;
