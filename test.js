const fancyFunction = (winnerGroup, [firstTeam, secondTeam, thirdTeam, fourthTeam]) => {
  const [a, b, c, d, e] = [0, 1, 2, 3, 4];

  if (firstTeam == a) {
    if (secondTeam == b) {
      if (thirdTeam == c) {
        if (fourthTeam == d) {
          return checkWinnerGroup(winnerGroup, [a, d, b, c]); // Line 1
        } else if (fourthTeam == e) {
          return checkWinnerGroup(winnerGroup, [a, e, b, c]); // Line 2
        } else if (fourthTeam == f) {
          return checkWinnerGroup(winnerGroup, [a, d, b, c]); // Line 3
        }
      } else if (thirdTeam == d) {
        if (fourthTeam == e) {
          return checkWinnerGroup(winnerGroup, [d, e, a, b]); // Line 4
        } else if (fourthTeam == f) {
          return checkWinnerGroup(winnerGroup, [d, f, a, b]); // Line 5
        }
      } else if (thirdTeam == e) {
        if (fourthTeam == f) {
          return checkWinnerGroup(winnerGroup, [e, f, b, a]); // Line 6
        }
      }
    } else if (secondTeam == c) {
      if (thirdTeam == d) {
        if (fourthTeam == e) {
          return checkWinnerGroup(winnerGroup, [e, d, c, a]); // Line 7
        } else if (fourthTeam == f) {
          return checkWinnerGroup(winnerGroup, [f, d, c, a]); // Line 8
        }
      } else if (thirdTeam == e) {
        if (fourthTeam == f) {
          return checkWinnerGroup(winnerGroup, [e, f, c, a]); // Line 9
        }
      }
    } else if (secondTeam == d) {
      if (thirdTeam == e) {
        if (fourthTeam == f) {
          return checkWinnerGroup(winnerGroup, [e, f, d, a]); // Line 10
        }
      }
    }
  } else if (firstTeam == b) {
    if (secondTeam == c) {
      if (thirdTeam == d) {
        if (fourthTeam == e) {
          return checkWinnerGroup(winnerGroup, [e, d, b, c]); // Line 11
        } else if (fourthTeam == f) {
          return checkWinnerGroup(winnerGroup, [f, d, c, b]); // Line 12
        }
      } else if (thirdTeam == e) {
        if (fourthTeam == f) {
          return checkWinnerGroup(winnerGroup, [f, e, c, b]); // Line 13
        }
      }
    } else if (secondTeam == d) {
      if (thirdTeam == e) {
        if (fourthTeam == f) {
          return checkWinnerGroup(winnerGroup, [f, e, d, b]); // Line 14
        }
      }
    }
  } else if (firstTeam == c) {
    if (secondTeam == d) {
      if (thirdTeam == e) {
        if (fourthTeam == f) {
          return checkWinnerGroup(winnerGroup, [f, e, d, c]); // Line 14
        }
      }
    }
  }

  return retVal;
};

const checkWinnerGroup = (winnerGroup, potResults) => {
  if (winnerGroup == b) {
    return potResults[0];
  } else if (winnerGroup == c) {
    return potResults[1];
  } else if (winnerGroup == e) {
    return potResults[2];
  } else if (winnerGroup == f) {
    return potResults[3];
  }
};

