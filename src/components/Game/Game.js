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
  const [status, setStatus] = React.useState('playing');

  const [numGuesses, setNumGuesses] = React.useState(0);

  const [guesses, setGuesses] = React.useState(() =>
    range(0, NUM_OF_GUESSES_ALLOWED).map(() => {
      return { name: '     ', id: crypto.randomUUID() };
    })
  );

  const addGuess = function (guess) {
    const newNumGuesses = numGuesses + 1;
    setNumGuesses(newNumGuesses);

    if (newNumGuesses >= NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost');
    } else if (guess === answer) {
      setStatus('won');
    }

    setGuesses((guesses) => {
      const newGuesses = [...guesses];
      newGuesses[numGuesses].name = guess;
      return newGuesses;
    });

    return true;
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} status={status} />
      {status === 'won' && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{numGuesses} guess(es)</strong>.
          </p>
        </div>
      )}
      {status === 'lost' && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
