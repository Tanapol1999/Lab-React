import React from 'react';
import './App.css'
import WordCard from './WordCard';

const word = "Songkhla";
const test = ["Bangkok", "Phuket"];

function App() {
    return (
       <div>
           {
            <WordCard value = {word}/>
           }
       </div>
    )}

export default App;
