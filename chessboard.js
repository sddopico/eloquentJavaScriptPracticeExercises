let board = ' ';

for (let i = 0; i < 8; i++) {
    if (i % 2 == 0) {
        board += '#';
    } else {
        board += ' ';
    }
}

board += '\n';

console.log(board);