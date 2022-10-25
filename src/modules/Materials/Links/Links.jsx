import React from "react";
import {Link} from 'react-router-dom';
import ArrayLinks from './ArrayLinks'
import style from "../materials.module.scss";

const Links = () => {
  return (
    <div className={style.resources}>
      <h2 className={style.title}>Useful resources</h2>
      <div className={style.vector}></div>
      <ol type="1" className={style.list}>
        {ArrayLinks.map(({ name, link }) => (
            <li key={link}>
          <Link to={{ pathname: `${link}`}} className={style.link}target="_blank" rel="noreferrer noopener" >{name}</Link>
        </li>
        ))}
      </ol>
    </div>
  );
};

export default Links;