import { useState, useRef, useMemo, useCallback } from "react";

import ChoiceTest from "./ChoiceTest";
import Questions from "./Questions";
import Result from "./Result";

import { quests } from "./testQW";

const TestModule = () => {
  const [step, setStep] = useState("ChoiceTest");
  const [testName, setTestName] = useState("theory");



const memoizedValue = useMemo(() => quests.questions.map(el=>{
    return {_id:el._id, answer:'' }
  }), []);

const arrOfAnswers= useRef(memoizedValue);

const setUserAnswerInArrOfAnswer=(value)=>{
    arrOfAnswers.current.forEach(el=>{   
        if(el._id===value._id){
            el.answer=value.answer;
            return
        }
    })
}






  const choiceTestName =useCallback((testName) => {
    setTestName(testName);

    console.log(testName);
  },[setTestName]);


  const stopTest = useCallback(() => {
    console.log("test must stop!");
  },[]);


  return (
    <>
      {step === "ChoiceTest" && <ChoiceTest onClick={choiceTestName} />}
      {step === "Questions" && (
        <Questions
        arrOfAnswers={arrOfAnswers}
          onStopClick={stopTest}
          arrOfQuestions={quests.questions}
          testName={testName}
          onSelect={setUserAnswerInArrOfAnswer}
        />
      )}
      {step === "Result" && <Result value={11} onClick={setStep} />}
    </>
  );
};

export default TestModule;
