function keepOrder(ary, val) {
    for (var i = 0; i < ary.length; i++) {
        if (ary[i] > val) {
            return i;
        }
    }
    return ary.length;
}
