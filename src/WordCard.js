import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import _, { attempt } from 'lodash';

var answer = "";
//var score = 0;
var temp = 0;

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
/*const prepareNewWord = given_word =>{
    let words = given_word.toUpperCase()
    words.toUpperCase()
    let chars2 = _.shuffle(Array.from(words))
    return (
        <div class="center">
        {
            chars2.map((c, i) => <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt} />)
        }
        </div>
    )
}*/

export default function WordCard(props) {

    const [state, setState] = useState(prepareStateFromWord(props.value))

    answer = state.guess;

    const activationHandler = c => {
        console.log(`${c} has been activated.`)
        let guess = state.guess + c
        setState({ ...state, guess })

        if (guess.length == state.word.length) {
            if (guess == state.word) {
                console.log('Yeah!')
                setState({ ...state, guess: '', completed: true })
                setState({ ...state, guess: '', attempt: state.attempt + 1 })
                alert("You won!!");
                //score++;
                temp = 0;
                
                // if (score == 5) {
                //     alert("Congrat!! You win all!!");
                //     window.location.reload(false);
                // }
                window.location.reload(false);
            } else {
                console.log('reset, next attempt')
                setState({ ...state, guess: '', attempt: state.attempt + 1 })
                alert("Incorrect, Please Try Again!!")
                temp++;

                    if (temp == 3) {
                        alert("GAME OVER!! Please Try Again");
                        window.location.reload(false);
                    }
            }
        }
        console.log({ temp });
        state.attempt += 1;
    }

    return (
        <div>
            <br></br>
            <br></br>
            <div class="font0">
                <b>Guess Province In Thailand</b>
            </div>

            <div class="center">
                {
                    state.chars.map((c, i) => <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt} />)
                }
            </div>
            <br></br>
            <br></br>
            <div class="font1">
                <b>Your Answer :</b>  {answer}
            </div>
            <div class="font1">
                <b>Your Attemp :</b> {temp}
            </div>
        </div>
    );
}