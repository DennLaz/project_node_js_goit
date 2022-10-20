import React from "react";
import { useState, useEffect } from "react";

import style from "./header.module.scss";
import sprite from "../../assets/svg/sprite.svg"

import Logo from "../../shared/components/Logo";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
    const [isOpen, changeOpen] = useState(false);

    const onMenuClick = () => {
        isOpen ? changeOpen(false) : changeOpen(true);
    };

    const bodyEl = document.querySelector("body");    
    isOpen ? bodyEl.style.overflow = 'hidden' : bodyEl.style.overflow = 'auto';

    return (
        
        <header className={style.header}>
            <div className={style.container}>
                <Logo />
                <HeaderMenu />
                <UserMenu onClick={onMenuClick} isOpen={isOpen} />
                <MobileMenu onClick={onMenuClick} isOpen={isOpen} />
            </div>
        </header>
            
        
  );
};

export default Header;