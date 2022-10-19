import { useState } from "react";

import RadioFiled from "../../shared/components/RadioField/RadioField";

import QAtechnicalTraining from "../../temp/QAtechnicalTraining";

import style from "./questions.module.scss";

const Questions = () => {

    const [state, setState] = useState(0);

    const handleChecketd = (e) => {
        setState(e.target.value) 
    }

  const arr = {
    question: "How many testing principles are there?",
    questionId: 1,
    answers: ["5", "6", "7", "8", "9", "I don't know"],
    rightAnswer: "7",
  };

    const elements = arr.answers.map((el, idx) => {
    return (
      <li key={idx}>
            <input type="radio" id={idx} name={el} value={el} onChange={handleChecketd} checked={ state === el ? true : false } />
        <label htmlFor={idx}>{el}</label>
      </li>
    );
  });

    return <>
        
        <h3>{arr.question }</h3>
        {elements}</>;
};

export default Questions;
