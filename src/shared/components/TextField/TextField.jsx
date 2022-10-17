import { nanoid } from "@reduxjs/toolkit";
import { useMemo } from "react";
import PropTypes from "prop-types";

import style from "./textField.module.css";

const TextField = (props) => {
  const {
    name,
    value,
    onChange,
    placeholder,
    required,
    type,
    pattern,
    title,
    // minLength,
    // maxLength,
    // min,
    // max,
  } = props;

  const id = useMemo(() => nanoid(), []);

  return (
    <div>
      <input
        onChange={onChange}
        id={id}
        className={style.input}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        title={title}
        // minLength={minLength}
        // maxLength={maxLength}
        // min={min}
        // max={max}
      />
    </div>
  );
};
TextField.defaultProps = {
  type: "text",
  required: true,
  onChange: () => {},
};

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
};

export default TextField;