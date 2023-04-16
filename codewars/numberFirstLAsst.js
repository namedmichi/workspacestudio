const betweenExtremes = (numbers) =>
    numbers
        .sort((a, b) => a - b)
        .splice(1, numberss.length - 2)
        .reduce((a, b) => b - a, 0);

var numberss = [21, 34, 54, 43, 26, 12];

function betweenExtremes(numberss) {
    numberss.sort((a, b) => a - b);
    numberss.splice(1, numberss.length - 2);
    numberss.reduce((a, b) => b - a, 0);
    return numberss.reduce((a, b) => b - a, 0);
}
console.log(numberss.reduce((a, b) => b - a, 0));
