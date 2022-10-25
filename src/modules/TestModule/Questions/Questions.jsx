import { useState, useEffect } from "react";
import { useMediaPredicate } from "react-media-hook";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Alert from "../../../shared/components/Alert";

import PropTypes from "prop-types";

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
  const biggerThan768 = useMediaPredicate("(min-width: 768px)");
  const mobileTablet = useMediaPredicate("(max-width: 1279px)");
  const desc = useMediaPredicate("(min-width: 1280px)");

  const [questionIndex, setQuestionIndex] = useState(0);

  ////////////////////////////////////////////////////////////////////////////////  
  const [seconds, setSeconds] = useState(720);
  const [timerActive, setTimerActive] = useState(true);

  useEffect(() => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 1000, seconds - 1);
    } else if (seconds === 0) {
      onFinishTest(arrOfAnswers.current)
    } else {
      setTimerActive(false);
    }
  }, [seconds, timerActive, arrOfAnswers, onFinishTest]);


  function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

  const convertSeconds =(second) => {
    let min =  Math.floor(second / 60);
    let sec = Math.floor(second % 60)
    return {min, sec};
  }

  const { min, sec } = convertSeconds(seconds);

  let padMin = addLeadingZero(min)
  let padSec = addLeadingZero(sec)
  let percentage = Math.floor(seconds * 100 / 720)


  ////////////////////////////////////////////////////////////////////////////////

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
      onFinishTest(arrOfAnswers.current);
      return;
    }
    setQuestionIndex(idx);
  };
  // ******************
  const elements = arrOfQuestions.map((_, idx) => {
    return (
      <li
        style={
          questionIndex === idx
            ? { border: "2px solid #ff6b01" }
            : { border: "2px solid transparent" }
        }
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
          {testName === "theory" && (
            <p className={style.topic_text}>
              <span>[ Testing</span> theory_ ]
            </p>
          )}
          {testName === "tech" && (
            <p className={style.topic_text}>
              <span>[ Testing</span> technical_ ]
            </p>
          )}
          <div className={style.time_wrap}>
            { desc && <p className={style.time_text}>Time left:<span className={style.time}> {`${padMin}:${padSec}`}</span></p>}

            <div>
              {desc && <CircularProgressbar
                className={style.circle}
                value={seconds}
                text={`${percentage}%`}
                maxValue={720}
                styles={buildStyles({
                  textSize: "16px",
                  textColor: "#f88",
                  pathColor: `rgba(255, 107, 1, ${seconds / 100})`,
                  backgroundColor: "green",
                  pathTransitionDuration: 1,
                })}
              />}
              {mobileTablet && <CircularProgressbar
                className={style.circle}
                value={seconds}
                text={`${padMin}:${padSec}`}
                maxValue={720}
                styles={buildStyles({
                  textSize: "16px",
                  textColor: "#f88",
                  pathColor: `rgba(255, 107, 1, ${seconds / 100})`,
                  backgroundColor: "green",
                  pathTransitionDuration: 1,
                })}
              />}
            </div>
            </div>
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
        {biggerThan768 && <ul className={style.list}>{elements}</ul>}
        <div className={style.wrapper}>
        <TestingButtons
          disabled={questionIndex === 0 ? true : false}
          type="button"
          text="Previous question"
          onClick={onBackClick}
          active={true}
        />
        {questionIndex < 11 && (<TestingButtons text="Next question" type="button" onClick={onNextClick}/>)}
          
        {questionIndex === 11 && (<TestingButtons text="Finish test" type="button" onClick={confirmTest}/>)}
        {seconds === 719 && <Alert message="Your test has started we have 12 minutes to complete" type="success" />}
        {seconds === 60 && <Alert message="You have 1 minute left before the end of the test, hurry up..." type="failure" />}
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
  onFinishTest: () => {},
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
