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

interface IEvent {
  name: string
}

interface ITopic {
  photoURL: string,
  kind: string,
  title: string
}

interface INews {
  photoURL: string,
  kind: string,
  title: string
}

function App() {
  let events: IEvent[] = [
    { name: "event1" },
    { name: "event2" }
  ]

  let topics: ITopic[] = [
    { photoURL: "#", kind: "topic-kind1", title: "Topic1" },
    { photoURL: "#", kind: "topic-kind2", title: "Topic2" },
    { photoURL: "#", kind: "topic-kind3", title: "Topic3" }
  ]

  let newsList: INews[] = [
    { photoURL: "#", kind: "news-kind1", title: "News1" },
    { photoURL: "#", kind: "news-kind2", title: "News2" },
    { photoURL: "#", kind: "news-kind3", title: "News3" }
  ]

  return (
    <div className="App">
      <Header />
      <div className = "eventComponent">
        {
          events.map((event) => {
            return <Event name = {event.name} />
          })
        }
        <Button text = "button1" linkURL = "#" />
      </div>
      <Separator />
      <div className = "topicComponent">
        {
          topics.map((topic) => {
            return <Topic photoURL = {topic.photoURL} kind = {topic.kind} title = {topic.title} />
          })
        }
        <Button text = "button2" linkURL = "#" />
      </div>
      <Separator />
      <div className = "newsComponent">
        {
          newsList.map((news) => {
            return <News photoURL = {news.photoURL} kind = {news.kind} title = {news.title} />
          })
        }
        <Button text = "button3" linkURL = "#" />
      </div>
      <Separator />
      <Footer />
    </div>
  );
}

export default App;
