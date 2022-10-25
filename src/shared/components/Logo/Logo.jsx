import { Link } from "react-router-dom";

import sprite from "../../../assets/svg/sprite.svg";

import style from "./logo.module.scss";

function Logo() {
  return (
    <>
      <Link to="/">
        <svg className={style.icon}>
          <use href={`${sprite}#icon-logo`}></use>
        </svg>
      </Link>
    </>
  );
}

export default Logo;
