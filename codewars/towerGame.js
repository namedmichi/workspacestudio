function setCharAt(str, index, chr) {

    return str.substring(0, index) + chr + str.substring(index + 1);
}

function towerBuilder(nFloors) {
    if (nFloors == 1) {
        return ["*"]
    }

    var strings = "*";
    strings = strings.padStart(nFloors, " ");
    strings = strings.padEnd(nFloors * 2 - 1, " ");
    const res = [];

    for (let i = 0; i < nFloors; i++) {
        res.push(strings);
    }
    for (let index = 0; index < nFloors - 1; index++) {
        var tempstr = setCharAt(res[index], nFloors + index, "*");
        res[index + 1] = setCharAt(tempstr, nFloors - index - 2, "*");
    }
    return res;
}
