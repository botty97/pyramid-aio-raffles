import figlet from "figlet";
import chalk from "chalk";
import inquirer from "inquirer";
import inquirerQuestions from "./src/utils/inquirerQuestions";
import nakedCphRaffleRunner from "./src/modules/sites/nakedcph/nakedCphRaffleRunner";
import endRaffleRunner from "./src/modules/sites/end/endRaffleRunner";
import dsmRaffleRunner from "./src/modules/sites/DSML/dsmRaffleRunner";

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
