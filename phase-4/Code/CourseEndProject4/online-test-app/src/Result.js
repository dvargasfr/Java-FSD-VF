function Result(props){
    let [answer, setAnswer] = useState([]);

    let correctAnswers = function() {
        answer.answers.forEach((value, key) => {
            const specificValue = props.useranswer.get(key);
            if(specificValue){
                if(specificValue === value ){
                    console.log(key + " = "+ props.useranswer.get(key) + " - correct!");
                }else{
                    console.log(key + " = "+ props.useranswer.get(key) + " - incorrect. Should be "+ value);
                }
            }
        });
    }

    return(
        <div>
            <input type="button" value="Get correction" onClick={correctAnswers}/><br/>
        </div>
    )
}