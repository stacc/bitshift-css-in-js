import React from "react"
import { css } from "glamor"
import data from "../data/feed"
import FeedItemGlamor from "./Feed.item.glamor"
// see documentation: https://github.com/threepointone/glamor

const feed = css({
  paddingTop: "48px",
  backgroundColor: "#f2f0e9",
  backgroundImage: "url('/img/bg.png')",
  backgroundAttachment: "fixed",
  backgroundRepeat: "repeat",
  color: "#2b2b2b",
  minHeight: "100vh"
})

const logo = css({
  display: "block",
  width: "280px",
  margin: "0 auto"
})

const wrapper = css({
  maxWidth: "520px",
  margin: "0 auto",
  padding: "48px 12px"
})

const feedList = css({
  listStyleType: "none"
})

const FeedGlamor = () => (
  <div {...feed}>
    <img src="/img/logo.svg" alt="" className={logo} />
    <div className={wrapper}>
      <ol className={feedList}>
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
      </ol>
    </div>
  </div>
)

export default FeedGlamor
