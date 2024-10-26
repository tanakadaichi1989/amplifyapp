import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Event from './Event';
import Topic from './Topic';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Event name = "event1" />
      <Topic name = "topic1" />
      <Footer />
    </div>
  );
}

export default App;
