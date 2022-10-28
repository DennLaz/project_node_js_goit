import React from "react";
import { NavLink } from "react-router-dom";

import style from "./footer-style.module.scss";
import sprite from "../../assets/svg/sprite.svg"

const Footer = () => {
    const today = new Date()
  return (
    <footer className={style.footer}>
      <div className={`container  ${style.wrapper}`}>
        <div className={style.text}>
          <p className={style.text_year}>{today.getFullYear()}</p>
          <p className={style.text_item}>All Rights Reserved</p>
          <p className={style.text_item}>Developed with</p>
          <svg className={style.icon}>
            <use href={`${sprite}#icon-heart`}></use>
          </svg>
        </div>
        <div className={style.text_link}>
          <NavLink className={style.text_link_item}
            to={"/contacts"}
            >by GoIT Students</NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;