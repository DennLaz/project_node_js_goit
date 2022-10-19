import React from "react";
import {Link} from 'react-router-dom';
import style from "./materials.module.scss";

const Materials = () => {
  return (
    // <div className={style.materials}>
      <div className={`container  ${style.wrapper}`}>
        <div className={style.literature}>
          <h2 className={style.title}>Useful literature</h2>
          <div className={style.vector}></div>
          <ol type="1" className={style.list}>
            <li>Testing dot.com Savin.</li>
            <li>A mental hospital in the hands of patients.</li>
            <li>Scrum. J. Sutherland.</li>
          </ol>
        </div>
        <div className={style.resources}>
          <h2 className={style.title}>Useful resources</h2>
          <div className={style.vector}></div>
          <ol type="1" className={style.list}>
            <li>
              <Link to={{ pathname: "//dou.ua/" }} className={style.link}target="_blank">dou.ua</Link>
            </li>
            <li>
              <Link to={{ pathname: "//habr.com/ru/all/" }} className={style.link}target="_blank">Habr</Link>
            </li>
            <li>
              <Link to={{ pathname: "//www.facebook.com/groups/163229277483308/" }} className={style.link}target="_blank">facebook.com/QA</Link>
            </li>
            <li>
              <Link to={{ pathname: "//goit.ua/" }} className={style.link}target="_blank">goit.ua</Link>
            </li>
          </ol>
        </div>
      </div>
    // </div>
  );
};

export default Materials;