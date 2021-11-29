const viableParameters = require("./params");
const sortCriteria = ["distance", "rating", "price"];

//sorts through data based on distance > rating > price and returns 5 best matches

const sort = (data) => {
  let threshold = null;

  for (let i = 0; i < sortCriteria.length; i++) {
    if (data.length <= 5) {
      break;
    }
    switch (sortCriteria[i]) {
      case "distance":
        data = data.sort(
          (a, b) =>
            a[viableParameters.indexOf(`${sortCriteria[i]}`)] -
            b[viableParameters.indexOf(`${sortCriteria[i]}`)]
        );

        threshold = data[4][viableParameters.indexOf(`${sortCriteria[i]}`)];

        data = data.filter(
          (restaurant) =>
            restaurant[viableParameters.indexOf(`${sortCriteria[i]}`)] <=
            threshold
        );

        break;
      case "rating":
        data = data.sort(
          (a, b) =>
            b[viableParameters.indexOf(`${sortCriteria[i]}`)] -
            a[viableParameters.indexOf(`${sortCriteria[i]}`)]
        );

        threshold = data[4][viableParameters.indexOf(`${sortCriteria[i]}`)];

        data = data.filter(
          (restaurant) =>
            restaurant[viableParameters.indexOf(`${sortCriteria[i]}`)] >=
            threshold
        );

        break;
      case "price":
        data = data.sort(
          (a, b) =>
            a[viableParameters.indexOf(`${sortCriteria[i]}`)] -
            b[viableParameters.indexOf(`${sortCriteria[i]}`)]
        );

        break;
    }
  }
  return data.slice(0, 5);
};

module.exports = sort;
