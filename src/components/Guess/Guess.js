import React from 'react';

function Guess({ guess }) {
  return (
    <p className="guess" key={guess.id}>
      {[...guess.name].map((letter, index) => (
        <span className="cell" key={index}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
