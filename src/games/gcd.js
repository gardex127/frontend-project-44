const getRandomNumber = () => Math.floor(Math.random() * 100);

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};


const getGameData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();

  return {
    question: `${num1} ${num2}`,
    correctAnswer: String(gcd(num1, num2)),
  };
};


export default getGameData;

