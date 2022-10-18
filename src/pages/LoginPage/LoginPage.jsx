import LoginForm from "../../modules/LoginForm";

import style from "./loginPage.module.css";

const LoginPage = () => {
  return (
    <div className="container">
      <div className={style.wrapper}>
        <h2 className={style.text}>
          Login to our app using e-mail and password:
        </h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
