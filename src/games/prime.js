const getRandomNumber = () => Math.floor(Math.random() * 100);

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getGameData = () => {
  const question = getRandomNumber();
  const correctAnswer = isPrime(question) ? "yes" : "no";

  return {
    question,
    correctAnswer,
  };
};

export default getGameData;
