import React from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [numGuesses, setNumGuesses] = React.useState(0);

  const [guesses, setGuesses] = React.useState(() =>
    range(0, NUM_OF_GUESSES_ALLOWED).map(() => {
      return { name: '     ', id: crypto.randomUUID() };
    })
  );

  const addGuess = function (guess) {
    if (numGuesses >= NUM_OF_GUESSES_ALLOWED) {
      return false;
    }

    setGuesses((guesses) => {
      const newGuesses = [...guesses];
      newGuesses[numGuesses].name = guess;
      return newGuesses;
    });

    setNumGuesses(numGuesses + 1);

    return true;
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
