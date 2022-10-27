import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMediaPredicate } from "react-media-hook";

import { ProgressBar } from "react-progressbar-fancy";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import {getUserResult} from "../../services/API/api"
import style from "./userResultsPage.module.scss";

const UserResultsPage = () => {

  const mobile = useMediaPredicate("(max-width: 767px)");
  const tabletDesc = useMediaPredicate("(min-width: 768px)");

  const navigate = useNavigate()
  const { id } = useParams()

  const [state, setState] = useState({
    user: {},
    loading: false,
    error: null,
  }) 
  
  useEffect(() => {
    if (!state.user?.username) {
      const fetchResult = async () => {
      setState(prevState => ({
        ...prevState,
        loading: true,
        error: false,
      }))
    
    try {
      const data = await getUserResult(id)
      setState(prevState => ({
        ...prevState,
        user: { ...data.user },
        loading: false,
      }))
    } catch (error) {
      setState(prevState => ({
        ...prevState,
        loading: false,
        error
      }))
      navigate("*")
      }
      };
    fetchResult()
    }
    
  }, [id, navigate, state.user])

  const { user } = state

  const {username, email, techCounter, techResults, theoryCounter, theoryResults} = user
  
  const percentTechResult = Math.round(techResults * 100)
  const percentTheoryResult = Math.round(theoryResults * 100)
  
  const total = Math.round((techCounter * percentTechResult + theoryCounter * percentTheoryResult) / (theoryCounter + techCounter))
  const totalAttemps = theoryCounter + techCounter

  const theoryEl = () => percentTheoryResult < 50 ? (
           <ProgressBar
              className="space"
              label={"Average mark:"}
              progressColor={"red"}
              score={percentTheoryResult}
            />
          ) : (
            <ProgressBar
              className="space"
              label={"Average mark:"}
              progressColor={"green"}
              score={percentTheoryResult}
            />
  )
  
  const techEl = () => percentTechResult < 50 ? (
            <ProgressBar
              className="space"
              label={"Average mark:"}
              progressColor={"red"}
              score={percentTechResult}
            />
          ) : (
            <ProgressBar
              className="space"
              label={"Average mark:"}
              progressColor={"green"}
              score={percentTechResult}
            />
          )

  return (
    <div className="container">
      <h1 className={style.head_text}>Results {username}</h1>
      <div className={style.box_wrap}>
        <div className={style.theory_wrap}>
          <p className={style.grup_text}>Theory</p>
          <p className={style.theory_text}>Attempts: <span className={style.span_wrap}>{theoryCounter}</span> </p>
          {mobile && <p className={style.mob_text}>Average mark: <span className={style.span_wrap}>{percentTheoryResult}% </span></p>}

          {tabletDesc && theoryEl()}
          
        </div>
        <div className={style.tech_wrap}>
          <p className={style.grup_text}>Technical</p>
          <p className={style.tech_text}>Attempts: <span className={style.span_wrap}>{techCounter}</span> </p>
          {mobile && <p className={style.mob_text}>Average mark: <span className={style.span_wrap}>{percentTechResult}%</span> </p>}
          {tabletDesc && techEl()}
        </div>
      </div>
      <div>
        <h2 className={style.second_head_text}>Total result</h2>
        <div className={style.total_result_wrap}>
          <p>Attempts: <span className={style.span_wrap}> {totalAttemps}</span></p>
          <p>Avarage mark: </p>
          <CircularProgressbar
                className={style.circle}
                value={100}
                text={`${total}%`}
                maxValue={720}
                styles={buildStyles({
                  textSize: "16px",
                  textColor: "#f88",
                  pathColor: `rgb(255, 107, 1)`,
                  backgroundColor: "green",
                  pathTransitionDuration: 1,
                })}
              />
        </div>
        <div className={style.contacts_wrapper}>
          <p>Contacts {username}:</p>
          <a className={style.contact_link} href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
    </div>
  );
};

export default UserResultsPage;


