import Style from "../styles/BurgerMenuStyle.module.scss";
import React, { MouseEventHandler, useState } from "react";

interface props {
  clickHandler: MouseEventHandler<HTMLDivElement>;
}

const BurgerMenu: React.FC<props> = ({ clickHandler }) => {
  const [active, setActive] = useState(false);

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setActive(!active);
    clickHandler(e);
  };

  return (
    <div
      className={`${Style.HumberMenu} ${active ? Style.checked : null}`}
      onClick={handleClick}
    >
      <span> </span>
      <span> </span>
      <span> </span>
    </div>
  );
};

export default BurgerMenu;
