import React, { useEffect, useState } from "react";
import { useMediaPredicate } from "react-media-hook";
import PropTypes from "prop-types";
import { Circle } from "rc-progress";
import setDisplayImages from "./setDisplayImages";
import styles from "./result.module.scss";

const Result = ({ value, onClick }) => {
  const [progress, setProgress] = useState(0);

  const isMobile = useMediaPredicate("(max-width: 767px)");

  const percent = Number(value);
  const correctAnswers = Math.round((percent * 100) / 12);

  useEffect(() => {
    const percent = Number(value);
    const correctAnswers = Math.round((percent * 100) / 12);
    let i = 0;
    const timeId = setInterval(() => {
      if (i === 0 && value === 0) {
        clearInterval(timeId);
        setProgress(i);
        return;
      }
      setProgress((i += 1));
      if (i === correctAnswers) {
        clearInterval(timeId);
      }
    }, 100);
  }, [value]);

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Results</h2>
        <p className={styles.text}>[Testing theory _]</p>
        <p className={styles.p}></p>
        <div className={styles.diagram}>
          {isMobile && (
            <>
              <span className={styles.percent}>{progress}%</span>
              <Circle
                percent={progress}
                trailWidth={8}
                strokeWidth={10}
                strokeColor="#FF6B09"
              />
            </>
          )}
          {!isMobile && (
            <>
              <span className={styles.percent}>{progress}%</span>
              <Circle
                percent={progress}
                trailWidth={6}
                strokeWidth={8}
                strokeColor="#FF6B09"
              />
            </>
          )}
        </div>
        <div className={styles.answers}>
          <p className={styles.text_answer}>
            Correct answers - <span className={styles.span}>{value}</span>{" "}
          </p>
          <p className={styles.text_item}>
            Total questions - <span className={styles.span}>12</span>{" "}
          </p>
        </div>
        {correctAnswers === progress && setDisplayImages(correctAnswers)}

        <button onClick={() => onClick("ChoiceTest")} className={styles.btn}>
          Try again
        </button>
      </div>
    </div>
  );
};

Result.defaultProps = {
  onClick: () => {},
  value: 10,
};

Result.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default Result;

