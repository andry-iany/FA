import styles from "../styles/Navbar.module.scss";
import logo from "../image/logo.svg";
import HumberMenu from "./humbergerMenu";
import Layouts from "../styles/Layout.module.scss";
import Menu from "./Menu";
import { MouseEventHandler, useState } from "react";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState<boolean | undefined>(undefined);

  const humberClickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveMenu(!activeMenu);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={`${styles.Header} ${Layouts.row}`}>
          <div className={styles.logo}>
            <img src={logo} alt="toky" />
          </div>
          <div className={styles.humberMenu}>
            <HumberMenu clickHandler={humberClickHandler} />
          </div>
        </div>
      </div>
      <Menu active={activeMenu} />
    </>
  );
}

export default Navbar;
