import React from 'react';

import Guess from '../Guess';

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <Guess guess={guess} answer={answer} key={guess.id} />
      ))}
    </div>
  );
}

export default GuessResults;
