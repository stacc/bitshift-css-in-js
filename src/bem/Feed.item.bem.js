import React from "react"

const FeedItemBEM = ({
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

export default FeedItemBEM
