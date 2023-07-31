interface CarType {
    model: string;
    price: number;
    tax: (price: number) => number;
}
declare class Car implements CarType {
    model: string;
    price: number;
    constructor(a: string);
    tax(a: any): number;
}
declare let 붕붕이: Car;
