import { nanoid } from "@reduxjs/toolkit";
import { useMemo } from "react";

import PropTypes from "prop-types"

import style from "./radioField.module.scss"

const RadioFiled = (props) => {
    const { lable, type, checked, onChange, value, name } = props;

    const id = useMemo(() => nanoid(), [])
    
    return (
        <div>
            <label htmlFor={id}> {lable} </label>
            <input onChange={onChange} id={id} type={type} checked={ checked} name={name} value={value} />
        </div>
    )
}

RadioFiled.defaultProps = {
    type: "radio",
    onChange: () => {},
}

RadioFiled.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: () => { },
    checked: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}

export default RadioFiled;