import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import FormInput from './components/FormInput'
import Todos from './components/Todos'
import logo from './logo.svg'
import './App.css';

const App = () => {


  return (
    <Provider store={store}>
      <div className="app">
        <div className="logo">
          <img src={logo} alt="React Todos" />
          <h3>React Todos</h3>
        </div>
        <Todos />
        <FormInput></FormInput>
      </div>
    </Provider>
  );

}

export default App;