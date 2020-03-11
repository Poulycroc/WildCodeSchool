import React from 'react';
import TodosContainer from './components/TodosContainer';
import TodoAdd from './components/TodoAdd'

function App() {
  const handleInputValue = (event) => {
    console.log({handleInputValue: event})
  }

  return (
    <div className="app-viewport">
      <div className="container">
        <TodoAdd handleInputValue={handleInputValue}/>
        <TodosContainer />
      </div>
    </div>
  );
}

export default App;
