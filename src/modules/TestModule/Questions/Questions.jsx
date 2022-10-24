import PropTypes from "prop-types";
import { useState } from "react";

import TestingButtons from "../../../shared/components/TestingButtons";
import Question from "./Question";
import Button from "../../../shared/components/Button";
import style from "./questions.module.scss";


const Questions = ({
  arrOfQuestions,
  arrOfAnswers,
  onSelect,
  testName,
  onStopClick,
  onFinishTest,
  
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  // On Answer Selecter
  const onSelectAnswer = (value) => {
    onSelect(value);
  };
  // ******************

  // Buttons control Test
  const onNextClick = () => {
    setQuestionIndex((prev) => {
      return (prev += 1);
    });
  };
  const onBackClick = () => {
    setQuestionIndex((prev) => {
      return (prev -= 1);
    });
  };

  const confirmTest = () => {
    let idx = null;
    if (
      arrOfAnswers.current.every((el, i) => {
        idx = i;
        return el.answer !== "";
      })
    ) {
      
      onFinishTest(arrOfAnswers.current)
      return;
    }
    setQuestionIndex(idx);
  };
  // ******************
  const elements = arrOfQuestions.map((_, idx) => {
    return (
      <li style={ questionIndex===idx? {border: "2px solid black" }: {border: "2px solid transparent" }}
        key={idx}
        onClick={() => setQuestionIndex(idx)}
        className={
          arrOfAnswers.current[idx].answer === "" ? style.item : style.complete
        }
        
      >
        <p>{idx + 1}</p>
      </li>
    );
  });

  return (
    <>
      <div className="container">
        <div className={style.upper_wrap}>
          {testName === "theory" && <p>[ Testing theory_ ]</p>}
          {testName === "tech" && <p>[ Testing technical_ ]</p>}
          <Button
            text="Stop test"
            type="button"
            active="true"
            className={style.btn}
            onClick={onStopClick}
          />
        </div>
        <div className={style.wrap}>
          <p className={style.text}>
            Question{" "}
            <span className={style.active_text}>{questionIndex + 1}</span>/12
          </p>
          <Question
            selectedAnswer={arrOfAnswers.current[questionIndex].answer}
            item={arrOfQuestions[questionIndex]}
            onClick={onSelectAnswer}
          />
        </div>
        <ul className={style.list}>{elements}</ul>
        <div className={style.wrapper}>
        <TestingButtons
          disabled={questionIndex === 0 ? true : false}
          type="button"
          text="Previous question"
          onClick={onBackClick}
          active={true}
        >
          Back
        </TestingButtons>
        {questionIndex < 11 && (
          <TestingButtons text="Next question" type="button" onClick={onNextClick}>
            
          </TestingButtons>
          )}
          
        {questionIndex === 11 && (
          <TestingButtons text="Finish test" type="button" onClick={confirmTest}>
            </TestingButtons>
            
          )}
          </div>
      </div>
    </>
  );
};

Questions.defaultProps = {
  onStopClick: () => {},
  onSelect: () => {},
  arrOfQuestions: [],
  arrOfAnswers: {},
  onFinishTest: ()=>{},
};

Questions.propTypes = {
  onStopClick: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onFinishTest: PropTypes.func.isRequired,
 

  testName: PropTypes.string.isRequired,
  arrOfQuestions: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      answers: PropTypes.arrayOf(PropTypes.string.isRequired),
    })
  ),
  arrOfAnswers: PropTypes.shape({
    current: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
      })
    ),
  }),
};

export default Questions;
