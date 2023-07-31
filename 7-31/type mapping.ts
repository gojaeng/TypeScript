// type CarCar = {
//     color : boolean,
//     model : boolean,
//     price : boolean | number
// }
// type TypeChanger<MyType> = {
//     [key in keyof MyType] : string
    
// }

// type 새로운타입 = TypeChanger<CarCar>

type 타입추출<T> = T extends (infer R)[] ? R : unknown;

type a = 타입추출<String[]>
