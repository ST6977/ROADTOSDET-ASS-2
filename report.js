const newman = require("newman");
// require("dotenv").config({ path: "Reports/.env" });

newman.run(
  {
    collection: `https://api.postman.com/collections/37980397-456826cb-9920-40b5-be05-5d921033863c?access_key=PMAT-01J73VJHRKESNCEQX7Q9845V69`,
    // collection: require("./collection/collection.json"),
    reporters: "htmlextra",
    iterationCount: 1,
    reporter: {
      htmlextra: {
        export: "./Reports/report.html", // If not specified, the file will be written to `newman/` in the current working directory.
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
