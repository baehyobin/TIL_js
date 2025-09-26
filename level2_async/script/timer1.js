// timer1.js
// setInterval(콜백함수,시간)
/* let num1 = 1;
const timer1 = setInterval(function(){
    num1++
    if(num1 > 5) num1 = 1
    console.log('timer test'+num1)
}, 500) */

// 0-6반복
// 123456 0123456
/* let num2 = 0
const timer2 = setInterval(function(){
    num2++
    if(num2 > 6) num2 = 0
    console.log('timer test'+num2)
},300) */

// 3-0반복
// 3210 3210
/* let num3 = 3
const timer3 = setInterval(function(){
    console.log('timer test' +num3)
    num3--
    if (num3<0) num3=3
},300) */

// 이미지 슬라이드 타이머 활용
const gentleSlide = document.querySelectorAll('.gentle_slide_container1 .slide')
const gentleSlideCurrentNum = document.querySelector('.page_number .current')
const gentleSlideTotalNum = document.querySelector('.page_number .total')
const gentleSlide2 = document.querySelectorAll('.gentle_slide_container2 .slide')
let gentleNum = 0 //초기값
console.log(gentleSlide)

//슬라이드 총 번호 표시
gentleSlideTotalNum.textContent = gentleSlide.length;
gentleSlideCurrentNum.textContent = gentleNum+1;//초기값

// 012345 존재하는 슬라이드 인덱스
//12345 012345 012345

//gentleSlide 모든 슬라이드에 속성 변경 시 애니메이션 기능 적용하는 transition
for(let i of gentleSlide) i.style.transition = 'opacity 0.5s';
const timer = setInterval(function(){
    gentleNum++
    if(gentleNum >= gentleSlide.length) gentleNum = 0
    for(let i of gentleSlide){
        i.style.opacity = 0;
        i.style.visibility = 'hidden';
    }
    gentleSlide[gentleNum].style.opacity = 1
    gentleSlide[gentleNum].style.visibility = 'visible'
    gentleSlideCurrentNum.textContent = gentleNum+1;
},3000)

let gentleNum2 = gentleSlide2.length-1
const timer2 = setInterval(function(){
    gentleNum2--
    if(gentleNum2<0) gentleNum2 = gentleSlide2.length-1
    for(let i of gentleSlide2) i.style.display = 'none'
    gentleSlide2[gentleNum2].style.display = 'block'
},500)