// if(firstTeam == a){
//   if(secondTeam == b){
//     if(thirdTeam == c){
//       if(fourthTeam == d){
//         console.log("Here")
//         // winnerGroup == a ? console.log("Group A") : winnerGroup == b ? console.log("Group B") : winnerGroup == c ? console.log("Group C") : winnerGroup == d ? console.log("Group D") : null
//         winnerGroup == 2 ? console.log("here") : console.log("therr");
//         if(winnerGroup == 2){
//           console.log("e")
//         }
//       } else if(fourthTeam == e){
//         console.log("Line 2")
//       } else if(fourthTeam == f){
//         console.log("Line 3")
//       }
//     } else if(thirdTeam == d){
//       if(fourthTeam == e){
//         console.log("Line 4")
//       } else if(fourthTeam == f){
//         console.log("Line 5")
//       }
//     } else if(thirdTeam == e){
//       if(fourthTeam == f){
//         console.log("Line 6")
//       }
//     }
//   } else if(secondTeam == c){
//     if(thirdTeam == d){
//       if(fourthTeam == e){
//         console.log("Line 7")
//       } else if(fourthTeam == f){
//         console.log("Line 8")
//       }
//     } else if(thirdTeam == e){
//       if(fourthTeam == f){
//         console.log("Line 9")
//       }
//     }
//   } else if(secondTeam == d){
//     if(thirdTeam == e){
//       if(fourthTeam == f){
//         console.log("Line 10")
//       }
//     }
//   }
// } else if(firstTeam == b){
//   if(secondTeam == c){
//     if(thirdTeam == d){
//       if(fourthTeam == e){
//         console.log("Line 11")
//       } else if(fourthTeam == f){
//         console.log("Line 12")
//       }
//     }
//     else if(thirdTeam == e){
//       if(fourthTeam == f){
//         console.log("Line 13")
//       }
//     }
//   } else if(secondTeam == d){
//     if(thirdTeam == e){
//       if(fourthTeam == f){
//         console.log("Line 14")
//       }
//     }
//   }
// } else if(firstTeam == c){
//   if(secondTeam == d){
//     if(thirdTeam == e){
//       if(fourthTeam == f){
//         console.log("Line 15")
//       }
//     }
//   }
// }

//
//
//
//

const getBest3rdPlaced = (data) => {
  let returnData = [];

  for (let i = 0; i < 4; i++) {
    console.log(data[i]);
    returnData.push(data[i][2]);
  }

  return returnData;
};

getBest3rdPlaced([
  ["Turkey", "Italy", "Wales"],
  ["Denmark", "Finland", "Belgium"],
  ["Holland", "Ukrane", "Austria"],
  ["England", "Croatia", "Scotland"],
  ["Spain", "Sweden", "Poland"],
  ["Hungary", "Portugal", "France"],
]);

const data = [
  { group: "A", name: "Wales" },
  { group: "A", name: "Wales" },
  { group: "A", name: "Wales" },
  { group: "A", name: "Wales" },
];

const standings = [
  ["Turkey", "Italy", "Wales", "Switzerland"],
  ["Denmark", "Finland", "Belgium", "Russia"],
  ["Holland", "Ukrane", "Austria", "North Macedonia"],
  ["England", "Croatia", "Scotland", "Czech Republic"],
  ["Spain", "Sweden", "Poland", "Slovakia"],
  ["Hungary", "Portugal", "France", "Germany"],
];

const groupStageChoice = [
  [0, 1, 2],
  [0, 1, 2],
  [0, 1, 2],
  [0, 1, 2],
  [0, 1, 2],
  [0, 1, 2],
];

const groupStageResult = [
  [[standings[0][groupStageChoice[0][0]]], [standings[0][groupStageChoice[0][1]]], [standings[0][groupStageChoice[0][2]]]],
  [[standings[1][groupStageChoice[1][0]]], [standings[1][groupStageChoice[1][1]]], [standings[1][groupStageChoice[1][2]]]],
  [[standings[2][groupStageChoice[2][0]]], [standings[2][groupStageChoice[2][1]]], [standings[2][groupStageChoice[2][2]]]],
  [[standings[3][groupStageChoice[3][0]]], [standings[3][groupStageChoice[3][1]]], [standings[3][groupStageChoice[3][2]]]],
  [[standings[4][groupStageChoice[4][0]]], [standings[4][groupStageChoice[4][1]]], [standings[4][groupStageChoice[4][2]]]],
  [[standings[5][groupStageChoice[5][0]]], [standings[5][groupStageChoice[5][1]]], [standings[5][groupStageChoice[5][2]]]],
];

