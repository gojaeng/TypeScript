class User {
    name: string;
    private familyName ='kim'
    constructor(a) {
        this.name = a+this. familyName;
    }
    이름변경함수(){
        this.familyName = 'park';
    }
}
let 유저1 = new User('민수');
유저1.이름변경함수()


class Person10{
    constructor(public name : string){

    }
}
let 자식 = new Person10('kim');
console.log(자식)