 //narrowing
function 내함수(x:number|string){
    let array : number[] = [];
    if(typeof x ==='number'){
        array[0] = x;
    }
}
내함수(123)


//assertion
function 내함수2(x:number|string){
    let array : number[] =[];
    array[0] = x as number ;
}
내함수2(3)

