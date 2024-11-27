// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Countries from './components/Countries';
import Details from './components/Details';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page and /countries route */}
        <Route path="/" element={<Countries />} />
        <Route path="/countries" element={<Countries />}>
          {/* Nested Route for /countries/:cca2 */}
          <Route path=":cca2" element={<Details />} />
        </Route>
        {/* Redirect any unknown routes to / */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
