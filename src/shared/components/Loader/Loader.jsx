import { createPortal } from "react-dom";
import { Triangle } from "react-loader-spinner";

import style from "./loader.module.scss";

const loaderRoot = document.getElementById("loader-root");

const Loader = () => {
  return createPortal(
    <div className={style.overlay}>
      <div className={style.loader}>
        <Triangle
          height="200"
          width="200"
          color="#ff6b09d9"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    </div>,
    loaderRoot
  );
};

export default Loader;
