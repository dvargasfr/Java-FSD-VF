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
                    document.getElementById(a.qid).style.background = "rgb(0 255 0 / 30%)";
                }else{
                    console.log(a.qid + " = "+ specificValue + " - incorrect. Should be "+ a.correctAns);
                    document.getElementById(a.qid).style.background = "rgb(255 0 0 / 30%)";
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
            <button class="btn btn-secondary" onClick={refreshPage}>Reset</button>
            <button class="btn btn-primary" style={{margin:'5px'}} onClick={correctAnswers}>Get result and correct</button>
            <h1 id="result-div" style={{visibility: "hidden", textAlign:"center"}}>Result {answerOk}/{answerCnt}</h1>
        </div>
    )
}

export default Result;