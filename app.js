const filterData = require("./functions/filter")

const express = require("express");
const app = express();



const init = async () => {
  const port = process.env.PORT || 8080;
  app.listen(port, () => console.log(`listening in on ${port}`));
};

init();


//takes in queries parameters used to search for restaurants
app.get("/", async (req, res, next) => {
  try {
    const matches = await filterData(req.query);
    res.send(matches[0] ? matches : 'No matches found');
  } catch (error) {
    next(error);
  }
});

//error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
