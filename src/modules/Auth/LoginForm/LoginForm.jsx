
import PropTypes from "prop-types";

import useForm from "../../../shared/hooks/useForm";
import TextField from "../../../shared/components/TextField";
import Button from "../../../shared/components/Button/Button";

import fields from "./fields";
import initialState from "./initialState";

import style from "./loginForm.module.scss"

const LoginForm = ({ onSubmit, onClick }) => {
    const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState })
    
    const { email, password } = state;
   
    const handleClick = () => {
        onClick("register")
        return
    }

    return (
        <form className="" onSubmit={handleSubmit} >
            <TextField onChange={handleChange} value={email} {...fields.email} className={style.input}/>
            <TextField onChange={handleChange} value={password} {...fields.password} className={style.last_input}/>
            <div className={style.wrap}>
                <Button text="Sign in" type="submit" active="true" />
                <Button text="Sign up" type="button" onClick={handleClick}/>
            </div>
        </form>
    )
}

LoginForm.defaultProps = {
    onSubmit: ()=> {},
    onClick:()=>{},
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default LoginForm;