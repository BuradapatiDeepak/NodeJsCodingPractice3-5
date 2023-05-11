let express = require("express");
let app = express();
let addDays = require("date-fns/addDays");
app.get("/", (request, response) => {
  let dateTime = addDays(new Date(), 100);
  response.send(
    `${dateTime.getDate()}/${dateTime.getMonth() + 1}/${dateTime.getFullYear()}`
  );
});

module.exports = app;
