import React from "react";
import styles from './contentContainer.module.css'
import ZouthArea from "./components/ZouthArea";

const ContentContainer = (props) => {
  const posts = props.addPostState
 return (
    <div className={styles.contentContainer}>
      {
      posts.map((post, i) => {
        return (
          <ZouthArea
          colorTheme={props.colorTheme}
          key={i}
          name={post.name}
          logo={post.logo}
          context={post.context}
          src={post.src}
          />
        )
      }
      )
      }
    </div>
 )
}

export default ContentContainer