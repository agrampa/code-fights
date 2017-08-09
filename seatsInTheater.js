// nCols = total columns in the theater
// nRows = total rows in the theater
// col = column of your seat
// row = row of your seat

// Determine how many people will be blocked if you get up and leave the theater

function seatsInTheater(nCols, nRows, col, row) {
  let blockedAcross = (nCols - col + 1)
  let blockedBehind = (nRows - row)
  return blockedAcross * blockedBehind
}

// should be 96
seatsInTheater(16, 11, 5, 3)
