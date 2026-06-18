#!/usr/bin/env node

import runGame from "../src/index.js";
import getGameData from "../src/games/prime.js";

const description =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

runGame(description, getGameData);
