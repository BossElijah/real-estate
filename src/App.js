import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/main/Main';
import Footer from './components/main/Footer';
import ScrollToTop from './components/util/ScrollToTop';
import './App.css';

function App() {

  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop>
      <Route component={Main} />
      {window.location.pathname !== '/nyhedsbrev' && <Footer />}
      </ScrollToTop>
    </Router>
  );
}

export default App;
