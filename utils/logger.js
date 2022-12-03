import winston from "winston";
import chalk from "chalk";
import figlet from "figlet";

export const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: "HH:mm:ss",
    }),
    winston.format.printf((info) => {
      if (info.level === "error") {
        return `${chalk.red("ERROR")} ${[info.timestamp]}: ${info.message}`;
      } else if (info.message.includes("success")) {
        return ` ${chalk.green(figlet.textSync("SUCCESSFUL ENTRY"))}
${[info.timestamp]}: Check discord for order information.`;
      } else {
        return `${[info.timestamp]}: ${info.message}`;
      }
    })
  ),
  transports: [new winston.transports.Console()],
});
