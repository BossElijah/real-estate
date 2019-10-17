import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/main/Main';
import Footer from './components/main/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Route component={Main} />
      <Footer />
    </Router>
  );
}

export default App;
