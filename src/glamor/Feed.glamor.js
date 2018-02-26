import React from "react"
import data from "../data/feed"
import FeedItemGlamor from "./Feed.item.glamor"

const FeedGlamor = () => (
  <div>
    {data.map(item => (
      <FeedItemGlamor
        fullname={item.fullname}
        username={item.username}
        body={item.body}
        timestamp={item.timestamp}
        likes={item.likes}
        avatar={item.avatar}
      />
    ))}
  </div>
)

export default FeedGlamor