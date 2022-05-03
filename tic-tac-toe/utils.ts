import { TicTacToe } from './board';

export const checkWinner = (arr: Array<TicTacToe>) => {
  let result: TicTacToe = null;
  let winnerString: string = '';
  const rows = [
    [arr[0], arr[1], arr[2]],
    [arr[3], arr[4], arr[5]],
    [arr[6], arr[7], arr[8]],
  ];
  const columns = [
    [arr[6], arr[3], arr[0]],
    [arr[7], arr[4], arr[1]],
    [arr[8], arr[5], arr[2]],
  ];
  const diagonals = [
    [arr[6], arr[4], arr[2]],
    [arr[8], arr[4], arr[0]],
  ];
  rows.forEach((row, index) => {
    if (row[0] && row[0] === row[1] && row[1] === row[2]) {
      result = row[0];
      winnerString = `Rows ${index}`;
    }
  })
  columns.forEach((column, index) => {
    if (column[0] && column[0] === column[1] && column[1] === column[2]) {
      result = column[0];
      winnerString = `Columns ${index}`;
    }
  })
  diagonals.forEach((diagonals, index) => {
    if (diagonals[0] && diagonals[0] === diagonals[1] && diagonals[1] === diagonals[2]) {
      result = diagonals[0];
      winnerString = `Diagonals ${index}`;
    }
  })
  return { result, winnerString };
}
