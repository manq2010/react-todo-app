/* eslint-disable*/
// LIBRARIES
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import TodoContainer from './functionBased/components/TodoContainer.jsx';

// Pages
import About from './pages/About';
import NotMatch from './pages/NotMatch';

function AppRoutes(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<NotMatch />} />
        <Route exact path="/" element={<TodoContainer />} />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;
