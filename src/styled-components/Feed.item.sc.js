import React from "react"

const FeedItemSC = ({ fullname, username, body, timestamp, likes, avatar }) => (
  <div>
    {fullname}
    {username}
    {body}
    {timestamp}
    {likes}
    <img src={avatar} alt={`Bilde av ${fullname}`} />
  </div>
)

export default FeedItemSC
