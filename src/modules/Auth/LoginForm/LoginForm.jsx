import {Link} from "react-router-dom"
import PropTypes from "prop-types";

import useForm from "../../../shared/hooks/useForm";
import TextField from "../../../shared/components/TextField";
import Button from "../../../shared/components/Button/Button";

import fields from "./fields";
import initialState from "./initialState";

import googleImg from "../../../assets/google.png"

import style from "./loginForm.module.scss"


const LoginForm = ({ onSubmit, onClick}) => {
    const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState })
    
    const { email, password } = state;
   
    const handleClick = () => {
        onClick("register")
        return
    }

    const path = "//node-project-pro-test.herokuapp.com/api/users/google"

    return (
        <>
            <div className={style.google_wrap}>
                <p className={style.google_text}>You can use your Google Account to authorize:</p>
                <Link to={{ pathname: `${path}`}} className={style.google_btn} rel="noreferrer noopener" > <img alt="google icon" src={googleImg} width="84" height="18"/></Link>
                {/* <a href="https://node-project-pro-test.herokuapp.com/api/users/google" rel="noreferrer noopener" className={style.google_btn}>
                    <img alt="google icon" src={googleImg} width="84" height="18"/>
                </a> */}
            </div>
        <p className={style.login_text}>
         Login to our app using e-mail and password:
        </p>
            <form className="" onSubmit={handleSubmit} >
            <TextField onChange={handleChange} value={email} {...fields.email} className={style.input}/>
            <TextField onChange={handleChange} value={password} {...fields.password} className={style.last_input}/>
            <div className={style.wrap}>
                <Button text="Sign in" type="submit" active="true" />
                <Button text="Sign up" type="button" onClick={handleClick}/>
            </div>
        </form>
        </>
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