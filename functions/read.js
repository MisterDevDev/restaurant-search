const readData = require("../reader");

const glob = require("glob");
const path = require("path");

//uses glob to return paths to csv files in data folder

const dataReadFunc = async () => {
    const csvFiles = glob.sync("./data/**/*.csv");
    let result = [];
  
    for (const filePath of csvFiles) {
      let curData = await readData(filePath);
      result.push(curData);
    }
    return result.length > 1
      ? result.reduce((acc, cur) => {
          cur.forEach((el) => acc.push(el));
          return acc;
        }, [])
      : result[0];
  };

  module.exports = dataReadFunc