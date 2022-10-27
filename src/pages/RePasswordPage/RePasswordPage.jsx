import { useState } from "react";
import { useNavigate } from "react-router";

import TextField from "../../shared/components/TextField";
import Button from "../../shared/components/Button/Button";

import { sendNewPassword } from "../../services/API/api"
import Loader from "../../shared/components/Loader"
import Alert from "../../shared/components/Alert"

import useForm from "../../shared/hooks/useForm"
import fields from "./fields";
import style from "./rePasswordPage.module.scss"

const RePasswordPage = () => {

    const [load, setLoad] = useState(false)
    const [alert, setAlert] = useState(false)

    const navigate = useNavigate()
    const onSubmit = async (email) => {
        try {
            setLoad(true)
            await sendNewPassword(email)
            setLoad(false)
            setAlert(true)
            setTimeout(() => {
                navigate("/")
            }, 5000)
        } catch (error) {

            setLoad(false)
        }
    }

    const initialState = {
        email: ""
    }

    const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState })
    const { email } = state;

    return (
        <div className={style.wrap}>
            <div className={`container ${style.wrap_content}`}>
                <p className={style.text}>Enter your email to recover your password:</p>
                <form onSubmit={handleSubmit}>
                    <TextField onChange={handleChange} value={email} {...fields.email} className={style.input } />
                    <Button text="send new password" type='submit' active className={style.btn } />
                </form>
                {alert && <Alert message="Check your E-mail" type="success"/>}
                {load && <Loader />}
            </div>
        </div>
    )
 }

export default RePasswordPage;