function isEven(num) {
    if (num === 0) {
        return true;
    } else if (num === 1) {
        return false;
    } else {
        num = num - 2;
        return isEven(num);
    }
}