import React from "react"

const FeedItemCM = ({
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

export default FeedItemCM
