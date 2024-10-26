import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Event from './Event';
import Topic from './Topic';
import News from './News';
import Footer from './Footer';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <Header />
      <div className = "eventComponent">
        <Event name = "event1" />
      </div>
      <Button text = "button1" linkURL = "#" />
      <div className = "topicComponent">
        <Topic name = "topic1" />
      </div>
      <div className = "newsComponent">
        <News name = "news1" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
