import { useState, useRef,  useCallback, useEffect, } from "react";

import ChoiceTest from "./ChoiceTest";
import Questions from "./Questions";
import Result from "./Result";
import Loader from "../../shared/components/Loader"


import {fetchQuestions, getResultTest} from "../../services/API/questions";


const TestModule = () => {
  const [step, setStep] = useState("ChoiceTest");
  const [testName, setTestName] = useState("theory");
  const [loading, setLoading] = useState(false);
  const [arrOfQuestions, setArrOfQuestions]=useState([]);
  const [result, setResult] = useState(0);

let arrOfAnswers= useRef([]);



useEffect(()=>{
  if(arrOfQuestions.length>0){
    arrOfAnswers.current= arrOfQuestions.map(el=>{
      return {_id:el._id, answer:'' }
    })
    setStep("Questions");
  }
},[arrOfQuestions])




const onFinishTest= useCallback(async (value)=>{
  try {
    setTestName(testName);
    setLoading(true);
    const result = await getResultTest(value)
    setResult(result.rightAnswers);
    setStep("Result")
    setLoading(false);
  } catch (error) {
    setLoading(false);
      console.log(error);
  }
  
 

},[testName])

const onStopTest=()=>{
  setTestName("");
  setArrOfQuestions("");
  arrOfAnswers.current=[];
  setStep("ChoiceTest");
}



const setUserAnswerInArrOfAnswer=(value)=>{
    arrOfAnswers.current.forEach(el=>{   
        if(el._id===value._id){
            el.answer=value.answer;
            return
        }
    })
}

 const choiceAndGetTest =useCallback( async (testName) => {
    try {
      setTestName(testName);
      setLoading(true);
      const result = await fetchQuestions(testName)
      setArrOfQuestions(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
        console.log(error);
    }
    
   
   

  },[setTestName]);



  return (
    <>
      {step === "ChoiceTest" && <ChoiceTest onClick={choiceAndGetTest} />}
      {step === "Questions" && (
        <Questions
        onStopTest={onStopTest}
        onFinishTest={onFinishTest}
        arrOfAnswers={arrOfAnswers}
          onStopClick={onStopTest}
          arrOfQuestions={arrOfQuestions}
          testName={testName}
          onSelect={setUserAnswerInArrOfAnswer}
        />
      )}
      {step === "Result" && <Result value={result} onClick={setStep} />}
      {loading && <Loader/>}
      
    </>
  );
};

export default TestModule;
