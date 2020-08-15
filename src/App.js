import React from 'react';
import './App.css'
import WordCard from './WordCard';
import Hintword from './Hintword';
//solution 1 not work
// const randword = ["Songkhla", "Phuket", "Bangkok"];
// const word = randword[Math.floor(Math.random()*randword.length)];

//solution 2 test
var word = "";
var hintword = "";
//random num (0-6)
var rannum = Math.floor(Math.random() * 7);

        if(rannum == 0){
            word = "PHUKET";
            hintword = "Patong was there...";
        }else if(rannum == 1){
            word = "Bangkok";
            hintword = "Capital of Thailand...";
        }else if(rannum == 2){
            word = "Songkhla";
            hintword = "The province that have a Mermaid point view?";
        }else if(rannum == 3){
            word = "Satun";
            hintword = "Lipe was there...";
        }else if(rannum == 4){
            word = "Kanchanaburi";
            hintword = "The bridge of history in Thailand...";
        }else if(rannum == 5){
            word = "Krabi";
            hintword = "Phi Phi island was there...";
        }else if(rannum == 6){
            word = "Ranong";
            hintword = "Maldives Thailand...";
        }

function App() {
    return (
        <div>
           {
                <WordCard value = {word}/>
           }

            <center><p><b>Hint:</b> {hintword}</p></center>

           {/* <div>
                <Hintword value = {hintword}/>
            </div> */}

        </div>
            

    )}

export default App;


