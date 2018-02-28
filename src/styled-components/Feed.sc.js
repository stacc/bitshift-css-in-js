import React from "react"
import styled, { ThemeProvider } from "styled-components"
import data from "../data/feed"
import FeedItemSC from "./Feed.item.sc"

const theme = {
  color: {
    text: "#2b2b2b",
    primary: "#dc7429",
    secondary: "#f27788",
    bg: "#fbfbfa",
    line: "#efede7",
    mix: ["#dc7429", "#8ccfb9", "#88a0ba", "#f27788"],
    wcag: "#787878"
  },
  spacing: {
    large: "24px",
    medium: "24px",
    small: "12px",
    tiny: "6px"
  },
  font: {
    size: {
      legalese: "12px",
      body: "14px",
      large: "20px"
    }
  }
}

const FeedSC = () => (
  <ThemeProvider theme={theme}>
    <Feed>
      <Logo src="/img/logo.svg" alt="" />
      <Wrapper>
        <FeedList>
          {data.map((item, index) => (
            <FeedItemSC
              fullname={item.fullname}
              username={item.username}
              body={item.body}
              timestamp={item.timestamp}
              likes={item.likes}
              avatar={item.avatar}
              isNew={item.new}
              key={item.id}
              color={theme.color.mix[index % theme.color.mix.length]}
            />
          ))}
        </FeedList>
      </Wrapper>
    </Feed>
  </ThemeProvider>
)

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

export default FeedSC
