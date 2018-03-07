#!/usr/bin/env node
"use strict";
// cli is the controller basically. it pulls in the logic from the other files and runs it
process.title = "Dice Roll";
// line 7 confuses me here. i think its bc that file thats being required is exporting a direct function without naming it so it is basically being defined here
const { argv: [,, ...args] } = process,
      { count, sides } = require('./parse-args')(args),
      { roll, toDiceNotation } = require('./dice');

console.log("args:", args,"count: ", count,"sides:", sides);

const dice = toDiceNotation({count, sides}),
      total = roll(dice);

console.log("total: ",total);
