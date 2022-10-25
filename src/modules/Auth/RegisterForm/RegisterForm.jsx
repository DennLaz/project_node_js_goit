
import PropTypes from "prop-types"

import useForm from "../../../shared/hooks/useForm"
import TextField from "../../../shared/components/TextField"
import Button from "../../../shared/components/Button/Button";

import fields from "./fields"
import initialState from "./initialState"

import style from "./registerForm.module.scss"

const RegisterForm = ({ onSubmit, onClick }) => {
    const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState });

    const { username, email, password } = state;

    
    const handleClick = () => {
        onClick("login")
        return
    }

    return (
        <>
        <p className={style.register_text}>
          Register or login to our app using e-mail and password:
        </p>
        <form className="" onSubmit={handleSubmit}>
            <TextField onChange={handleChange} value={username} {...fields.name} className={style.input} />
            <TextField onChange={handleChange} value={email} {...fields.email} className={style.input} />
            <TextField onChange={handleChange} value={password} {...fields.password} className={style.last_input}/>
            <div className={style.wrap}>
                <Button text="Sign in" type="button" onClick={handleClick}/>
                <Button text="Sign up" type="submite" active="true" />
            </div>
        </form>
        </>
    )
}

RegisterForm.defaultProps = {
    onSubmit: () => { },
    onClick:()=>{},
}

RegisterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
}

export default RegisterForm;