import {useState} from "react"

const QuestionCard = ({question,options,text}) => {
 
  const [text,setText]=useState(true)
  return (
    <div className="question-card">
      {/* add question here */}
      <h3>{question}</h3>
      <div className="options">{options}</div>
      
      <div className="show-ans" onclick={()=>setText(false)}>{text?'Show Ans':'Hide Ans'}</div>
    </div>
  );
};

export default QuestionCard;
