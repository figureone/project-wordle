import React from 'react';

import Key from '../Key';

function Keyboard({ answer, guesses }) {
  const guessedLetters = guesses.reduce((letters, guess) => {
    [...guess.name].forEach((char) => {
      letters[char] = true;
    });
    return letters;
  }, {});

  const correctLetters = [...answer].reduce((letters, letter, index) => {
    letters[letter] = guesses.reduce((isCorrect, guess) => {
      return [...guess.name][index] === letter || isCorrect;
    }, false);
    return letters;
  }, {});

  const getLetterStatus = function (letter) {
    if (correctLetters[letter]) {
      return 'correct';
    } else if (
      guessedLetters[letter] &&
      !correctLetters[letter] &&
      answer.includes(letter)
    ) {
      return 'misplaced';
    } else if (guessedLetters[letter]) {
      return 'incorrect';
    } else {
      return 'unused';
    }
  };

  return (
    <div className="keyboard">
      {/* Top Row */}
      <div className="row top-row">
        {[...'QWERTYUIOP'].map((letter) => (
          <Key letter={letter} status={getLetterStatus(letter)} key={letter} />
        ))}
      </div>
      {/* Middle Row */}
      <div className="row middle-row">
        {[...'ASDFGHJKL'].map((letter) => (
          <Key letter={letter} status={getLetterStatus(letter)} key={letter} />
        ))}
      </div>
      {/* Bottom Row */}
      <div className="row bottom-row">
        {[...'ZXCVBNM'].map((letter) => (
          <Key letter={letter} status={getLetterStatus(letter)} key={letter} />
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
