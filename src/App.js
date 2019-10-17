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


  // {cardList.cards.map(card => (
  //   <h3>{card.title}</h3>
  //   <img src={card.img.src} alt={card.img.alt}/>
  // ))}

  // #3d4669