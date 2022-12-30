import figlet from "figlet";
import chalk from "chalk";
import inquirer from "inquirer";
import inquirerQuestions from "./src/utils/inquirerQuestions";
import { end, dsm, nakedCph } from "./src/modules/sites";
console.log(chalk.blue(figlet.textSync("Welcome to Pyramid Raffles")));

inquirer.prompt(inquirerQuestions).then((answers) => {
  const { site } = answers;

  if (site === "end") {
    end();
  } else if (site === "nakedcph") {
    nakedCph();
  } else if (site === "dsml") {
    dsm();
  }
});
