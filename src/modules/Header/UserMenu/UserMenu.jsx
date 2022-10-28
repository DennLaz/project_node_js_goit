import PropTypes from 'prop-types';

import sprite from "../../../assets/svg/sprite.svg"
import style from "./user-menu.module.scss";

function UserMenu({onClick, isOpen}) {

    return (
        <>
            <div>
                {isOpen ? <svg  onClick={onClick} className={style.icon_menu}>
                    <use href={`${sprite}#icon-close`}></use>
                </svg> : <svg onClick={onClick} className={style.icon_close}>
                    <use href={`${sprite}#icon-menu`}></use>
                </svg>}
            </div>
        </>
    )
}

export default UserMenu;

UserMenu.defaultProps = {
    onClick: () => {},
}

UserMenu.propTypes = { 
    onClick: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
}