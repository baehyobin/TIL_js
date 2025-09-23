
// 반복문 for.js
// for(초기변수선언; 조건식; 증감식){ 조건이 참일때 반복실행문 }
// for문의 초기변수로 자주 사용하는 변수명 : i, j, k, m, n

// 1-5 반복문
for(let i=1; i<6; i++){console.log('반복')}
console.log('--------------------')
// 5-10 반복문 5678910
for(let i=5; i<=10; i++){console.log(i)}
console.log('--------------------')
// 5-0 반복문 543210
for(let k=5; k>=0; k--){console.log(k)}
console.log('--------------------')
//초기값 0 시작
//출력형태) JS 1일차 JS 2일차 JS 3일차
for(let i=0; i<3; i++){console.log(`JS ${i++}일차`)}
console.log('--------------------')
for(let i=0; i<3; i++){console.log(`JS ${i+1}일차`)}
console.log('--------------------')
for(let i=0; i<3; i++){console.log(`JS ${i+=1}일차`)} //1(0+1)일차//3(1+1+1)일차
console.log('--------------------')
// 2단 구구단 2*1 - 2*9
let dan2 = document.querySelector('.dan2')
for(let i=1; i<10; i++){dan2.innerHTML += (`<li>2*${i}=${2*i}</li>`)}
// querySelectorAll 함수로 선택한 DOM 변수 for문
// 배열 인덱스 for문
const array = ['photoshop', 'illustrator', 'figma','html','css']
// 위 배열 이용 반복문으로 콘솔에 array값 모두 출력하기
for(let i=0; i<array.length; i++){console.log(array[i])}
console.log('--------------------')
// css-photoshop 역순으로 콘솔 출력
for(let i=array.length; i>0; i--){console.log(array[i-1])}
console.log('--------------------')
const flower = [
    {
        name:'장미',
        month:1,
    },{
        name:'개나리',
        month:2,
    },{
        name:'수선화',
        month:3,
    }
]
// 출력예) 1월 탄생화 장미, 2월 탄생화 개나리, 3월 탄생화 수선화
for(let i=0; i<flower.length; i++){console.log(`${flower[i].month}월 탄생화 ${flower[i].name}`)}
console.log('--------------------')
// 1-10 반복출력(홀수)
// 변수%2 == 1
for(let i=1; i<11; i++){
    if(i%2==1){console.log(i)}
}
console.log('--------------------')
// 5-20까지 짝수만 출력
for(let i=5; i<21; i++){
    if(i%2==0){console.log(i)}
}
console.log('--------------------')
// 0-10까지 홀수만 역순 출력
for(let i=10; i>=0; i--){
    if(i%2){console.log(i)}
}
console.log('--------------------')
const dan2Li = dan2.querySelectorAll('li')
console.log(dan2Li);
//홀수 li 노랑배경 짝수 li 파랑배경
// for(let i=0; i<dan2Li.length; i++){
//     if(i%2){dan2Li[i].style.backgroundColor = 'yellow';}
//     else {dan2Li[i].style.backgroundColor = 'blue';}
// }
// 홀수li w50 h20 bg노랑 color 파랑
// 홀수li w50 h20 bg파랑 color 노랑
// 객체.classList.add(클래스명)
// 객체.classList.remove(클래스명)
// css or sass 클래스를 미리 준비하고 js 동적결과제 따라 적용하기
for (let i=0; i<dan2Li.length; i++){
    dan2Li[i].classList.add('size')
    if(i%2==0){
        dan2Li[i].classList.add('color_even')
    }else{
        dan2Li[i].classList.add('color_odd')
    }
}
console.log('--------------------')
// while문(반복횟수가 정해지지 않고 특정 조건이 참인 동안 반복실행)
// 활용 예) 사용자로부터 올바른 입력값을 받을 떄까지 반복
// 활용 예) 웹서비스 및 게임 등에서 계속 실행되어야 하는 프로그램
// while(조건){조건이 참일 때 반복실행}

/* let htmlQ = prompt('a태그는 가로, 세로 크기를 가질 수 없다. ox중 하나를 입력하세요')
//정답을 맞출 때까지 무한반복질문
while(htmlQ != 'x'){
    htmlQ = prompt('a태그는 가로, 세로 크기를 가질 수 없다. ox중 하나를 입력하세요')
}
alert('정답입니다') */

/* let cssQ =prompt('ox퀴즈 : scaleX()를 조정하면 Y축 값도 비율에 맞춰 조정된다.')
while(cssQ != 'x'){
    cssQ = prompt('ox퀴즈 : scaleX()를 조정하면 Y축 값도 비율에 맞춰 조정된다.')
}
alert('정답입니다') */

while(false){
    const qa = prompt('자바스크립트는 동적언어이다(O/X)')
    if (qa !== 'o' && qa !== 'x'){
        alert('잘못된 입력입니다. o,x만 입력해주세요.');
        continue;
        //break;
    }
    if(qa === 'o'){
        alert('정답입니다'); break;
    }
    else{
        alert('오답입니다'); break;
    }
}
//alert('퀴즈종료')
//2-9단까지 구구단
let dan99 = document.querySelector('.dan99')
let li99 = ''
for (let i=2; i<10; i++){//1단for 시작
    for(let j=1; j<10; j++){//2단 for 시작
        li99 += `<li>${i}X${j}=${i*j}</li>`
    }//2단 for 종료(2단 for가 모두 반복 후 1단 시작)
    dan99.innerHTML =li99;
}
console.log('--------------------')
// for - in (ES6)
const cat = {
    color : ['흰색','검은색','노란색'],
    age : 2,
    name: '삼색이',
}
for(let i in cat){
    console.log(i, cat[i])
}
console.log('--------------------')
const menuA = document.querySelectorAll('.menu a')
for(let i of menuA){
    console.log(i)
    i.style.color = 'aqua'
    i.addEventListener('click',()=>{
        console.log(i)
    })
}