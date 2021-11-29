## Summary

This application uses express, csv-reader, and glob to read any CSV files in the "data" directory and deliver up to 5 restaurents that best match parameters sent to the generic localhost route.

## Additional Assumptions
Along with assumptions outlined in the assessment guidelines, the following assumptions were made:

- The columns in the CSV (and therefore, the indexes used in this application) will always follow the order of [name, rating, distance, price, cuisine]. The exact naming of the columns in the CSV does not matter, however the url parameters will need to be exact.

- cuisine query parameters for now will be searched with using the IDs

- Distances and Prices beyond the given thresholds are not invalid, but will have no matches if the data set follows the thresholds


## Usage

Step 1 - npm install

Step 2 - Upload CSV files to "data" folder. Any number of CSV files is allowed and the names can be anything. Make sure the columns of your CSV files match the standard order [name, rating, distance, price, cuisine]. Column names do not have to be exact. By default, the restaurants.csv is already uploaded.

Step 3 - npm start

Step 4 - Open browser, and navigate to "http://localhost:8080/" to see the 5 closest > highest rated > Cheapest restaurants

Step 5 - Send a request with query headers to set search parameters. Allowable parameters are [name, rating, distance, price, cuisine]

    example query: "http://localhost:8080/?rating=4&price=30&distance=9"

