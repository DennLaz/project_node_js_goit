import PropTypes from "prop-types"

import style from "./radioField.module.scss"

const RadioFiled = (props) => {
    const { lable, type, checked, onChange, value, name, id, htmlFor } = props;
    
    return (
        <>
            <label htmlFor={htmlFor}> {lable} </label>
            <input onChange={onChange} id={id} type={type} checked={ checked} name={name} value={value} />
        </>
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