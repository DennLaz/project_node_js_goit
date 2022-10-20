import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"

import useForm from "../../shared/hooks/useForm"
import TextField from "../../shared/components/TextField"
import Button from "../../shared/components/Button/Button";

import fields from "./fields"
import initialState from "./initialState"

import style from "./registerForm.module.scss"

const RegisterForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState });

    const { username, email, password } = state;

    const navigate = useNavigate();
    const handleClick = () => {
        return navigate("/login");
    }

    return (
        <form className="" onSubmit={handleSubmit}>
            <TextField onChange={handleChange} value={username} {...fields.name} className={style.input} />
            <TextField onChange={handleChange} value={email} {...fields.email} className={style.input} />
            <TextField onChange={handleChange} value={password} {...fields.password} className={style.last_input}/>
            <div className={style.wrap}>
                <Button text="Sign in" type="button" onClick={handleClick}/>
                <Button text="Sign up" type="submite" active="true" />
            </div>
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