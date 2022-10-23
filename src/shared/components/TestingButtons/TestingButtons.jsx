import { useMediaPredicate } from "react-media-hook";
import PropTypes from "prop-types";

import sprite from "../../../assets/svg/sprite.svg"
import style from './testing-buttons.module.scss'

const TestingButtons = (props) => {
  const isMobile = useMediaPredicate("(max-width: 767px)");
  const { type, onClick, active } = props;
    
    return (
        <div className={style.wrapper}>
            <button
                className={style.btn_active}
                onClick={onClick}
                type={type}
                >
                { <svg className={style.icon_reverse}>
                    <use href={`${sprite}#icon-vector`}></use>
                </svg>}
                {!isMobile && <span className={style.text}>Previous question</span>}
            </button>
            
            <button
                className={style.btn}
                onClick={onClick}
                type={type}
                >
                {!isMobile && <span className={style.text}>Next question</span>}
                { <svg className={style.icon}>
                    <use href={`${sprite}#icon-vector`}></use>
                </svg>}
            </button>

            {/* <button
                // disabled={true}
                className={`${setClass()}`}
                onClick={onClick}
                type="button"
                >
                {!isMobile && <span className={style.text}>Next question</span>}
                
                { <svg className={style.icon}>
                    <use href={`${sprite}#icon-vector`}></use>
                </svg>}
            </button> */}
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
  onClick: PropTypes.func.isRequired,
};

export default TestingButtons;
