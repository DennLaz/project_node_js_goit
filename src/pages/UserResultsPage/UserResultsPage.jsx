import { useSelector } from "react-redux";

import { ProgressBar } from "react-progressbar-fancy";

import { userName } from "../../redux/auth/authSelectors";

import style from "./userResultsPage.module.scss";

const UserResultsPage = () => {
  const name = useSelector(userName);

    const percTheori = 49
    const percTech = 78
  return (
    <div className="container">
      <h1 className={style.head_text}>Results {name}</h1>
      <div className={style.box_wrap}>
        <div className={style.theory_wrap}>
          <p>Theory</p>
          <p className={style.theory_text}>Attempts: 3 </p>
          { percTech < 50 ? <ProgressBar
            className="space"
            label={"Average mark"}
            progressColor={"red"}
            score={percTech}
          /> : <ProgressBar
            className="space"
            label={"Average mark"}
            progressColor={"green"}
            score={percTech}
          />}
        </div>
        <div className={style.tech_wrap}>
          <p>Technical</p>
          <p className={style.tech_text}>Attempts: 3 </p>
          { percTheori < 50 ? <ProgressBar
            className="space"
            label={"Average mark"}
            progressColor={"red"}
            score={percTheori}
          /> : <ProgressBar
            className="space"
            label={"Average mark"}
            progressColor={"green"}
            score={percTheori}
          />}
        </div>
      </div>
      <div>
        <h2 className={style.second_head_text}>Total user result</h2>
        <div className={style.total_result_wrap}>
          <p>Attempts: 3 </p>
          <p>Average mark: 60%</p>
        </div>
      </div>
    </div>
  );
};

export default UserResultsPage;
