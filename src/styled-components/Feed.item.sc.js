import React from "react"
import styled from "styled-components"
import IconHeart from "../icons/Heart"
import IconBubble from "../icons/Bubble"
import IconMap from "../icons/Map"

const FeedItemSC = ({
  fullname,
  username,
  body,
  timestamp,
  likes,
  avatar,
  isNew,
  color
}) => (
  <FeedItem>
    <Header>
      <Avatar src={avatar} alt={`Bilde av ${fullname}`} />
      <Author href="author">{fullname}</Author>
      <Username>@{username}</Username>
      <Time>{timestamp}</Time>
    </Header>
    <Body>{body}</Body>
    <Footer color={color}>
      <FeedBtn>
        <IconBubble />
      </FeedBtn>
      <FeedBtn>
        <IconHeart />
        <BtnText>{likes}</BtnText>
      </FeedBtn>
      <FeedBtn>
        <IconMap />
        <BtnText>Location</BtnText>
      </FeedBtn>
    </Footer>
  </FeedItem>
)

const FeedBtn = styled.button`
  border: 0;
  min-height: 36px;
  vertical-align: middle;
  text-align: left;
  line-height: 36px;
  background: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: ${p => p.theme.spacing.medium};
  > svg {
    width: 20px;
  }
  &:hover {
    background-color: ${p => p.theme.color.line};
  }
`

const BtnText = styled.span`
  padding-left: ${p => p.theme.spacing.tiny};
`

const FeedItem = styled.div`
  padding: ${p => p.theme.spacing.medium} ${p => p.theme.spacing.medium}
    ${p => p.theme.spacing.small} ${p => p.theme.spacing.medium};
  margin-bottom: ${p => p.theme.spacing.medium};
  background-color: ${p => p.theme.color.bg};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
`

const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: ${p => p.theme.font.size.body};
  > *:last-child {
    text-align: right;
    flex-grow: 2;
  }
`

const Author = styled.a`
  font-weight: bold;
  color: ${p => p.theme.color.text};
  text-decoration: none;
  margin-left: ${p => p.theme.spacing.small};
  &:hover,
  &:active,
  &:focus {
    color: ${p => p.theme.color.primary};
  }
`

const Username = styled.span`
  color: ${p => p.theme.color.wcag};
  &:before {
    content: "·";
    padding: 0 ${p => p.theme.spacing.tiny};
  }
`

const Time = styled.time`
  color: ${p => p.theme.color.secondary};
`

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  @media screen and (min-width: 740px) {
    width: 54px;
    height: 54px;
  }
`

const Body = styled.p`
  font-family: serif;
  margin: ${p => p.theme.spacing.medium} 0;
  font-size: ${p => p.theme.font.size.large};
  line-height: 1.5;
`

const Footer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: ${p => p.theme.spacing.tiny};
  border-top: 2px solid ${p => p.theme.color.line};
  font-size: ${p => p.theme.font.size.legalese};
  color: ${p => p.theme.color.wcag};
  transition: border 0.2s ease;
  ${FeedItem}:hover & {
    border-top-color: ${p => p.color};
  }
`

export default FeedItemSC
