import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guessHistory, setGuessHistory] = React.useState([]);

  function handleSubmitGuess(guess) {
    const nextGuessHistory = [...guessHistory, guess];
    setGuessHistory(nextGuessHistory);

    if (guess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuessHistory.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      <GuessResults
        guessHistory={guessHistory}
        answer={answer}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
      />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === 'won' && (
        <WonBanner numberOfGuesses={guessHistory.length} />
      )}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
