import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import useForm from "../../shared/hooks/useForm";
import TextField from "../../shared/components/TextField";

import fields from "./fields";
import initialState from "./initialState";

import style from "./loginForm.module.css"

const LoginForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState })
    
    const { email, password } = state;

    const navigate = useNavigate();
    const handleClick = () => {
        return navigate("/login")
    }

    return (
        <form className="" onSubmit={handleSubmit} >
            <TextField onChange={handleChange} value={email} {...fields.email} className={style.input}/>
            <TextField onChange={handleChange} value={password} {...fields.password} />
            <div className=""></div>
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