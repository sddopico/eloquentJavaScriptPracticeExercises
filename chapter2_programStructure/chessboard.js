let size  = 8;
let board = '';

for (let j = 0; j < size; j++) {
    if (j % 2 == 0) {
        for (let i = 0; i < size; i++) {
            if (i % 2 == 0) {
                board += '#';
            } else {
                board += ' ';
            }
        }
    } else {
        for (let i = 0; i < size; i++) {
            if (i % 2 == 0) {
                board += ' ';
            } else {
                board += '#';
            }
        }
    }
    board += '\n';
}
console.log(board);