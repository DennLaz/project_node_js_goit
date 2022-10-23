
import PropTypes from "prop-types";

import {  useEffect, useState } from "react";

import style from "./question.module.scss"

const Question = ({item, onClick, selectedAnswer})=>{
  const [state, setState] = useState('');

  useEffect(()=>{
      setState(selectedAnswer)
  }, [item, selectedAnswer])

  
  const handleChecked = (answer) => {
    setState(answer);
    onClick({answer, _id: item._id});
  };

  const elements = item.answers.map((el, idx) => {
    return (
      <li key={idx} className={style.list_item}>
        <input
          className={style.radio_input  }
          type="radio"
          id={idx}
          name={el}
          value={el}
          onChange={()=>handleChecked(el)}
          checked={el===state? true: false}
        />
        <label className={style.label} htmlFor={idx}>{el}</label>
      </li>
    );
  });

  return (
    <>
      <h3 className={style.question}>{item.question}</h3>
      <ul className={style.list}>
      {elements}
      </ul>
    </>
  );
}

Question.defaultProps = {
  item:{},
  onClick: ()=>{},
  selectedAnswer:{},
};

Question.propTypes = {
  
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
  onClick: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string.isRequired,
};
export default Question;
