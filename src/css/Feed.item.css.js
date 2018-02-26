import React from "react"
import "./Feed.item.styles.css"
import "./Feed.flag.styles.css"

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
      <span className="css-feed-item-likes">Likes: {likes}</span>
    </div>
  </div>
)

export default FeedItemCSS
