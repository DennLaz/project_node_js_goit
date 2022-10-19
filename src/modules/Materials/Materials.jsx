import React from "react";
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
              <a href="https://dou.ua/" className={style.link} rel="noopener noreferrer" target="_blank">
                dou.ua
              </a>
            </li>
            <li>
              <a href="https://habr.com/ru/all/" className={style.link} rel="noopener noreferrer" target="_blank">
                Habr
              </a>              
            </li>
            <li>
              <a href="https://www.facebook.com/" className={style.link} rel="noopener noreferrer" target="_blank">
              facebook.com/QA
              </a>              
            </li>
            <li>
              <a href="https://goit.ua/?lang=uk" className={style.link} rel="noopener noreferrer" target="_blank">
                goit.ua
              </a> 
            </li>
          </ol>
        </div>
      </div>
    // </div>
  );
};

export default Materials;