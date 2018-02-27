import React from "react"

const FeedItemGlamor = ({
  fullname,
  username,
  body,
  timestamp,
  likes,
  avatar,
  isNew
}) => (
  <li>
    {fullname}
    {username}
    {body}
    {timestamp}
    {likes}
    <img src={avatar} alt={`Bilde av ${fullname}`} />
  </li>
)

export default FeedItemGlamor
