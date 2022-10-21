import { createPortal } from "react-dom";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { userLogout } from "../../../redux/auth/authOperations";

import useAuth from "../../../shared/hooks/useAuth";

import { items } from "../items";

import sprite from "../../../assets/svg/sprite.svg"
import style from "./mobile-menu.module.scss";


const modalRoot = document.getElementById("modal");

function changeClassNameMobileMenu({ isActive }) {
  const changeStyle = isActive ? style.isActive : style.link;
  return changeStyle;
}

const MobileMenu = ({ onClick, isOpen }) => {

    const isLogin = useAuth();

    const dispatch = useDispatch();
    
    function onLogout() {
        dispatch(userLogout());
    }
//   const handleClickLogOut = () => {
//     dispatch(userLogout());
//   };
    // console.log(handleClickLogOut)
    
    const privateItems = items.filter(item => item.private === false);
    const publicItems = items.filter(item => item.private === false || item.private !== false);
  
    const elements = privateItems.map(({ id, link, title }) =>
        <li key={id} className={style.item}>
            <NavLink className={changeClassNameMobileMenu} onClick={onClick} to={link}>
                {title}
            </NavLink>
        </li>
    );
    const publicElements = publicItems.map(({ id, link, title }) =>
        <li key={id} className={style.item}>
            <NavLink className={changeClassNameMobileMenu} onClick={onClick} to={link}>
                {title}
            </NavLink>
        </li>
    );

    return (
        createPortal(
            (
            <>
                {isOpen && <div className={style.overlay} >
                     <div className={style.mobile_container} >
                        <ul className={style.mobile_menu} >
                            {elements}
                        </ul>
                    </div>
                    </div>}
                {isOpen && isLogin && <div className={style.overlay} >
                     <div className={style.mobile_container} >
                        <ul className={style.mobile_menu} >
                            {publicElements}
                        </ul>
                            <div type="button" onClick={onLogout} className={style.wrapper}>
                                <svg onClick={onClick} className={style.icon_logout}>
                                    <use href={`${sprite}#icon-sign-out`}></use>
                                </svg>
                            </div>
                    </div>
                </div>}
            </>
      ), modalRoot)
       
  );
};

export default MobileMenu;