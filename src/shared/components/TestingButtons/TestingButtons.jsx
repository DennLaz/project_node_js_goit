import { useMediaPredicate } from "react-media-hook";
import PropTypes from "prop-types";

import sprite from "../../../assets/svg/sprite.svg"
import img from "../../../assets/finish.gif"
import style from './testing-buttons.module.scss'

const TestingButtons = (props) => {
  const isMobile = useMediaPredicate("(max-width: 767px)");

  const { type, onClick, active, text, disabled } = props;

  const setClass = () => {
  return active? style.btn_active : style.btn;
  }
    
  const setSvgClass = () => {
    return active? style.icon_reverse  : style.icon;
  }
  
  return (
          <button
            className={`${setClass()}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
            >
            {!active && !isMobile && <span className={style.text}>{text}</span> }
            {text !== "Finish test" && <svg className={`${setSvgClass()}`}>
                <use href={`${sprite}#icon-vector`}></use>
            </svg>}

            {text === "Finish test" && <img
            className={style.img}
            loading="lazy"
            src={img}
            alt="cat thinks"
          />}
            {active && !isMobile && <span className={style.text}>{text}</span> }
          </button>
);
};

TestingButtons.defaultProps = {
  type: "submit",
  onClick: () => {},
};

TestingButtons.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TestingButtons;
