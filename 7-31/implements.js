var Car = /** @class */ (function () {
    function Car(a) {
        this.price = 1000;
        this.model = a;
    }
    Car.prototype.tax = function (a) {
        return a * 0.1;
    };
    return Car;
}());
var 붕붕이 = new Car('morning');
