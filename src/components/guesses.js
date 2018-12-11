import React from 'react';


export default function Guesses(props) {

  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>
      {guess}
    </li>
  ));
  
  return (
    <div>
      <p>Guess #<span id="count">0</span>!</p>
      <ul id="guessList" class="guessBox clearfix">{guesses}</ul>
    </div>
)
}
