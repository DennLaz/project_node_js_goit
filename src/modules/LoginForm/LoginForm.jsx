import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import useForm from "../../shared/hooks/useForm";
import TextField from "../../shared/components/TextField";
import Button from "../../shared/components/Button/Button";

import fields from "./fields";
import initialState from "./initialState";

import style from "./loginForm.module.scss"

const LoginForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState })
    
    const { email, password } = state;

    const navigate = useNavigate();
    const handleClick = () => {
        return navigate("/register")
    }

    return (
        <form className="" onSubmit={handleSubmit} >
            <TextField onChange={handleChange} value={email} {...fields.email} className={style.input}/>
            <TextField onChange={handleChange} value={password} {...fields.password} className={style.last_input}/>
            <div className={style.wrap}>
                <Button text="Sign in" type="submite" active="true" />
                <Button text="Sign up" type="button" onClick={handleClick}/>
            </div>
        </form>
    )
}

LoginForm.defaultProps = {
    onSubmit: ()=> {},
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default LoginForm;