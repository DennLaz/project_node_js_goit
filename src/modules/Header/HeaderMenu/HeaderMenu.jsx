import { NavLink } from 'react-router-dom';

import { items } from '../items';

import style from './header-menu.module.scss';

export function changeClassName({ isActive }) {
  const styleLink = isActive ? style.isActive : style.link;
  return styleLink;
}

function HeaderMenu() {
  
    const findItems = items.filter(item => !item.private);

  const elements = findItems.map(({id, link, title}) => 
    <li key={id} className={style.item}>
      <NavLink className={changeClassName} to={link}>
        {title}
      </NavLink>
    </li>
);

    return (
        <ul className={style.menu}>
            {elements}
        </ul>
  );
}
export default HeaderMenu;