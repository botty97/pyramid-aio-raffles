const inquirerQuestions = [
  {
    type: "list",
    name: "site",
    message: "Select a module to use",
    choices: ["End", "NakedCPH", "DSML", "Footpatrol"],
    filter(val: string) {
      return val.toLowerCase();
    },
  },
];

export default inquirerQuestions;
