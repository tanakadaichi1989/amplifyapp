import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Event from './Event';
import Topic from './Topic';
import News from './News';
import Footer from './Footer';
import Button from './Button';
import Separator from './Separator';

function App() {
  return (
    <div className="App">
      <Header />
      <div className = "eventComponent">
        <Event name = "event1" />
      </div>
      <Separator />
      <Button text = "button1" linkURL = "#" />
      <div className = "topicComponent">
        <Topic name = "topic1" />
      </div>
      <Separator />
      <div className = "newsComponent">
        <News name = "news1" />
      </div>
      <Separator />
      <Footer />
    </div>
  );
}

export default App;
