var toClose = 0;
function validParentheses(parenStr) {
    if (parenStr[0] == ")") {
        console.log("start wrong");
        return false;
    }
    if (parenStr[parenStr.length - 1] == "(") {
        console.log("end wrong");
        return false;
    }
    var open = 0;
    var close = 0;
    for (var i = 0; i < parenStr.length; i++) {
        console.log(parenStr[i]);
        if (parenStr[i] == "(") {
            open += 1;
            if (!checkNext(parenStr, i)) {
                return false;
            }
        } else {
            close += 1;
        }
    }

    if (close !== open) {
        console.log("not even");
        return false;
    }
    return true;
}
function checkNext(str, index) {
    toClose += 1;
    console.log("to close" + toClose);

    if (str[index + 1] == ")") {
        toClose -= 1;
        console.log("to close" + toClose);
        if (toClose == 0) {
            console.log("close because toClose 0");

            return true;
        } else {
            toClose -= 1;
            if (checkNext(str, index + 1)) {
                return true;
            }
        }
    }
    if (str[index + 1] == "(") {
        if (checkNext(str, index + 1)) {
            return true;
        }
    }
    toClose = 0
    return false;
}