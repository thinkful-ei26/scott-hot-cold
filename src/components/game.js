import React from 'react';
import Header from './header.js';
import Feedback from './feedback.js';
import Form from './form.js';
import Guess from './guesses.js';

export default function Game(){

  const guesses = [7, 5, 76];
  const feedback = "Make your Guess!"

  return (
    <div className="main">
      <Header />
      <section className="game">
    	<Feedback feedback = {feedback} />
      <Form />
      <Guess guesses = {guesses} />

    		</section>
    </div>
    )
}
