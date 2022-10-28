import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser, loginOldUser} from "../../redux/auth/authOperations";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

import {setEmailToRedux} from "../../redux/auth/authSlice"
import { userName } from "../../redux/auth/authSelectors";

import style from "./auth.module.scss";

const Auth = () => {
  const [state, setState] = useState("login");

  const navigate = useNavigate()

  const dispath = useDispatch();

  const userOk = useSelector(userName);
  

  useEffect(() => {
    if (userOk && userOk === "ok") {
      setState("login");
    }
  }, [userOk]);

  const registerNewUser =  useCallback(
       (userData) => {
         dispath(setEmailToRedux(userData.email))
       dispath(createNewUser(userData));
      navigate("/verify")
      
    },
    [dispath]
  );

  const loginUser = useCallback(
    (userData) => {
      dispath(loginOldUser(userData));
    },
    [dispath]
  );

  const handleClick = (value) => {
    setState(value);
  };

  return (
    <>
      <div className="container">
        <div className={style.main_wrapper}>
          <div>
            <h1 className={style.text}>Pro Test</h1>
            <div className={style.auth_wrap}>
              <p className={style.desc_text}>
                <span className={style.text_wrap}>[ </span>We will help you find
                weak points in knowledge so that you can strengthen it. We will
                show you what is relevant to know for a
                <span className={style.text_wrap}> QA Engineer</span> and will
                try to make the learning process more diverse_
                <span className={style.text_wrap}> ]</span>
              </p>
            </div>
          </div>

          <div className={style.form_wrapper}>
            {state === "login" && (
              <LoginForm onSubmit={loginUser} onClick={handleClick} />
            )}
            {state === "register" && (
              <RegisterForm onSubmit={registerNewUser} onClick={handleClick} />
            )}
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Auth;
