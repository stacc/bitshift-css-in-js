import React from "react"
import data from "../data/feed"
import FeedItemCM from "./Feed.item.cm"
import styles from "./Feed.styles.module.css"
// see documentation: https://github.com/gajus/react-css-modules

const FeedCM = () => (
  <div className={styles.outer}>
    <img src="/img/logo.svg" alt="" className={styles.logo} />
    <div className={styles.wrapper}>
      <ol className={styles.feedList}>
        {data.map(item => (
          <FeedItemCM
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
      </ol>
    </div>
  </div>
)

export default FeedCM
