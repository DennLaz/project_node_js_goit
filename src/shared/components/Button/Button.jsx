import PropTypes from "prop-types";
import s from "./button.module.scss";

const Button = (props) => {

  const { type, text, onClick, active, className, disabled } = props;
    
  const setClass = () => {
    return active? s.btn_active : s.btn;
  }
    
  return (
    <button
        className={`${setClass()} ${className}`}
        onClick={onClick}
      type={type}
    disabled={disabled} >
      {text}
      
    </button>
  );
};

Button.defaultProps = {
  active: false,
  type: "submit",
  onClick: () => { },
  disabled: false,
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default Button;