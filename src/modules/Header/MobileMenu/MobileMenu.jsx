import React from "react";

import style from "./mobile-menu.module.scss";
import sprite from "../../../assets/svg/sprite.svg"

const MobileMenu = () => {

  return (
    <footer className={style.footer}>

          <svg className={style.icon}>
            <use href={`${sprite}#icon-logo`}></use>
          </svg>
       
    </footer>
  );
};

export default MobileMenu;