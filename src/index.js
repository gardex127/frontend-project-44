import readlineSync from "readline-sync";

const runGame = (description, getGameData) => {
  console.log("Welcome to the Brain Games!");
  console.log(description);

  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);

  for (let i = 0; i < 3; i += 1) {
    const { question, correctAnswer } = getGameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question("Your answer: ");

    if (answer !== correctAnswer) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log("Correct!");
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
