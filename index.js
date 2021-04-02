import { getRunnersUp, getKnockouts } from "./functions.js";
console.clear();

console.log("\n\n\n\n\n");

// const initialSelection = [
//   ["Turkey", "Italy", "Wales"], // A
//   ["Denmark", "Finland", "Belgium"], // B
//   ["Holland", "Ukrane", "Austria"], // C
//   ["England", "Croatia", "Scotland"], // D
//   ["Spain", "Sweden", "Poland"], // E
//   ["Hungary", "Portugal", "France"], // F
// ];

const initialSelection = [
  ["Italy", "Turkey", "Wales"], // A
  ["Finland", "Denmark", "Belgium"], // B
  ["Holland", "Ukrane", "Austria"], // C
  ["Croatia", "England", "Scotland"], // D
  ["Spain", "Poland", "Sweden"], // E
  ["Hungary", "Portugal", "France"], // F
];

// const orderedSelection = [
//   { group: "e", name: "Poland" },
//   { group: "a", name: "Wales" },
//   { group: "b", name: "Belgium" },
//   { group: "d", name: "Scotland" },
//   { group: "c", name: "Austria" },
//   { group: "f", name: "France" },
// ];

const orderedSelection = [
  { group: "b", name: "Belgium" },
  { group: "e", name: "Sweeden" },
  { group: "d", name: "Scotland" },
  { group: "c", name: "Austria" },
  { group: "a", name: "Wales" },
  { group: "f", name: "France" },
];

// console.log(getKnockouts(initialSelection, orderedSelection));
let data = getRunnersUp(initialSelection);
console.log("All runners Up", data);

console.log(getKnockouts(initialSelection, orderedSelection));

console.log();
