import { useState } from "react";

function Result(props){
    let [answerCnt, setAnswerCnt] = useState(0);
    let [answerOk, setAnswerOk] = useState(0);

    let correctAnswers = function() {
        props.answers.map(a=>{
            const specificValue = props.useranswers.get(a.qid);
            if(specificValue){
                if(specificValue === a.correctAns){
                    console.log(a.qid + " = "+ specificValue + " - correct!");
                    setAnswerOk(answerOk+1);
                }else{
                    console.log(a.qid + " = "+ specificValue + " - incorrect. Should be "+ a.correctAns);
                }
            }
            setAnswerCnt(answerCnt+1);
        });
    }

    return(
        <div>
            <input type="button" value="Get correction" onClick={correctAnswers}/><br/>
            <div>Result: {answerOk}/{answerCnt}</div>
        </div>
    )
}

export default Result;