import React from 'react'

handleDelete= () => {
  axios.delete("http://localhost:7878/api/todos/:id").then(res => {
      this.props.handleInputValueProps(true);
    });
};

function TodoElem(props) {
  return (
    <li>
      <span>{props.name}</span>
      <button>X</button>
    </li>
    
  )
}

export default TodoElem