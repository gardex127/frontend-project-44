const getRandomNumber = () => Math.floor(Math.random() * 100);
const getRandomStep = () => Math.floor(Math.random() * 10) + 1;
const getRandomLength = () => Math.floor(Math.random() * 6) + 5;

const getGameData = () => {
  const length = getRandomLength();
  const start = getRandomNumber();
  const step = getRandomStep();
  const hiddenIndex = Math.floor(Math.random() * length);

  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = "..";

  return {
    question: progression.join(" "),
    correctAnswer: String(correctAnswer),
  };
};

export default getGameData;
