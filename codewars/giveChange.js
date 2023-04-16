function giveChange(amount) {
    var array = [0, 0, 0, 0, 0, 0];
    cur = amount;
    array[5] = Math.floor(amount / 100);
    cur = amount % 100;
    array[4] = Math.floor(cur / 50);
    cur = cur % 50;
    array[3] = Math.floor(cur / 20);
    cur = cur % 20;
    array[2] = Math.floor(cur / 10);
    cur = cur % 10;
    array[1] = Math.floor(cur / 5);
    cur = cur % 5;
    array[0] = Math.floor(cur / 1);
}
console.log(giveChange(365));
