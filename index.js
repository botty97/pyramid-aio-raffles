import figlet from "figlet";
import chalk from "chalk";
import inquirer from "inquirer";
import inquirerQuestions from "./utils/inquirerQuestions.js";
import nakedCphRaffleRunner from "./modules/nakedcph/nakedCphRaffleRunner.js";

console.log(chalk.blue(figlet.textSync("Welcome to PyramidAIO")));

inquirer.prompt(inquirerQuestions).then((answers) => {
  const { site } = answers;

  if (site === "end") {
    //run end runner
  } else if (site === "nakedcph") {
    nakedCphRaffleRunner();
  } else if (site === "dsml") {
    //run dsm london runner
  } else if (site === "kith") {
    // run kith runner
  }
});
