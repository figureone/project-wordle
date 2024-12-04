import React from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';
import Keyboard from '../Keyboard';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  console.info({ answer });

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

  const handleRestart = function () {
    setAnswer(sample(WORDS));
    setGuesses(
      range(0, NUM_OF_GUESSES_ALLOWED).map(() => {
        return { name: '     ', id: crypto.randomUUID() };
      })
    );
    setNumGuesses(0);
    setStatus('playing');
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} status={status} />
      <Keyboard answer={answer} guesses={guesses} />
      {status === 'won' && (
        <Banner type="happy">
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{numGuesses} guess(es)</strong>.
          <button onClick={handleRestart}>Restart Game</button>
        </Banner>
      )}
      {status === 'lost' && (
        <Banner type="sad">
          Sorry, the correct answer is <strong>{answer}</strong>.
          <button onClick={handleRestart}>Restart Game</button>
        </Banner>
      )}
    </>
  );
}

export default Game;
