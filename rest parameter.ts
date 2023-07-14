function 함수(...a : number[]){
    console.log(a);
}
함수(1,5,3,5,6,6)

let {student,age} = {student:true, age:20};
let 오브젝트 = {student: true, age: 20}


function 함수({student,age}){
    console.log(student,age);
}

함수(1,2);
함수({student: true, age: 20});