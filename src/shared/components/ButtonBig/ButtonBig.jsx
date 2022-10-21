import PropTypes from "prop-types";
import sprite from "../../../assets/svg/sprite.svg"
import style from "./buttonBig.module.scss";

const ButtonBig = ({ type, text, onClick, orang }) => {
  const setClass = () => {
    return orang? style.btn_orang : style.btn;
  }
  return (
    
      <button className={setClass()} onClick={onClick} type={type}>
        {text}
        <svg className={style.icon}>
          <use href={`${sprite}#icon-vector`}></use>
        </svg>
      </button>
      
    
  );
};

ButtonBig.defaultProps = {
  orang: false,
  type: "submit",
  onClick: () => {},
};

ButtonBig.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ButtonBig;

// text ="QA technical training"

// text ="Testing theory"
// orang
