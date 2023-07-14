function 함수() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
함수(1, 5, 3, 5, 6, 6);
var _a = { student: true, age: 20 }, student = _a.student, age = _a.age;
var 오브젝트 = { student: true, age: 20 };
function 함수(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함수(1, 2);
함수({ student: true, age: 20 });
