import readlineSync from 'readline-sync';

// trunc -возвращает целую часть числа
const getRandomNumber = (from, to) => Math.trunc(Math.random() * (to - from) + from);
const chooseRandElem = (array) => array[genRandInt(0, array.length)];

const question = getRandomNumber(1, 10);
const isEven = (num) => (num % 2 === 0);

const сalculateAnswer = (number) => ((isEven(number) ? 'yes' : 'no'));
const correctAnswer = сalculateAnswer(question).toString();

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${nameUser()}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log(`Question: ${question}`);
const userAnswer = readlineSync.question('Your answer: ');

//
const GameLogic = (task, getGameData) => {
  for (let i = 0; i < 3; i += 1) {
    if (userAnswer !== correctAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
    } console.log('Correct!');
  }

  return console.log(`Congratulations, ${username}!`);
};
