import React from "react"
import styled from "styled-components"
import data from "../data/feed"
import FeedItemSC from "./Feed.item.sc"

const Feed = styled.div`
  padding-top: 48px;
  background-color: #f2f0e9;
  background-image: url("/img/bg.png");
  background-attachment: fixed;
  background-repeat: repeat;
  color: #2b2b2b;
  min-height: 100vh;
`

const Logo = styled.img`
  display: block;
  width: 280px;
  margin: 0 auto;
`

const Wrapper = styled.div`
  max-width: 520px;
  margin: 0 auto;
  padding: 48px 12px;
`

const FeedList = styled.ol`
  list-style-type: none;
`

const FeedSC = () => (
  <Feed>
    <Logo src="/img/logo.svg" alt="" />
    <Wrapper>
      <FeedList>
        {data.map(item => (
          <FeedItemSC
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
      </FeedList>
    </Wrapper>
  </Feed>
)

export default FeedSC
