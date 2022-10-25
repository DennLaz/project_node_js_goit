
import React from "react";
import { useMediaPredicate } from "react-media-hook";
import PropTypes from "prop-types";
import { PieChart, Pie, Cell } from "recharts";

import setDisplayImages from "./setDisplayImages";

import styles from "./result.module.scss";


const Result = ({ value, onClick }) => {
 const isMobile = useMediaPredicate("(max-width: 767px)");

  const percent = Number(value);
  const correctAnswers = Math.round((percent * 100) / 12);
  const incorrectAnswers = 100 - correctAnswers;
  const data = [
    {
      name: "correctAnswers",
      value: correctAnswers,
    },
    {
      name: "incorrectAnswers",
      value: incorrectAnswers,
    },
  ];
  const colors = ["#FF6B09", "#D7D7D7"];

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Results</h2>
        <p className={styles.text}>[Testing theory _]</p>
        <p className={styles.p}></p>
        <div className={styles.diagram}>
          {isMobile && <PieChart width={200} height={200}>
            <Pie
              dataKey="value"
              nameKey="name"
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={10}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} nameKey={entry.name} fill={colors[index]} />
              ))}
            </Pie>
          </PieChart>}
          {!isMobile && <PieChart width={300} height={300}>
            <Pie
              dataKey="value"
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
          </PieChart>}
        </div>
        <div className={styles.answers}>
          <p className={styles.text_answer}>
            Correct answers - <span className={styles.span}>{value}</span>{" "}
          </p>
          <p className={styles.text_item}>
            Total questions - <span className={styles.span}>12</span>{" "}
          </p>
        </div>
        {setDisplayImages(correctAnswers)}

        <button onClick={()=>onClick('ChoiceTest')} className={styles.btn}>Try again</button>
      </div>
    </div>
  );
};

Result.defaultProps = {
    onClick:()=>{},
    value: 10,
  };
  
  Result.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
  };

export default Result;


// const smallerThan768 = useMediaPredicate("(max-width: 768px)");
// const biggerThan1280 = useMediaPredicate("(min-width: 1280px)");
// const biggerThan768 = useMediaPredicate("(min-width: 768px)");
