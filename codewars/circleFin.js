function circleSlash(n) {
    if (n === 1) {
        return 1;
    } else {

        return (circleSlash(n - 1) + 2) % n;
    }
}
console.log(circleSlash(5));
