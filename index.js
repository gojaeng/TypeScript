//narrowing
function 내함수(x) {
    var array = [];
    if (typeof x === 'number') {
        array[0] = x;
    }
}
내함수(123);
//assertion
function 내함수2(x) {
    var array = [];
    array[0] = x;
}
내함수2(3);
