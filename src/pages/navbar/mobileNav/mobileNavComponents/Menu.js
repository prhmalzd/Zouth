import { useSelector } from "react-redux";
import styles from "./menu.module.css";

const Menu = () => {
  const colorTheme = useSelector((state) => state.cCh.colorpage);

  return (
    <div className={styles.menu} style={{ backgroundColor: colorTheme }}>
      <ul>
        <li>Timeline</li>
        <li>Search</li>
        <li>Profile</li>
        <li>Color Change</li>
        <li>Log Out</li>
      </ul>
    </div>
  );
};

export default Menu;
