const csv = require("csvtojson");
import path from "path";

const csvToJson = async () => {
  const filename: string =
    path.dirname(process.execPath) + "/nakedCph/newTask.csv";

  const jsonArray = await csv().fromFile(filename);

  return jsonArray;
};

export default csvToJson;
