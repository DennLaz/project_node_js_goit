import React from "react";

// import { useTheme } from "../../../shared/hooks/useTheme";

import style from "../materials.module.scss";

const Literature = () => {
  // const { theme, setTheme } = useTheme();

  // const changeStyle = theme === 'dark' ? style.title : style.title_dark;
  
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