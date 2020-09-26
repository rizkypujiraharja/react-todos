import React from 'react';
import FormInput from './components/FormInput'
import TodoItem from './components/TodoItem'
import logo from './logo.svg'
import './App.css';

class App extends React.Component {
  state = {
    todos: [
      "Drink", "Eat", "Sleep"
    ]
  }
  render() {
    const {todos} = this.state
    return (
      <div className="app">
        <div className="logo">
          <img src={logo} alt="React Todos" />
          <h3>React Todos</h3>
        </div>
        <div className="list">
          {todos.map((todo, index) =>
            <TodoItem key={index} todo={todo}></TodoItem>
          )}
        </div>
        <FormInput></FormInput>
      </div>
    );
  }

}

export default App;
