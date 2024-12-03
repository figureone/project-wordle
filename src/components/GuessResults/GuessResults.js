import React from 'react';

import Guess from '../Guess';

function GuessResults({ guesses }) {
  console.log(guesses);
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <Guess guess={guess} />
      ))}
    </div>
  );
}

export default GuessResults;
