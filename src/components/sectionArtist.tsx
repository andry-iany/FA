import style from "../styles/sectionArtist.module.scss";
import React from "react";

const SectionArtist: React.FC<{ children: JSX.Element[] }> = (props) => {
  return <section className={style.sectionArtist}>{props.children}</section>;
};

export default SectionArtist;
