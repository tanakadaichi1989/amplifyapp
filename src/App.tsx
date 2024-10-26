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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLine, faInstagram, faFacebook, faTwitter, faYoutube, IconDefinition } from '@fortawesome/free-brands-svg-icons';

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

interface ISNS {
  name: IconDefinition
}

function App() {
  let events: IEvent[] = [
    { name: "event1" },
    { name: "event2" }
  ]

  let topics: ITopic[] = [
    { photoURL: "#", kind: "kind1", title: "Topic1" },
    { photoURL: "#", kind: "kind2", title: "Topic2" },
    { photoURL: "#", kind: "kind3", title: "Topic3" }
  ]

  let newsList: INews[] = [
    { photoURL: "#", kind: "kind1", title: "News1" },
    { photoURL: "#", kind: "kind2", title: "News2" },
    { photoURL: "#", kind: "kind3", title: "News3" }
  ]

  let snsList: ISNS[] = [
    {name: faLine},
    {name: faInstagram},
    {name: faFacebook},
    {name: faTwitter},
    {name: faYoutube}
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
        <Button text = "Go to Event List" linkURL = "#" />
      </div>
      <Separator />
      <div className = "topicComponent">
        <div className = "componentTitle">
          <h2>TOPICS</h2>
          <p>Recommend our flagship store</p>
        </div>
        {
          topics.map((topic) => {
            return <Topic photoURL = {topic.photoURL} kind = {topic.kind} title = {topic.title} />
          })
        }
        <Button text = "Go to Topic List" linkURL = "#" />
      </div>
      <Separator />
      <div className = "newsComponent">
        <div className = "componentTitle">
          <h2>NEWS</h2>
          <p>Check the latest information</p>
        </div>
        {
          newsList.map((news) => {
            return <News photoURL = {news.photoURL} kind = {news.kind} title = {news.title} />
          })
        }
        <Button text = "Go to News List" linkURL = "#" />
      </div>
      <Separator />
      <div>
        <div className = "componentTitle" id = "snsComponent">
          <h2>FOLLOW US</h2>
          <FontAwesomeIcon icon={["fab", "github"]} />
          <div className="SNSicons">
          {
            snsList.map((sns) => {
              return <FontAwesomeIcon icon={sns.name} className = "SNS" />
            })
          }
          </div>
        </div>        
      </div>
      <Footer />
    </div>
  );
}

export default App;
