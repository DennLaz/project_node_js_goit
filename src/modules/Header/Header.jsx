import React from "react";
import { useState} from "react";
import { useDispatch } from "react-redux";

import { userLogout } from "../../redux/auth/authOperations";

import useAuth from "../../shared/hooks/useAuth";
import { useTheme } from "../../shared/hooks/useTheme";

import Logo from "../../shared/components/Logo";
import UserMenu from "./UserMenu";
import UserInfo from "./UserInfo"
import MobileMenu from "./MobileMenu";
import HeaderMenu from "./HeaderMenu";

import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import sprite from "../../assets/svg/sprite.svg"
import style from "./header.module.scss";

const Header = () => {
    const {theme, setTheme} = useTheme();
    const [isOpen, changeOpen] = useState(false);

    const isLogin = useAuth();
    const dispatch = useDispatch();
    
    const changeStyle = isLogin ? style.header : style.isActive;
    
    function onLogout() {
        dispatch(userLogout());
    }

    const onMenuClick = () => {
        isOpen ? changeOpen(false) : changeOpen(true);
    };

        const onUserClick = () => {
        isOpen && changeOpen(false);
    };

    const handleLightThemeClick = () => {
        setTheme('light')
    }
    const handleDarkThemeClick = () => {
        setTheme('dark')
    }

    const bodyEl = document.querySelector("body");    
    isOpen ? bodyEl.style.overflow = 'hidden' : bodyEl.style.overflow = 'auto';

    return (
        <header className={changeStyle}>
            
            <div className={`container ${style.container_header}`}>
                <div><Logo onClick={onUserClick} /></div>
                
                <div className={style.wrapper}>
                    {theme === 'dark' ?   <div className={style.dark} onClick={handleLightThemeClick}>
                        <NightlightOutlinedIcon/>
                    </div> : <div className={style.light} onClick={handleDarkThemeClick}>
                        <WbSunnyOutlinedIcon/>
                    </div>}
                    <HeaderMenu />
                    <UserInfo onClick={onUserClick} />
                    {isLogin && 
                    <svg onClick={onLogout}  className={style.icon_logout}>
                        <use  href={`${sprite}#icon-sign-out`}></use>
                    </svg>
                    }
                    <UserMenu onClick={onMenuClick} isOpen={isOpen} />
                    <MobileMenu onClick={onMenuClick} isOpen={isOpen} />
                </div>
            </div>
        </header>       
  );
};

export default Header;