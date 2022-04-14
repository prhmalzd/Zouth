import React from "react";
import styles from "./contentContainer.module.css";
import ZouthArea from "./components/ZouthArea";

const ContentContainer = (props) => {
  const posts = props.addPostState;
  const reversepost = posts.reverse();
  return (
    <div className={styles.contentContainer}>
      {reversepost.map((post, i) => {
        return (
          <ZouthArea
            key={i}
            name={post.name}
            logo={post.logo}
            context={post.context}
            src={post.src}
          />
        );
      })}
    </div>
  );
};

export default ContentContainer;
