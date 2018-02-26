import React from "react"

const FeedItem = ({ name, username, body, timestamp, likes, avatar }) => (
  <div>
    <div>
      {name}
      {username}
    </div>
    {body}
    {timestamp}
    {likes}
    <img src={avatar} alt={`Bilde av ${name}`} />
  </div>
)

export default FeedItem
