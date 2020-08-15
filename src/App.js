import React from 'react';
import './App.css'
import WordCard from './WordCard';

//const word = "Songkhla";
const randword = ["Songkhla", "Phuket", "Bangkok"];
const word = randword[Math.floor(Math.random()*randword.length)];

function App() {
    return (
       <div>
           {
            <WordCard value = {word}/>
           }
       </div>
    )}

export default App;
