import React from 'react';
import ReactDOM from 'react-dom';
// component file
import TodoContainer from './components/TodoContainer';

// Enabling the Strict Mode in React Application
ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
