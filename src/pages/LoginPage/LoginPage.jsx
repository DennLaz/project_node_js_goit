import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import LoginForm from "../../modules/LoginForm";
import { loginOldUser } from "../../redux/auth/authOperations";

import { getErrorLoadingAuth} from "../../redux/auth/authSelectors";
import Loader from "../../shared/components/Loader"

import style from "./loginPage.module.scss";

const LoginPage = () => {
  const dispatch = useDispatch();

  const {loading } = useSelector(getErrorLoadingAuth)

  const handleSubmit = useCallback(
    (userData) => {
      dispatch(loginOldUser(userData));
    },
    [dispatch]
  );

  return (
    <div className="container">
      <div className={style.wrapper}>
        <h2 className={style.text}>
          Login to our app using e-mail and password:
        </h2>
        <LoginForm onSubmit={handleSubmit} />
        {loading && <Loader />}
      </div>
    </div>
  );
};

export default LoginPage;
