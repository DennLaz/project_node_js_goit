import style from "./authPage.module.scss";

const AuthPage = () => {
  return (
    <main>
      <div className="container">
        <h1 className={style.text}>Pro Test</h1>
        <div className={style.auth_wrap}>
          <p className={style.desc_text}>
          <span className={style.text_wrap}>[ </span>We will help you find weak
          points in knowledge so that you can strengthen it. We will show you
          what is relevant to know for a
          <span className={style.text_wrap}> QA Engineer</span> and will try to
          make the learning process more diverse_
          <span className={style.text_wrap}> ]</span>
        </p>
        </div>
      </div>
    </main>
  );
};

export default AuthPage;
