#!/usr/bin/env node

import runGame from "../src/index.js";
import getGameData from "../src/games/even.js";

const description =
  'Answer "yes" if the number is even, otherwise answer "no".';

runGame(description, getGameData);

// Updated configuration