import figlet from "figlet";
import chalk from "chalk";
import inquirer from "inquirer";
import inquirerQuestions from "./src/utils/inquirerQuestions";
import { end, dsm, nakedCph, footpatrol } from "./src/modules/sites";
import files from "./src/utils/jsonReader";

const licenseKey: string = "12341241241";

console.log(chalk.green("Checking license key..."));

if (files.Settings.LicenseKey !== licenseKey) {
  console.log(chalk.red.bold("ACCESS DENIED."));
  console.log(
    chalk.red("Please purchase a license key to access Pyramid Raffles.")
  );
} else {
  console.log(chalk.blue(figlet.textSync("Welcome to Pyramid Raffles")));
  console.log(chalk.green.bold("ACCESS GRANTED."));
  inquirer.prompt(inquirerQuestions).then((answers) => {
    const { site } = answers;

    if (site === "end") {
      end();
    } else if (site === "nakedcph") {
      nakedCph();
    } else if (site === "dsml") {
      dsm();
    } else if (site === "footpatrol") {
      footpatrol();
    }
  });
}
