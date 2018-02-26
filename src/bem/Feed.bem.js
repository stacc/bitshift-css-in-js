import React from "react"
import BEMHelper from "react-bem-helper"
import data from "../data/feed"
import FeedItemBEM from "./Feed.item.bem"

const classes = new BEMHelper({
  name: "feed"
})

const FeedBEM = () => (
  <div {...classes()}>
    <img src="/img/logo.svg" alt="" {...classes("logo")} />
    {data.map(item => (
      <FeedItemBEM
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

export default FeedBEM
