import React from "react"
import data from "../data/feed"
import FeedItemSC from "./Feed.item.sc"

const FeedSC = () => (
  <div>
    {data.map(item => (
      <FeedItemSC
        fullname={item.fullname}
        username={item.username}
        body={item.body}
        timestamp={item.timestamp}
        likes={item.likes}
        avatar={item.avatar}
        key={item.id}
      />
    ))}
  </div>
)

export default FeedSC
