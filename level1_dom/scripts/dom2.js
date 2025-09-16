//dom2.js
//1. 변수 section*2, a*2, btn*2 (동적대상 체크 후 변수생성)
const sectionTag = document.querySelectorAll('section')
const linkCls = document.querySelectorAll('section .link')
const btnCls = document.querySelectorAll('section .btn')
console.log(sectionTag, sectionTag[0], sectionTag.length)
console.log(linkCls, linkCls[0],linkCls.length)
console.log(btnCls, btnCls[1], btnCls.length)
//2. 이벤트와 함수, 속성
//초기값(즉시실행)
sectionTag[0].style.backgroundColor = '#ff0'
sectionTag[1].style.backgroundColor = '#0cf'

//이벤트, 콜백함수 추가 생성
//a2 클릭 시 section[1] 배경색 변경
//a태그에 클릭, 터치 이벤트 적용 시 href 때문에 스크롤이 위로 올라가는 문제 발생함 -> a의 기본속성기능 해제로 preventDefault()
/* linkCls[1].addEventListener('click',bgFunc)
function bgFunc(e){
    e.preventDefault();
    return sectionTag[1].style.backgroundColor = 'pink'
    } */
/* linkCls[1].addEventListener('click',function(event){
    console.log(event)
    event.preventDefault()
    sectionTag[1].style.backgroundColor = 'pink'
}) */
linkCls[1].addEventListener('click',(e)=>{
    e.preventDefault()
    sectionTag[1].style.backgroundColor = 'pink'
})
/* linkCls[0].addEventListener('click',function(e){
    e.preventDefault()
    sectionTag[0].style.backgroundColor = 'coral'
}) */
//a, button(type=button)
//button 이용 JS 진행시 특정 페이지 이동이 필요할 때 location.href를 사용
//예시)로그인성공시 메인페이지 이동
//JS 상대경로 작성은 html 위치 기준으로 작성!
/* btnCls[0].addEventListener('click',()=>{
    window.location.href = '../sass_study/project2/index.html'
}) */
btnCls[0].addEventListener('click',sassProjectFunc('project1')) //project1.index
btnCls[1].addEventListener('click',sassProjectFunc('project2')) //project2.index
function sassProjectFunc(link){
    return function(){
        location.href = `../sass_study/${link}/index.html`
    }}

//쇼핑몰 수량 변수
const inputNum = document.querySelector('#num')
const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
const priceCls = document.querySelector('#numFrm .price em')
let count = 1;
let price = 12900;
console.log(inputNum, plusBtn, minusBtn,priceCls)
// 수량이 1로 시작해서 +클릭하면 수량증가, -클릭하면 수량감소
//1개당 가격이 12900원
//초기값
inputNum.value = count;
priceCls.textContent = price.toLocaleString('ko-kr');
//초기값 변수
//읽기 전용일때 수정이 필요하면 textContent 또는 innerHTML
//input은 읽기쓰기 동시에 되는 태그라서 input.value
//이벤트, 함수
//+클릭하면 수량증가
plusBtn.addEventListener('click',plusFunc)
minusBtn.addEventListener('click',minusFunc)
//증감연산자 ++ --
function plusFunc(){
    console.log (typeof(inputNum.value), typeof(count))
    inputNum.value = ++count;
    let totalPrice = price * count
    return priceCls.textContent = totalPrice.toLocaleString('ko-kr');
}
function minusFunc(){
    inputNum.value = --count;
    totalPrice = price * count
    return priceCls.textContent = totalPrice.toLocaleString('ko-kr');
}