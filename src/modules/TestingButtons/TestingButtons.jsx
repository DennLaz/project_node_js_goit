import PropTypes from "prop-types";

import sprite from "../../assets/svg/sprite.svg"
import style from './testing-buttons.module.scss'

const TestingButtons = (props) => {

  const { type, text, onClick, active, className } = props;
    
  const setClass = () => {
    return active? style.btn_active : style.btn;
  }
    
    return (
       <div className={style.wrapper}>
            <button
                className={`${setClass()} ${className}`}
                onClick={onClick}
                type={type}>
                {text}
                <svg className={style.icon_reverse}>
                    <use href={`${sprite}#icon-vector`}></use>
                </svg>
            </button>
            <button
                className={`${setClass()} ${className}`}
                onClick={onClick}
                type={type}>
                {text}
                <svg className={style.icon}>
                    <use href={`${sprite}#icon-vector`}></use>
                </svg>
            </button>
        </div>
  );
};

TestingButtons.defaultProps = {
  active: false,
  type: "submit",
  onClick: () => {},
};

TestingButtons.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TestingButtons;
