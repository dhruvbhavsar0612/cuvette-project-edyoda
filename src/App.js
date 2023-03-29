import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './main.css';
import HomePage from './pages/HomePage.js';
import ModulesPage from './pages/ModulesPage';
import InstructorsPage from './pages/InstructorsPage';

function App() {
  return (
    //create routes for the pages
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage programCode="DS1234"/>} />
        <Route path="/modules" element={<ModulesPage />} />
        <Route path="/instructors" element={<InstructorsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
