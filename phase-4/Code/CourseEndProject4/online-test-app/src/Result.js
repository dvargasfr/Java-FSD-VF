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
                    setAnswerOk(answerOk => answerOk + 1);
                    document.getElementById(a.qid).style.background = "green";
                }else{
                    console.log(a.qid + " = "+ specificValue + " - incorrect. Should be "+ a.correctAns);
                    document.getElementById(a.qid).style.background = "red";
                }
            }
            setAnswerCnt(answerCnt => answerCnt + 1);
        });
        document.getElementById("result-div").style.visibility="visible";
    }

    function refreshPage() {
        window.location.reload(false);
    }
    

    return(
        <div>
            <button class="btn btn-primary" onClick={correctAnswers}>Get result and correct</button>
            <button class="btn btn-secondary" onClick={refreshPage}>Reset</button>
            <div id="result-div" style={{visibility: "hidden"}}>Result {answerOk}/{answerCnt}</div>
        </div>
    )
}

export default Result;