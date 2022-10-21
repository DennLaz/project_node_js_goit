import { useCallback, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNewUser } from "../../redux/auth/authOperations";
import RegisterForm from "../../modules/RegisterForm";
import Loader from "../../shared/components/Loader"

import { getErrorLoadingAuth, userName } from "../../redux/auth/authSelectors";

import style from "./registerPage.module.scss";

const RegisterPage = () => {
  const dispath = useDispatch();
  const naigate = useNavigate();

  const { loading} = useSelector(getErrorLoadingAuth);

  // const RegisterOk = useSelector(userName)

  // useEffect(() => {
  //   const checkRegistered = () => {
  //     return naigate("/login")
  //   } 

  //   if (RegisterOk) {
  //     checkRegistered();
  //   }
  // }, [RegisterOk, naigate])

  const onSubmit = useCallback((userData) => {
    dispath(createNewUser(userData));
  }, [dispath]);

  return (
    <div className="container">
      <div className={style.wrapper}>
        <h2 className={style.text}>
          Register or login to our app using e-mail and password:
        </h2>
        <RegisterForm onSubmit={onSubmit} />
        {loading && <Loader />}
      </div>
    </div>
  );
};

export default RegisterPage;
