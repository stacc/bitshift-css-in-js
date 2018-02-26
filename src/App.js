import React, { Component } from "react"
import feedData from "./data/feed"
import FeedItem from "./FeedItem"

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>
            Bare en kjapp boilerplate for å kunne implementere med ulike
            css-løsninger
          </h1>
        </header>
        <div>
          {feedData.map(item => (
            <FeedItem
              name={item.name}
              username={item.username}
              body={item.body}
              timestamp={item.timestamp}
              likes={item.likes}
              avatar={item.avatar}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App
