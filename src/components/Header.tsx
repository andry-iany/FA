import style from "../styles/Header.module.scss";
import React from "react";

interface props {
  children: string;
}

const Header: React.FC<props> = ({ children }) => {
  return <h1 className={style.Header}>{children}</h1>;
};

export default Header;
