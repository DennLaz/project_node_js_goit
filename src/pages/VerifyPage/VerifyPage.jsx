import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { getUserEmail } from "../../redux/auth/authSelectors";
import { reSendEmail } from "../../services/API/api";
import Loader from "../../shared/components/Loader";
import Alert from "../../shared/components/Alert";

import Button from "../../shared/components/Button";
import catImg from "../../assets/resultPage/catLoading.gif";

import style from "./verifyPage.module.scss";

const VerifyPage = () => {
  const [load, setLoad] = useState(false);
  const [alert, setAlert] = useState(false);
  const [time, setTime] = useState(60);
  const [activeTime, setActiveTime] = useState(false);

  useEffect(() => {
    if (activeTime && time > 0) {
      setTimeout(setTime, 1000, time - 1);
      if (alert) {
        setAlert(false);
      }
    } else if (time === 0) {
      setActiveTime(false);
    }
  }, [time, activeTime, setActiveTime, setAlert, alert]);

  const navigate = useNavigate();

  const userEmail = useSelector(getUserEmail);

  useEffect(() => {
    if (!userEmail) {
      navigate("/")
    }
  }, [userEmail, navigate]);

  const handleClick = () => {
    return navigate("/");
  };

  const sendEmail = async () => {
    try {
      setLoad(true);
      setTime(60);
      setActiveTime(true);
      await reSendEmail(userEmail);
      setLoad(false);
      setAlert(true);
    } catch (error) {
      console.log(error);
      setLoad(false);
    }
  };

  return (
    <div className="container">
      <img
        className={style.img}
        loading="lazy"
        src={catImg}
        alt="shocked cat"
      />
      {activeTime ? (
        <h2 className={style.text}>
          A confirmation was sent to the
          <span className={style.text_wrap_email}>{userEmail}</span>, if the
          email is not received, you can send it again in{" "}
          <span className={style.text_wrap_sec}>{time}</span> seconds...
        </h2>
      ) : (
        <h2 className={style.text}>
          A confirmation was sent to the
          <span className={style.text_wrap_email}>{userEmail}</span>, if the
          email is not received -
          <Button
            className={style.res_btn_activ}
            type="button"
            text="click here..."
            onClick={sendEmail}
          />
        </h2>
      )}
      <div className={style.btn_wrap}>
        <Button
          className={style.back_login_btn}
          active
          type="button"
          text="Back to login"
          onClick={handleClick}
        />
      </div>
      {alert && <Alert message="Check your E-mail" type="success" />}
      {load && <Loader />}
    </div>
  );
};

export default VerifyPage;
