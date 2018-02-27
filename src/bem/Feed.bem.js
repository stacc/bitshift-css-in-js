import React from "react"
import BEMHelper from "react-bem-helper"
import data from "../data/feed"
import "./Feed.bem.css"
import FeedItemBEM from "./Feed.item.bem"
// see documentation: https://github.com/marcohamersma/react-bem-helper

const classes = new BEMHelper({
  name: "feed"
})

const FeedBEM = () => (
  <div {...classes()}>
    <img src="/img/logo.svg" alt="" {...classes("logo")} />
    <div {...classes("wrapper")}>
      <ol {...classes("list")}>
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
      </ol>
    </div>
  </div>
)

export default FeedBEM
