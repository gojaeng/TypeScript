var 사람 = /** @class */ (function () {
    function 사람(a) {
        this.name = a;
    }
    사람.prototype.함수 = function (a) {
        console.log('안녕' + a);
    };
    return 사람;
}());
var 사람1 = new 사람('kim');
var 사람2 = new 사람('park');
사람1.함수('안녕');
