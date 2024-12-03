import React from 'react';

import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  return (
    <p className="guess">
      {checkGuess(guess.name, answer).map((letter, index) => (
        <span
          className={['cell', letter.letter !== ' ' && letter.status]
            .filter((n) => n)
            .join(' ')}
          key={index}
        >
          {letter.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
