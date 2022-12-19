import figlet from "figlet";
import chalk from "chalk";
import inquirer from "inquirer";
import inquirerQuestions from "./app/utils/inquirerQuestions.js";
import nakedCphRaffleRunner from "./app/modules/nakedcph/nakedCphRaffleRunner.js";
import endRaffleRunner from "./app/modules/end/endRaffleRunner.js";
import dsmRaffleRunner from "./app/modules/DSML/dsmRaffleRunner.js";

console.log(chalk.blue(figlet.textSync("Welcome to PyramidAIO")));

inquirer.prompt(inquirerQuestions).then((answers) => {
  const { site } = answers;

  if (site === "end") {
    endRaffleRunner();
  } else if (site === "nakedcph") {
    nakedCphRaffleRunner();
  } else if (site === "dsml") {
    dsmRaffleRunner();
  }
});
