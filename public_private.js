var User = /** @class */ (function () {
    function User(a) {
        this.familyName = 'kim';
        this.name = a + this.familyName;
    }
    User.prototype.이름변경함수 = function () {
        this.familyName = 'park';
    };
    return User;
}());
var 유저1 = new User('민수');
유저1.이름변경함수();
var Person10 = /** @class */ (function () {
    function Person10(name) {
        this.name = name;
    }
    return Person10;
}());
var 자식 = new Person10('kim');
console.log(자식);
