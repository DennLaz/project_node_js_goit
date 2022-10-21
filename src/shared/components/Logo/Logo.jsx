import { Link } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

import sprite from "../../../assets/svg/sprite.svg"

import style from "./logo.module.scss";

function Logo() {

    const isLogin = useAuth();

    return (
        <>
            { <Link to="/">
                <div className={style.logo_ontainer}>
                    <svg className={style.icon}>
                        <use href={`${sprite}#icon-logo`}></use>
                    </svg>
                </div>
            </Link>}
        </>
    )
};

export default Logo;