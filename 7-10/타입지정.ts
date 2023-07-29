class 사람{
    name : string;
    constructor(a : string){
        this.name = a;
    }
    함수(a: string){
        console.log('안녕' + a);
    }
}

let 사람1 = new 사람('kim');
let 사람2 = new 사람('park');
사람1.함수('안녕');

