import React from 'react';
import FormInput from './components/FormInput'
import TodoItem from './components/TodoItem'
import logo from './logo.svg'
import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        name: "Drink"
      }, {
        id: 2,
        name: "Eat"
      }, {
        id: 3,
        name: "Sleep"
      }
    ]
  }

  render() {
    const { todos } = this.state

    const deleteTodo = todoId => {
      this.setState({
        todos: this.state.todos.filter(todo => todo.id !== todoId)
      })
    }

    return (
      <div className="app">
        <div className="logo">
          <img src={logo} alt="React Todos" />
          <h3>React Todos</h3>
        </div>
        <div className="list">
          {todos.map((todo, index) =>
            <TodoItem key={index} todo={todo} onDelete={deleteTodo}></TodoItem>
          )}
        </div>
        <FormInput></FormInput>
      </div>
    );
  }

}

export default App;
