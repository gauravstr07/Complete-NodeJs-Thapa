const fs = require("fs");

const bioData = {
  name: "Gaurav-Sutar",
  password: "Akshu2680",
  age: 22,
  email: "gauravstr05@gmail.com",
};

const jsonData = JSON.stringify(bioData);

// fs.writeFile("json1.json", jsonData, (err) => {
//   console.log("Done..😍");
// });

fs.readFile("json1.json", "utf-8", (err, data) => {
  console.log(data);
  const orgData = JSON.parse(data);
  console.log(orgData);
});
