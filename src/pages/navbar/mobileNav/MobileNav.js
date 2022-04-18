import styles from "./mobileNav.module.css";
import ZouthnavLogo from "../navbarStuff/ZouthnavLogo";
import Menu from "../navbarStuff/Menu";
import Plus from "../navbarStuff/Plus";
import { useState } from "react";

const MobileNav = (props) => {
  const [rotatePlus, setRotatePlus] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);

  const showMenuHandler = () => {
    setRotatePlus(45);
    setToggleMenu(true);
  };
  const onHideMenuHandler = () => {
    setRotatePlus((rotatePlus) => rotatePlus + 45);
    setToggleMenu((toggleMenu) => !toggleMenu);
  };
  return (
    <div className={styles.mobileNav}>
      {!toggleMenu && <Menu onShowMenu={showMenuHandler} />}
      <ZouthnavLogo mobileNav={true} />
      <div>
        <Plus
          onShowAddPost={!toggleMenu ? props.onShowAddPost : onHideMenuHandler}
          rotatePlus={rotatePlus}
          toggleMenu={toggleMenu}
        />
      </div>
    </div>
  );
};

export default MobileNav;
