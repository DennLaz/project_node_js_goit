import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import styles from "./results.module.scss";
import DisplayImages from "./DisplayImages";

const Results = ({ value }) => {
  const percent = Number(value);
  const Correct = Math.round((percent * 100) / 12);
  const Incorrect = 100 - Correct;
  const data = [
    {
      name: "Correct",
      value: Correct,
    },
    {
      name: "Incorrect",
      value: Incorrect,
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
          <PieChart width={300} height={300}>
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
          </PieChart>
        </div>
        <div className={styles.answers}>
          <p className={styles.text_answer}>
            Correct answers - <span className={styles.span}>{value}</span>{" "}
          </p>
          <p className={styles.text_item}>
            Total questions - <span className={styles.span}>12</span>{" "}
          </p>
        </div>
        {DisplayImages(Correct)}

        <button className={styles.btn}>Try again</button>
      </div>
    </div>
  );
};
export default Results;
