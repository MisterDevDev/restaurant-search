const Fs = require("fs");
const CsvReadableStream = require("csv-reader");

//opens connection to csv files and reads each row

const readData = async (dataPath) => {
  let [header, output] = await new Promise((resolve, reject) => {
    let inputStream = Fs.createReadStream(dataPath, "utf8");
    let header = null;
    let output = [];

  inputStream
    .pipe(new CsvReadableStream({
      parseNumbers: true,
      parseBooleans: true,
      trim: true,
      skipHeader: true,}))
    .on('header', row => {
        header = row
    })
    .on('data', row => {
        output.push(row)
    })
    .on("end", function () {
      resolve([header, output])
    })
    .on('error', err => {
        reject(err)
    });
});
return output
}

module.exports = readData
