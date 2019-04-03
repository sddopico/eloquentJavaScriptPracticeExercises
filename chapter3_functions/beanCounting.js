function countBs(str) {
    let bStr;
    for (i=0; i<str.length; i++) {
        if (str[i] === 'B') {
            bStr += str[i];
        }
    }
    return bStr.length;
}