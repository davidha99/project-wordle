import React from 'react';

function GuessResults({ guessHistory }) {
  return (
    <ul className="guess-results">
      {guessHistory.map((guess, index) => (
        <li key={index} className="guess">
          {guess}
        </li>
      ))}
    </ul>
  );
}

export default GuessResults;
