import axios from "axios";
import { useEffect, useState } from "react";
import Result from './Result';

function Quiz() {
    let [questions,setQuestions] = useState([]);
    let [answers,setAnswers] = useState([]);
    let [userAnswers,setUserAnswers] = useState(new Map());

    useEffect(()=> {
        //alert("Hello");  
        axios.get("http://localhost:3030/questions").
        then(result=> {
            //console.log(result.data)
            setQuestions(result.data);
        }).
        catch(error=> {
            console.log(error);
        });
        axios.get("http://localhost:3031/answers").
        then(result=> {
            //console.log(result.data)
            setAnswers(result.data);
        }).
        catch(error=> {
            console.log(error);
        });
    },[])

    let getSelectedAns = function(event,qid,ans){
        setUserAnswers(map => new Map(map.set(qid, ans)));
    }

    let question = questions.map(q=> 
        <div id={q.qid} style={{marginBottom:'5px'}}>
            <br/><h3>{q.qid}. {q.question} ? </h3>
            <div class="row" style={{textAlign:'center'}}>
                <div class="col-3">
                    <input type="radio" name={q.qid} value={q.ans1} onClick={(event)=> {getSelectedAns(event,q.qid,q.ans1);}}/> {q.ans1}
                </div>
                <div class="col-3">
                    <input type="radio" name={q.qid} value={q.ans2} onClick={(event)=> {getSelectedAns(event,q.qid,q.ans2);}}/> {q.ans2}
                </div>
                <div class="col-3">
                    <input type="radio" name={q.qid} value={q.ans3} onClick={(event)=> {getSelectedAns(event,q.qid,q.ans3);}}/> {q.ans3}
                </div>
                <div class="col-3">
                    <input type="radio" name={q.qid} value={q.ans4} onClick={(event)=> {getSelectedAns(event,q.qid,q.ans4);}}/> {q.ans4}
                </div>
            </div>
            <br/>
        </div>
    )
    return(
        <div>
            <h2 style={{fontSize: "300%", textAlign:"center", background:"darkblue", color:"white"}}>Online Test</h2>
            <div class="container">
                {question}
                <Result answers={answers} useranswers={userAnswers}></Result>
            </div>
        </div>
    )
}

export default Quiz;