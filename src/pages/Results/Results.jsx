import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import styles from "./results.module.scss";
import displayImages from "./displayImages";
import { useMediaPredicate } from "react-media-hook";



const Results = ({ value }) => {
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
        {displayImages(correctAnswers)}

        <button className={styles.btn}>Try again</button>
      </div>
    </div>
  );
};
export default Results;


// const smallerThan768 = useMediaPredicate("(max-width: 768px)");
// const biggerThan1280 = useMediaPredicate("(min-width: 1280px)");
// const biggerThan768 = useMediaPredicate("(min-width: 768px)");


// import React, { PureComponent } from 'react';
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <PieChart width={400} height={400}>
//           <Pie
//             data={data}
//             cx="50%"
//             cy="50%"
//             labelLine={false}
//             label={renderCustomizedLabel}
//             outerRadius={80}
//             fill="#8884d8"
//             dataKey="value"
//           >
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//         </PieChart>
//       </ResponsiveContainer>
//     );
//   }
// }
