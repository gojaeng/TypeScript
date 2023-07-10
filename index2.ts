let 제목 = document.querySelector('#title');

/*
1
if(제목 != null){
    제목.innerHTML = '반가워요';
}

2
if(제목 instanceof Element){
    제목.innerHTML = '반가워요';
}

3
let 제목 = document.querySelector('#title') as Element;

4
if(제목?.innerHTML != undefined){
    제목.innerHTML = '반가워요'
}

5
strictNullChecks:false
*/

let 링크 = document.querySelector('.link');
if(링크 instanceof HTMLAnchorElement){
  링크.href='https://kakao.com'
}

let 버튼 = document.querySelector('#button');
버튼?.addEventListener('click',function(){
    console.log('안녕')
})

let 이미지 = document.querySelector('#image');
if(이미지 instanceof HTMLImageElement){
    이미지.src = 'change.jpg';
}

// let 링크 = doucment.querySelector('.naver');
// 링크.forEach((a)=>{
//     if(a instanceof HTMLAnchorElement){
//         a.href='https://kako.com'
//     }
// })