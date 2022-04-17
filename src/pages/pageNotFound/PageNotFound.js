import tanha from "./images/1.png";
import styles from "./pageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.div}>
      <div className={styles.pagenotfound}>
        <p>
          4o<p>4</p>
        </p>
        <p>Page Not Found</p>
      </div>
      <img className={styles.image} src={tanha} alt="tanha" />
    </div>
  );
};

export default PageNotFound;
