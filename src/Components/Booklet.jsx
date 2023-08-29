import QuestionCard from "./QuestionCard";
import {useState} from 'react'
const Booklet = ({onclick}) => {
    const [data,setData]=useState()
    const [start,setStart]=useState(true)
    const [score,setScore]=useState(0)
  const getdata= async()=>{
    let res=await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz")
    let allData=await res.json()
    setData(allData)
 }
  
  return (
    <div data-testid="Booklet">
      {/* create a div with className="welcome-div" here*/}
      <div className="welcome-div">
        <h1 style={!start? {display:"none"}:{display:"block"}}>To begin the exam, click on the 'Start Exam' button below</h1>
        <button onClick={()=>getdata}>{start?"Start Exam":"End Exam"}</button>
      </div>

      <div className="questions-container">
        {/* Append score and question card components here */}
        <h3>Score: {score}</h3>
        <QuestionCard/>
      </div>
    </div>
  );
};

export default Booklet;
