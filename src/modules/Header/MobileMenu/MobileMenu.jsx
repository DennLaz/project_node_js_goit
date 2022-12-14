import { createPortal } from "react-dom";
import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";

import PropTypes from 'prop-types';

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
    
    const privateItems = items.filter(item => !item.private );
    const publicItems = items.filter(item => item.private === false || item.private !== false);
    // const secretItems = items.filter(item => item.secret === true);
  
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
    // const secretElements = secretItems.map(({id, link, title}) => 
    //     <li key={id} className={style.item}>
    //     <NavLink className={changeClassNameMobileMenu} to={link}>
    //         {title}
    //     </NavLink>
    //     </li>
    // );

    return (
        createPortal(
            (
            <>
                {isOpen ? <div className={style.overlay} >
                     <div className={style.mobile_container} >
                        <ul className={style.mobile_menu} >
                            {elements}
                        </ul>
                    </div>
                    </div> : <div className={style.open} >
                     <div className={style.mobile_container} >
                        <ul className={style.mobile_menu} >
                            {elements}
                        </ul>
                    </div>
                    </div>}
                {/* {!isLogin && isOpen && <div className={style.overlay} >
                     <div className={style.mobile_container} >
                        <ul className={style.mobile_menu} >
                            {secretElements}
                        </ul>
                    </div>
                    </div>}
                {!isLogin && isOpen && <div className={style.open} >
                     <div className={style.mobile_container} >
                        <ul className={style.mobile_menu} >
                            {secretElements}
                        </ul>
                    </div>
                    </div>} */}
                { isOpen && isLogin ? <div className={style.overlay} >
                     <div className={style.mobile_container} >
                        <ul className={style.mobile_menu} >
                            {publicElements}
                        </ul>
                            <div onClick={onLogout} className={style.wrapper}>
                                <svg onClick={onClick} className={style.icon_logout}>
                                    <use href={`${sprite}#icon-sign-out`}></use>
                                </svg>
                            </div>
                    </div>
                </div> : <div className={style.open} >
                     <div className={style.mobile_container} >
                        <ul className={style.mobile_menu} >
                            {publicElements}
                        </ul>
                            <div onClick={onLogout} className={style.wrapper}>
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

MobileMenu.defaultProps = {
    onClick: () => {},
}

MobileMenu.propTypes = { 
    onClick: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
}