import { useEffect, useState } from "react";
import { getTopResult } from "../../services/API/api";
import { useMediaPredicate } from "react-media-hook";

import Loader from "../../shared/components/Loader"

import style from "./topResultsPage.module.scss";


const TopResultsPage = () => {
    const [items, setItems] = useState({});
    const [loader, setLoader] = useState(false)

  const mobile = useMediaPredicate("(max-width: 767px)");
  const tabletDesc = useMediaPredicate("(min-width: 768px)");

  useEffect(() => {
    if (!items?.techResults) {
      getItems();
    }
    async function getItems() {
        try {
          setLoader(true)
          const data = await getTopResult();
            setItems({ ...data })
            setLoader(false)
        } catch (error) {
            setLoader(false)
          console.log(error);
      }
    }
  }, [items?.techResults]);
    

  const theoryElement = items.topTheory?.map((el) => {
    return (
      <tr key={el.email}>
        <td>{el.email}</td>
        {tabletDesc && <td>{el.theoryCounter}</td>}
        <td>{`${Math.round(el.theoryResults * 100)}%`}</td>
      </tr>
    );
  });

  const techElement = items.topTech?.map((el) => {
    return (
      <tr key={el.email}>
        <td>{el.email}</td>
        {tabletDesc && <td>{el.techCounter}</td>}
        <td>{`${Math.round(el.techResults * 100)}%`}</td>
      </tr>
    );
  });

  return (
    <div className="container">
      <h2 className={style.head_text}>Top-10:</h2>
      <div className={style.table_wrap}>
        <table className={style.table}>
          <caption>Theory Results</caption>
          <thead>
            <tr>
              <th>E-mail</th>
              {tabletDesc && <th>Quantity</th>}
              {mobile && <th>%</th>}
              {tabletDesc && <th>Result</th>}
            </tr>
          </thead>
          <tbody>{theoryElement}</tbody>
        </table>

        <table className={style.table}>
          <caption>Technical Results</caption>
          <thead>
            <tr>
              <th>E-mail</th>
              {tabletDesc && <th>Quantity</th>}
              {mobile && <th>%</th>}
              {tabletDesc && <th>Result</th>}
            </tr>
          </thead>
          <tbody>{techElement}</tbody>
        </table>
          </div>
          {loader && <Loader />}
    </div>
  );
};

export default TopResultsPage;
