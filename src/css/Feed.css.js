import React from "react"
import data from "../data/feed"
import "./Feed.styles.css"
import FeedItemCSS from "./Feed.item.css.js"

const FeedCSS = () => (
  <div className="css-outer">
    <img className="css-logo" src="/img/logo.svg" alt="" />
    <div className="css-wrapper">
      <ol className="css-feed-list">
        {data.map(item => (
          <FeedItemCSS
            fullname={item.fullname}
            username={item.username}
            body={item.body}
            timestamp={item.timestamp}
            likes={item.likes}
            avatar={item.avatar}
            isNew={item.new}
            key={item.id}
          />
        ))}
      </ol>
    </div>
  </div>
)

export default FeedCSS
