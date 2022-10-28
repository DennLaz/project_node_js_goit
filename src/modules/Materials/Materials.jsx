import React from "react";
import Links from "./Links/Links";
import Literature from "./Literature/Literature"
import style from "./materials.module.scss";

const Materials = () => {
  return (
    // <div className={style.materials}>
      <div className={`container  ${style.wrapper}`}>
        <Literature />
        <Links />
      </div>
    // </div>
  );
};

export default Materials;