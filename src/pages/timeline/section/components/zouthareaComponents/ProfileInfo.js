import React from "react";
import styles from './profileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={styles.profileInfo}>
      <span className={styles.profilePicture}>A</span>
      <p className={styles.profileName}>Eren</p>
    </div>
  )
}

export default ProfileInfo