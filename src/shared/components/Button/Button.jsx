import PropTypes from "prop-types";
import s from "./button.module.scss";

const Button = (props) => {

  const { type, text, onClick, active, className } = props;
    
  const setClass = () => {
    return active? s.btn_active : s.btn;
  }
    
  return (
    <button
        className={`${setClass()} ${className}`}
        onClick={onClick}
        type={type}>
        {text}
    </button>
  );
};

Button.defaultProps = {
  active: false,
  type: "submit",
  onClick: () => {},
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;