import React from 'react';

function Key({ letter, status }) {
  return <div className={`key ${status}`}>{letter}</div>;
}

export default Key;
