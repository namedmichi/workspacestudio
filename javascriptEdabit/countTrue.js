var value = 0;

function countTrue(arr) {

    if (value !== 0) {
        value = 0;
    }

	arr.forEach(test);
    return value;
}
function test(item){
    if (item){
        value += 1;
    }
}