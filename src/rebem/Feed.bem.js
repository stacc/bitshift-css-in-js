import React from "react"
import data from "../data/feed"
import FeedItemBEM from "./Feed.item.bem"

const FeedBEM = () => (
  <div>
    {data.map(item => (
      <FeedItemBEM
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

export default FeedBEM