console.log(groupStageResult[0]);
console.log(groupStageResult[1]);
console.log(groupStageResult[2]);
console.log(groupStageResult[3]);
console.log(groupStageResult[4]);
console.log(groupStageResult[5]);

// const runnersUpOrder = [5,2,5,4,0,1]
const [a, b, c, d, e, f] = [0, 1, 2, 3, 4, 5];

const runnersUpOrder = [a, b, c, d];

// const rdPlaceRating = [
//   groupStageResult[runnersUpOrder[0]][2],
//   groupStageResult[runnersUpOrder[1]][2],
//   groupStageResult[runnersUpOrder[2]][2],
//   groupStageResult[runnersUpOrder[3]][2],
//   groupStageResult[runnersUpOrder[4]][2],
//   groupStageResult[runnersUpOrder[5]][2]
// ]

const bestPlaceTeams = [
  groupStageResult[runnersUpOrder[0]][2],
  groupStageResult[runnersUpOrder[1]][2],
  groupStageResult[runnersUpOrder[2]][2],
  groupStageResult[runnersUpOrder[3]][2],
];

// fancyFunction(2,runnersUpOrder);

// const roundOfSixteen = [
//   [groupStageResult[0][1], groupStageResult[1][1]],
//   [groupStageResult[0][0], groupStageResult[2][1]],
//   [groupStageResult[2][0], "Complicated Come back later"],
//   [groupStageResult[1][0], "Complicated Come back later"],
//   [groupStageResult[3][1], groupStageResult[4][1]],
//   [groupStageResult[5][0], "Complicated Come back later"],
//   [groupStageResult[3][0], groupStageResult[5][1]],
//   [groupStageResult[4][0], "Complicated Come back later"]
// ];

const roundOfSixteen = [
  [groupStageResult[a][1], groupStageResult[1][1]],
  [groupStageResult[a][0], groupStageResult[2][1]],
  [groupStageResult[c][0], groupStageResult[fancyFunction(c, runnersUpOrder)][2]],
  [groupStageResult[b][0], groupStageResult[fancyFunction(b, runnersUpOrder)][2]],
  [groupStageResult[d][1], groupStageResult[4][1]],
  [groupStageResult[5][0], groupStageResult[fancyFunction(f, runnersUpOrder)][2]],
  [groupStageResult[3][0], groupStageResult[5][1]],
  [groupStageResult[4][0], groupStageResult[fancyFunction(e, runnersUpOrder)][2]],
];

console.log(fancyFunction(c, runnersUpOrder));

console.log(`Knockout Stage 1: ${roundOfSixteen[0][0]} vs ${roundOfSixteen[0][1]}`);
console.log(`Knockout Stage 2: ${roundOfSixteen[1][0]} vs ${roundOfSixteen[1][1]}`);
console.log(`Knockout Stage 3: ${roundOfSixteen[2][0]} vs ${roundOfSixteen[2][1]}`);
console.log(`Knockout Stage 4: ${roundOfSixteen[3][0]} vs ${roundOfSixteen[3][1]}`);
console.log(`Knockout Stage 5: ${roundOfSixteen[4][0]} vs ${roundOfSixteen[4][1]}`);
console.log(`Knockout Stage 6: ${roundOfSixteen[5][0]} vs ${roundOfSixteen[5][1]}`);
console.log(`Knockout Stage 7: ${roundOfSixteen[6][0]} vs ${roundOfSixteen[6][1]}`);
console.log(`Knockout Stage 8: ${roundOfSixteen[7][0]} vs ${roundOfSixteen[7][1]}`);

// const roundOfSixteenChoice = [1, 0, 0, 0, 0, 0, 0, 0];

// console.log(roundOfSixteen[0][roundOfSixteenChoice[0]])
// const quarterFinals = [
//   [roundOfSixteen[5][roundOfSixteenChoice[5]], roundOfSixteen[4][roundOfSixteenChoice[4]]]
// ]

// console.log(quarterFinals[0])
