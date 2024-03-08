const fs = require("fs");

const read = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        reject("Encountered error while reading file contents..!");
      } else {
        data = data.split(",");
        resolve(data);
      }
    });
  });
};

const convertToUpperCase = (fileContents) => {
  return new Promise((resolve, reject) => {
    try {
      const upperCaseContents = fileContents.map((data) => data.toUpperCase());
      resolve(upperCaseContents);
    } catch (err) {
      reject(err);
    }
  });
};

const readAndConvertFileContents = (fileName, cb) => {
  read(fileName)
    .then((fileData) => {
      return convertToUpperCase(fileData);
    })
    .then((convertedData) => {
      cb(null, convertedData);
    })
    .catch((error) => {
      cb(error, null);
    });
};

module.exports = {
  readAndConvertFileContents,
};
