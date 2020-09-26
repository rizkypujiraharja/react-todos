import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import ls from 'local-storage'
import FormInput from './components/FormInput'
import TodoItem from './components/TodoItem'
import logo from './logo.svg'
import './App.css';

class App extends React.Component {
  state = {
    todos: ls.get('todos') || []
  }
  deleteTodo = todoId => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== todoId)
    }, () => ls.set('todos', this.state.todos))
  }
  saveTodo = name => {
    const newTodo = {
      id: uuidv4(),
      name,
      is_done: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    }, () => ls.set('todos', this.state.todos))
  }

  render() {
    const { todos } = this.state
    return (
      <div className="app">
        <div className="logo">
          <img src={logo} alt="React Todos" />
          <h3>React Todos</h3>
        </div>
        <div className="list">
          {todos.map((todo, index) =>
            <TodoItem key={index} todo={todo} onDelete={this.deleteTodo}></TodoItem>
          )}
        </div>
        <FormInput save={this.saveTodo}></FormInput>
      </div>
    );
  }

}

export default App;
