const dataReadFunc = require('./read')
const viableParameters = require('./params')
const sort = require('./sort')

//primary function that filters through restaurants based on user parameters
//returns data to send to client

const filterData = async (criteria) => {
    let data = await dataReadFunc();
    let error = null;
  
  
    for (param in criteria) {
      if (error) break;
  
      if (viableParameters.includes(param)) {
        switch (param) {
          case "name":
            data = data.filter((restaurant) => {
              return restaurant[viableParameters.indexOf(param)]
                .toLowerCase()
                .includes(`${criteria[param].toLowerCase()}`);
            });
            break;
          case "cuisine":
            if (Object.is(criteria[param] * 1, NaN)) {
              error = "Cuisine parameter not valid";
              break;
            }
            data = data.filter((restaurant) => {
              return (
                restaurant[viableParameters.indexOf(param)] * 1 ===
                criteria[param] * 1
              );
            });
            break;
          case "rating":
            if (Object.is(criteria[param] * 1, NaN) || criteria[param] * 1 > 5 ||
            criteria[param] * 1 < 1) {
              error = "Rating parameter not valid";
              break;
            }
            data = data.filter((restaurant) => {
              return (
                restaurant[viableParameters.indexOf(param)] * 1 >=
                criteria[param] * 1
              );
            });
            break;
          case "distance":
          case "price":
            if (Object.is(criteria[param] * 1, NaN)) {
              error = "Distance parameter not valid";
              break;
            }
            data = data.filter((restaurant) => {
              return (
                restaurant[viableParameters.indexOf(param)] * 1 <=
                criteria[param] * 1
              );
            });
            break;
        }
      } else {
        error = "Parameter category not Valid";
        break;
      }
    }
    return error ? error : sort(data);
  };

  module.exports = filterData