import readlineSync from 'readline-sync';
import nameUser from './cli.js';

const GameLogic = (task, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const username = nameUser();
  console.log(`Hello, ${username}!\n${task}`);

  for (let numberOfRepetitions = 0; numberOfRepetitions < 3; numberOfRepetitions += 1) {
    const [question, correctAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    
    if (userAnswer !== correctAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
    } console.log('Correct!');
  }

  return console.log(`Congratulations, ${username}!`);
};

export default GameLogic;