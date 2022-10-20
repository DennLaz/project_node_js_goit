import { createPortal } from "react-dom";
import { NavLink } from 'react-router-dom';

import { items } from "../items";

import style from "./mobile-menu.module.scss";
import sprite from "../../../assets/svg/sprite.svg"

const modalRoot = document.getElementById("modal");

function changeClassNameMobileMenu({ isActive }) {
  const changeStyle = isActive ? style.isActive : style.link;
  return changeStyle;
}

const MobileMenu = ({ onClick, isOpen }) => {
    
    const privateItems = items.filter(item => item.private === false);
  
    const elements = privateItems.map(({ id, link, title }) =>
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
            </>
      ), modalRoot)
       
  );
};

export default MobileMenu;