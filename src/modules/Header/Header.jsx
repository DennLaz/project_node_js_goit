import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { userLogout } from "../../redux/auth/authOperations";

import useAuth from "../../shared/hooks/useAuth";
import sprite from "../../assets/svg/sprite.svg"

import Logo from "../../shared/components/Logo";
import UserMenu from "./UserMenu";
import UserInfo from "./UserInfo"
import MobileMenu from "./MobileMenu";
import HeaderMenu from "./HeaderMenu";

import style from "./header.module.scss";



const Header = () => {
    const [isOpen, changeOpen] = useState(false);

    const isLogin = useAuth();
    const dispatch = useDispatch();
    
//     function changeClassNameHeader({ isActive }) {
//   const changeStyle = isActive ? style.isActive : style.header;
//   return changeStyle;
// }
    
  const changeStyle = isLogin ? style.header  : style.isActive;

    
    // function onLogout() {
    //     dispatch(userLogout());
    // }
  const handleClickLogOut = () => {
    dispatch(userLogout());
  };

    const onMenuClick = () => {
        isOpen ? changeOpen(false) : changeOpen(true);
    };

    const bodyEl = document.querySelector("body");    
    isOpen ? bodyEl.style.overflow = 'hidden' : bodyEl.style.overflow = 'auto';

    return (
        <header className={changeStyle}>
            
            <div className={style.container}>
                <div><Logo /></div>
                
                
                <div className={style.wrapper}>
                    <HeaderMenu />
                    <UserInfo />
                    {isLogin && 
                        // <button onClick={handleClickLogOut}>
                            <svg  className={style.icon_logout}>
                                <use  href={`${sprite}#icon-sign-out`}></use>
                            </svg>
                        // </button>
                    }
                   
                
                <UserMenu onClick={onMenuClick} isOpen={isOpen} />
                    <MobileMenu onClick={onMenuClick} isOpen={isOpen} />
                    </div>
            </div>
            {/* <div className={style.wrapper_mobile}> */}
                
            {/* </div> */}
        </header>       
  );
};

export default Header;