export const getRunnersUp = (data) => {
  let returnData = [];

  for (let i = 0; i < data.length; i++) {
    returnData.push(data[i][2]);
  }

  return returnData; // Return array of runners up
};

export const getKnockouts = (initialSelection, orderedSelection) => {
  const [a, b, c, d, e, f] = [0, 1, 2, 3, 4, 5];

  let runnersUp = [];
  let alphRunnersUp = [];

  for (let i = 0; i < 4; i++) {
    alphRunnersUp.push(orderedSelection[i].group);
    runnersUp.push(orderedSelection[i].name);
  }

  alphRunnersUp.sort();

  const matches = [
    [initialSelection[a][1], initialSelection[b][1]], // Match 1
    [initialSelection[a][0], initialSelection[c][1]], // Match 2

    [initialSelection[c][0], initialSelection[lookup("c", alphRunnersUp)][2]], // Match 3
    [initialSelection[b][0], initialSelection[lookup("b", alphRunnersUp)][2]], // Match 4

    [initialSelection[d][1], initialSelection[e][1]], // Match 5
    [initialSelection[f][0], initialSelection[lookup("f", alphRunnersUp)][2]], // Match 6

    [initialSelection[d][0], initialSelection[f][1]], // Match 7
    [initialSelection[e][0], initialSelection[lookup("e", alphRunnersUp)][2]], // Match 8
  ];

  return matches;
};

const lookup = (winnerGroup, alphRunnersUp) => {
  const [a, b, c, d, e, f] = [0, 1, 2, 3, 4, 5];

  if (alphRunnersUp <= [["a", "b", "c", "d"]] && alphRunnersUp >= [["a", "b", "c", "d"]]) {
    return checkWinnerGroup(winnerGroup, [a, d, b, c]); // Line 1
  } else if (alphRunnersUp <= [["a", "b", "c", "e"]] && alphRunnersUp >= [["a", "b", "c", "e"]]) {
    return checkWinnerGroup(winnerGroup, [a, e, b, c]); // Line 2
  } else if (alphRunnersUp <= [["a", "b", "c", "f"]] && alphRunnersUp >= [["a", "b", "c", "f"]]) {
    return checkWinnerGroup(winnerGroup, [a, f, b, c]); // Line 3
  } else if (alphRunnersUp <= [["a", "b", "d", "e"]] && alphRunnersUp >= [["a", "b", "d", "e"]]) {
    return checkWinnerGroup(winnerGroup, [d, e, a, b]); // Line 4
  } else if (alphRunnersUp <= [["a", "b", "d", "f"]] && alphRunnersUp >= [["a", "b", "d", "f"]]) {
    return checkWinnerGroup(winnerGroup, [d, f, a, b]); // Line 5
  } else if (alphRunnersUp <= [["a", "b", "e", "f"]] && alphRunnersUp >= [["a", "b", "e", "f"]]) {
    return checkWinnerGroup(winnerGroup, [e, f, b, a]); // Line 6
  } else if (alphRunnersUp <= [["a", "c", "d", "e"]] && alphRunnersUp >= [["a", "c", "d", "e"]]) {
    return checkWinnerGroup(winnerGroup, [e, d, c, a]); // Line 7
  } else if (alphRunnersUp <= [["a", "c", "d", "f"]] && alphRunnersUp >= [["a", "c", "d", "f"]]) {
    return checkWinnerGroup(winnerGroup, [f, d, c, a]); // Line 8
  } else if (alphRunnersUp <= [["a", "c", "e", "f"]] && alphRunnersUp >= [["a", "c", "e", "f"]]) {
    return checkWinnerGroup(winnerGroup, [e, f, c, a]); // Line 9
  } else if (alphRunnersUp <= [["a", "d", "e", "f"]] && alphRunnersUp >= [["a", "d", "e", "f"]]) {
    return checkWinnerGroup(winnerGroup, [e, f, d, a]); // Line 10
  } else if (alphRunnersUp <= [["b", "c", "d", "e"]] && alphRunnersUp >= [["b", "c", "d", "e"]]) {
    return checkWinnerGroup(winnerGroup, [e, d, b, c]); // Line 11
  } else if (alphRunnersUp <= [["b", "c", "d", "f"]] && alphRunnersUp >= [["b", "c", "d", "f"]]) {
    return checkWinnerGroup(winnerGroup, [f, d, c, b]); // Line 12
  } else if (alphRunnersUp <= [["b", "c", "e", "f"]] && alphRunnersUp >= [["b", "c", "e", "f"]]) {
    return checkWinnerGroup(winnerGroup, [f, e, c, b]); // Line 13
  } else if (alphRunnersUp <= [["b", "d", "e", "f"]] && alphRunnersUp >= [["b", "d", "e", "f"]]) {
    return checkWinnerGroup(winnerGroup, [f, e, d, b]); // Line 14
  } else if (alphRunnersUp <= [["c", "d", "e", "f"]] && alphRunnersUp >= [["c", "d", "e", "f"]]) {
    return checkWinnerGroup(winnerGroup, [f, e, d, c]); // Line 15
  }
};

const checkWinnerGroup = (winnerGroup, potResults) => {
  if (winnerGroup == "b") {
    return potResults[0];
  } else if (winnerGroup == "c") {
    return potResults[1];
  } else if (winnerGroup == "e") {
    return potResults[2];
  } else if (winnerGroup == "f") {
    return potResults[3];
  }
};

// console.log(lookup("e", alphRunnersUp));
// console.log(initialSelection[lookup("e", alphRunnersUp)][2]);
// console.log("Runners Up Order", runnersUpOrder);

// console.log(runnersUpOrder.reduce(reducer));

// // Make array of runners up based on their predicted rank (only 4 elements nneeded)
// const runnersUp = [
//   initialSelection[runnersUpOrder[0]][2],
//   initialSelection[runnersUpOrder[1]][2],
//   initialSelection[runnersUpOrder[2]][2],
//   initialSelection[runnersUpOrder[3]][2],
// ];

// let bestRunnersUp = runnersUpOrder.sort(); // Alphabatized version of the runners up order, needed for matrix

// console.log("Runners Up", runnersUp);
