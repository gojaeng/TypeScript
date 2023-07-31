interface CarType {
    model : string;
    price : number;
    tax : (price: number) => number;
}

class Car  implements CarType{
    model : string;
    price : number =1000;
    constructor(a : string){
        this.model = a
    }
    tax(a){
        return a * 0.1;
    }
}
let 붕붕이 = new Car('morning');