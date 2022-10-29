import { NavLink } from 'react-router-dom';
import useAuth from "../../../shared/hooks/useAuth";

import { items } from '../items';

import style from './header-menu.module.scss';

export function changeClassName({ isActive }) {
  const styleLink = isActive ? style.isActive : style.link;
  return styleLink;
}

function HeaderMenu() {

  const isLogin = useAuth();
  
  const findItems = items.filter(item => !item.private);
  const publicItems = items.filter(item => item.private === false || item.private === true);
  // const secretItems = items.filter(item => !item.private && item.secret === true);

  const elements = findItems.map(({id, link, title}) => 
    <li key={id} className={style.item}>
      <NavLink className={changeClassName} to={link}>
        {title}
      </NavLink>
    </li>
  );
  
  const publicElements = publicItems.map(({id, link, title}) => 
    <li key={id} className={style.public_item}>
      <NavLink className={changeClassName} to={link}>
        {title}
      </NavLink>
    </li>
  );

  // const secretElements = secretItems.map(({id, link, title}) => 
  //   <li key={id} className={style.item}>
  //     <NavLink className={changeClassName} to={link}>
  //       {title}
  //     </NavLink>
  //   </li>
  // );

  return (
      <> 
      {
        isLogin ? <div className={style.wrapper}> <ul className={style.public_menu}>
              {publicElements}
        </ul></div> : <ul className={style.menu}>
              {elements}
      </ul>
      }

      {/* {
        isLogin && <div className={style.wrapper}> <ul className={style.public_menu}>
              {publicElements}
        </ul></div>}
      { !isLogin &&   <ul className={style.menu}>
              {secretElements}
      </ul>
      } */}
      </>
  );
}
export default HeaderMenu;