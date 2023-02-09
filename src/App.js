import React from 'react';
import CardGenerator from './components/CardGenerator';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css'
//import CardGenerator from './CardGenerator';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <CardGenerator/>
      <Footer/>
    </div>
  );
}

export default App;