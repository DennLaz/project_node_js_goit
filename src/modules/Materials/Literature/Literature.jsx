import React from "react";
import style from "../materials.module.scss";

const Literature = () => {
  return (
    <div className={style.literature}>
      <h2 className={style.title}>Useful literature</h2>
      <div className={style.vector}></div>
      <ol type="1" className={style.list}>
        <li>Testing dot.com Savin.</li>
        <li>A mental hospital in the hands of patients.</li>
        <li>Scrum. J. Sutherland.</li>
      </ol>
    </div>
  );
};
export default Literature;