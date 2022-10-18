import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"

import useForm from "../../shared/hooks/useForm"
import TextField from "../../shared/components/TextField"

import fields from "./fields"
import initialState from "./initialState"

import style from "./registerForm.module.css"

const RegisterForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState });

    const { name, email, password } = state;

    const navigate = useNavigate();
    const handleClick = () => {
        return navigate("/register");
    }

    return (
        <form className="" onSubmit={handleSubmit}>
            <TextField onChange={handleChange} value={name} {...fields.name} className={style.input} />
            <TextField onChange={handleChange} value={email} {...fields.email} className={style.input} />
            <TextField onChange={handleChange} value={password} {...fields.password} />
            <div className=""></div>
        </form>
    )
}

RegisterForm.defaultProps = {
    onSubmit: () => { },
}

RegisterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default RegisterForm;