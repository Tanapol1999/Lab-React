import React, {useState} from 'react';
import CharacterCard from './CharacterCard';
import _, { attempt } from 'lodash';

var answer = "";

const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))

    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))
    
    answer = state.guess;

    const activationHandler = c => {
        console.log(`${c} has been activated.`)
        let guess = state.guess + c
        setState({...state, guess})

        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('Yeah!')
                setState({...state, guess: '', completed: true})
                setState({...state,guess:'',attempt: state.attempt + 1})
                alert("You won!!");
                window.location.reload(false);
            }else{
                console.log('reset, next attempt')
                setState({...state,guess:'',attempt: state.attempt + 1})
                alert("Incorrect, Please Try Again!!")
            }   
        }
    }   

    return(
        <div>
            
            <div class="center">
                {
                    state.chars.map((c, i) => <CharacterCard value={c} key={i} activationHandler = {activationHandler} attempt = {state.attempt}/>)   
                }
                {/* <button onClick={()=>{ alert('The province that have a Mermaid point view?'); }}>
                    Hint!!
                </button> */}
            </div>

            <div class="center">
                Your Answer : {answer}
            </div>

        </div>
    );
}