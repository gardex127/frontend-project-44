const getRandomNumber = () => Math.floor(Math.random() * 100);

const getGameData = () => {
  const question = getRandomNumber();
  const correctAnswer = question % 2 === 0 ? "yes" : "no";

  return { question, correctAnswer };
};

export default getGameData;
