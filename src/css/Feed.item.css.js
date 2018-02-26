import React from "react"
import "./Feed.item.styles.css"
import "./Feed.flag.styles.css"
import IconHeart from "../icons/Heart"
import IconBubble from "../icons/Bubble"
import IconMap from "../icons/Map"

const FeedItemCSS = ({
  fullname,
  username,
  body,
  timestamp,
  likes,
  avatar
}) => (
  <div className="css-feed-item">
    <div className="css-flag">
      <div className="css-flag-img">
        <img
          className="css-feed-item-avatar"
          src={avatar}
          alt={`Bilde av ${fullname}`}
        />
      </div>
      <div className="css-flag-body">
        <div className="css-feed-item-header">
          <div>
            <a href="#author" className="css-feed-item-author">
              {fullname}
            </a>
            <span> · </span>
            <span className="css-feed-item-user">{`@${username}`}</span>
          </div>
          <span className="css-feed-item-timestamp">{timestamp}</span>
        </div>
      </div>
    </div>
    <p className="css-feed-item-body">{body}</p>
    <div className="css-feed-item-footer">
      <button className="css-feed-item-btn">
        <IconBubble className="css-feed-item-icon" />
      </button>
      <button className="css-feed-item-btn">
        <IconHeart className="css-feed-item-icon" />
        <span className="css-feed-item-text">{likes}</span>
      </button>
      <button className="css-feed-item-btn">
        <IconMap className="css-feed-item-icon" />
        <span className="css-feed-item-text">Location</span>
      </button>
    </div>
  </div>
)

export default FeedItemCSS
