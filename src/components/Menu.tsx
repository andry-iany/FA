import style from "../styles/menu.module.scss";
import React from "react";

interface props {
  active?: boolean;
}

const Menu: React.FC<props> = ({ active }) => {
  return (
    <div
      className={`${style.Menu} ${
        active === undefined ? "" : active ? style.show : style.hide
      } `}
    ></div>
  );
};

export default Menu;
