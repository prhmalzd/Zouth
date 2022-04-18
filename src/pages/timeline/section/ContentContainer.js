import React from "react";
import styles from "./contentContainer.module.css";
import ZouthArea from "./components/ZouthArea";
import { useSelector } from "react-redux";

const ContentContainer = () => {
  const posts = useSelector((state) => state.addPost.posts);

  return (
    <div className={styles.contentContainer}>
      {posts.map((post, i) => {
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
