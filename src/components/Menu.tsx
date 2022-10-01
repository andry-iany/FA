import style from "../styles/menu.module.scss";
import React from "react";
import { SignupForm } from "./SignupForm";

interface props {
  active?: boolean;
}

const Menu: React.FC<props> = ({ active }) => {
  return (
    <div
      className={`${style.Menu} ${
        active === undefined ? "" : active ? style.show : style.hide
      } `}
      style={{color: "white"}}
    >
      <SignupForm />
    </div>
  );
};

export default Menu;
