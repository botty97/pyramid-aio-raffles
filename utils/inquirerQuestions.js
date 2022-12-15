const inquirerQuestions = [
  {
    type: "list",
    name: "site",
    message: "Select a module to use",
    choices: ["End", "NakedCPH", "DSML"],
    filter(val) {
      return val.toLowerCase();
    },
  },
];

export default inquirerQuestions;
