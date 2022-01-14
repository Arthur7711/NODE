const fs = require("fs");
const path = require("path");
const person1 = require("./person.json");

const persone = {
  name: "ARTH",
  age: 24,
  department: "History",
  car: "Mustang",
};
// fs.writeFile("person.json", JSON.stringify(persone), (err) => {
//   if (err) {
//     console.log(err);
//   }
// });


console.log(person1);