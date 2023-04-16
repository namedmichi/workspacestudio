function sumEvenNumbers(input) {
    var sum = 0;
    for (var i = 0; i < input.length; i++) {
        console.log(input[i]);
        console.log(typeof input[i]);
        if (!(input[i] % 2 == 0)) {
            console.log("continue");
            continue;
        }
        sum += input[i];
    }
    return sum;
}
sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
