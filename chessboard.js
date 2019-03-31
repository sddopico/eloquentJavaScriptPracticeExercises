
let board = '';

for (let j = 0; j < 8; j++) {
    if (j % 2 == 0) {
        //board = '';
        for (let i = 0; i < 8; i++) {
            if (i % 2 == 0) {
                board += '#';
            } else {
                board += ' ';
            }
        }
        board += '\n';
    } else {
        //board = '#';
        for (let i = 0; i < 8; i++) {
            if (i % 2 == 0) {
                board += ' ';
            } else {
                board += '#';
            }
        }
        board += '\n';
    }
}
console.log(board);