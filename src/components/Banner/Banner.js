import React from 'react';

function Banner({ type, children }) {
  const classes = ['banner'];
  if (type === 'happy') {
    classes.push('happy');
  } else if (type === 'sad') {
    classes.push('sad');
  }

  return (
    <div className={classes.join(' ')}>
      <p>{children}</p>
    </div>
  );
}

export default Banner;
