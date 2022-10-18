import RegisterForm from "../../modules/RegisterForm";

import style from "./registerPage.module.css";

const RegisterPage = () => {
  return (
    <div className="container">
      <div className={style.wrapper}>
        <h2 className={style.text}>
          Register or login to our app using e-mail and password:
        </h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
