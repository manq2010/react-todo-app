import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// component file
// import TodoContainer from './functionBased/components/TodoContainer';
import App from './App';

// stylesheet
import './functionBased/App.css';

// Enabling the Strict Mode in React Application
ReactDOM.render(
  <React.StrictMode>
    {/* <TodoContainer /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
