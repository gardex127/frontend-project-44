const getRandomNumber = () => Math.floor(Math.random() * 100);

const getGameData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operators = ["+", "-", "*"];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  let correctAnswer;
  switch (operator) {
    case "+":
      correctAnswer = num1 + num2;
      break;
    case "-":
      correctAnswer = num1 - num2;
      break;
    case "*":
      correctAnswer = num1 * num2;
      break;
    default:
      correctAnswer = null;
  }

  return {
    question: `${num1} ${operator} ${num2}`,
    correctAnswer: String(correctAnswer),
  };
};

export default getGameData;