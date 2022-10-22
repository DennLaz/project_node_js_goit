import PropTypes from "prop-types";

import ButtonBig from "../../../shared/components/ButtonBig";

import style from "./choiceTest.module.scss";

const ChoiceTest = ({ onClick }) => {
  return (
    <div className="">
      <h2 className={style.header_text}>
        <span>“Regression testing. What is it?</span> If the system compiles,
        that's good, if it boots, that's great!”
      </h2>
      <p className={style.name_text}>Linus Torvalds</p>
      <p className={style.desc_text}>Linux kernel creator, hacker, 1969</p>
      <div className={style.btn_wrap}>
        <div className={style.tech_btn}>
          <ButtonBig text="QA technical training"  onClick={()=>onClick("tech")}/>
        </div>
        <div className={style.teory_btn}>
          <ButtonBig text="Testing theory" accent onClick={()=>onClick("theory")} />
        </div>
      </div>
    </div>
  );
};

ChoiceTest.defaultProps = {
  onClick: () => {},
};

ChoiceTest.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ChoiceTest;
