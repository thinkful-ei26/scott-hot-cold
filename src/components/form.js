import React from 'react';

export default function Form() {
  return (
  <form>
    <input type="text" name="userGuess" id="userGuess" class="text" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required="" />
    <input type="submit" id="guessButton" class="button" name="submit" value="Guess"  />
  </form>
)
}
