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

    //let mm = new Map();
    let getSelectedAns = function(event,qid,ans){
        setUserAnswers(map => new Map(map.set(qid, ans)));
        /*
        mm.set(qid,ans);
        console.log(mm);
        console.log(answers);
        */
    }

    let question = questions.map(q=> 
        <div id={q.qid}>
            {q.qid} ) {q.question} ? <br/>
            <input type="radio" name={q.qid} value={q.ans1} onClick={(event)=> {
                getSelectedAns(event,q.qid,q.ans1);
            }}/>{q.ans1}
            <input type="radio" name={q.qid} value={q.ans2} onClick={(event)=> {
                getSelectedAns(event,q.qid,q.ans2);
            }}/>{q.ans2}
            <input type="radio" name={q.qid} value={q.ans3} onClick={(event)=> {
                getSelectedAns(event,q.qid,q.ans3);
            }}/>{q.ans3}
            <input type="radio" name={q.qid} value={q.ans4} onClick={(event)=> {
                getSelectedAns(event,q.qid,q.ans4);
            }}/>{q.ans4}
        </div>    
    )
    return(
    <div>
        <h2>Online Test</h2>
        <div class="container">
            {question}
            <Result answers={answers} useranswers={userAnswers}></Result>
        </div>
    </div>
    )
}

export default Quiz;