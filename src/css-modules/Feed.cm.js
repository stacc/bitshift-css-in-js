import React from "react"
import data from "../data/feed"
import FeedItemCM from "./Feed.item.cm"

const FeedCM = () => (
  <div>
    {data.map(item => (
      <FeedItemCM
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

export default FeedCM
