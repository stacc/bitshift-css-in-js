import React from "react"
import data from "../data/feed"
import FeedItemGlamor from "./Feed.item.glamor"

const FeedGlamor = () => (
  <div>
    <img src="/img/logo.svg" alt="" />
    {data.map(item => (
      <FeedItemGlamor
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
  </div>
)

export default FeedGlamor
