import { useState } from "react";

import RadioFiled from "../../shared/components/RadioField/RadioField";

import QAtechnicalTraining from "../../temp/QAtechnicalTraining";

import style from "./questions.module.scss";

const Questions = () => {
  const [state, setState] = useState(0);

  const handleChecketd = (e) => {
    setState(e.target.value);
  };

  const arr = {
    question: "Verification is – ",
    questionId: 2,
    answers: [
      "In fact, it answers the question of whether the software is created and tested correctly and whether all the requirements are taken into account",
      "During the verification process, we make sure that all the created application functionality works correctly and logically, right",
      "The verification structure includes such components as verification of validated requirements, technical documentation and correct execution of program code at any stage of software development and testing",
      "Options 2 and 3 are correct",
      "All options are correct",
      "All options are incorrect",
    ],
    rightAnswer: "All options are correct",
  };

  const elements = arr.answers.map((el, idx) => {
    return (
      <li key={idx} className={style.list_item}>
        <input
          className={style.radio_input  }
          type="radio"
          id={idx}
          name={el}
          value={el}
          onChange={handleChecketd}
          checked={state === el ? true : false}
        />
        <label className={style.label} htmlFor={idx}>{el}</label>
      </li>
    );
  });

  return (
    <>
      <h3 className={style.question}>{arr.question}</h3>
      <ul className={style.list}>
      {elements}
      </ul>
    </>
  );
};

export default Questions;
