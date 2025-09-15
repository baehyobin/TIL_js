const inputTag = document.querySelectorAll('input')
const btnTag = document. querySelectorAll('button')
console.log(inputTag, btnTag)
console.log(inputTag[0], btnTag[0])
console.log(inputTag[1], btnTag[1])
console.log(inputTag.length, btnTag.length)

const searchInput = document.querySelector('#s')
const searchBtn = document.querySelector('#s+button')
const amountInput = document.querySelector('#n')
const amountBtn = document.querySelector('#n+button')
/* const searchInput = document.querySelector('input[type=search]')
const searchInput = document.querySelector('section:first_child input')
const searchInput = document.querySelector('input') */
console.log(searchInput, searchBtn, amountInput, amountBtn) //querySelectorAll이 아니므로 [인덱스] 사용금지!

/* 태그 속성★, 함수 테스트 */
console.log(searchInput.type, searchInput.placeholder) // 속성읽기
console.log()//속성을 변경하려면 콘솔 안? 밖?
// searchInput.placeholder () // 함수일때 사용
searchInput.placeholder = "" // 속성일때
let checkValue = ''; //속성읽기 (input 값 읽음)
searchInput.value = '인기검색어 : HTML'; //value값입력
checkValue = searchInput.value; //변경값 변수담기
console.log(checkValue)

console.log(amountInput.type)
console.log(amountInput.name)
console.log(amountInput.value + 1) //문자 + 숫자 = 문자
console.log(typeof(amountInput.value)) //string

checkValue = Number(amountInput.value) + 1
console.log(`주문수량 : ${checkValue}`)

amountInput.style.backgroundColor = '#eee'
amountInput.style.width = '60px'
amountInput.style.height = '100px'
amountInput.style.textalign = 'center'
searchInput.style.backgroundColor = 'pink'
searchInput.style.color = 'green'
amountBtn.style.backgroundColor = '#000'
amountBtn.style.color = '#fff'
amountBtn.style.margin = '50px'
amountBtn.style.padding = '50px'
amountBtn.style.borderRadius = '25px'
searchBtn.style.backgroundColor = 'yellow'
searchBtn.style.width = '100px'
searchBtn.style.height = '30px'
searchBtn.style.textalign = 'center'
searchBtn.style.border = '1px solid #000'

//이벤트 활용 콜백함수 호출
//이벤트 문법
//객체.addEventListener('이벤트종류', 콜백함수)
const orderBtn = document.querySelector('#order')
const cartBtn = document.querySelector('#cart')

console.log(orderBtn, cartBtn);

//주문 버튼 클릭 시 '상품을 선택하세요' 경고장 출력
//이벤트 뒤 함수 작성방식 : 콜백함수호출(추천), 익명함수

//이벤트 뒤 콜백함수는 함수 자체 호출개념. 결과값만 받고 수정값은 전달하지 않음
//매개변수 수정이 필요한 콜백함수는 이벤트 뒤 익명함수 또는 화살표함수 추가제작 후 재작성

/* orderBtn.addEventListener('click',function(){
    alert('상품을 선택하세요')
}) */ //익명함수법
orderBtn.addEventListener('click',btnFunc_v2('장바구니에'))
cartBtn.addEventListener('click',()=>{btnFunc('상품을')})
function btnFunc(lang){
    return alert(lang+ '담으세요')
}
function btnFunc_v2(lang){/* 클로저(closure) */
    return function(){
        //내부함수는 외부함수의 매개변수를 기억함
        alert(lang+ '담으세요')
    }
}

//주문하기 클릭 시 | '장바구니에 담으세요'
//장바구니 클릭 시 | '상품을 담으세요'
//콜백함수 한개만 활용

//아이디, 비밀번호 중복확인 클릭 시
//아이디가 중복되었습니다.
//비밀번호가 중복되었습니다.
//1. 제어 DOM 대상 변수 등록
const idChk = document.querySelector('#id')
const pwChk = document.querySelector('#pw')

//2. '클릭 시' 이벤트 콜백함수 제작
idChk.addEventListener('click',()=>chkBtn('아이디'))
pwChk.addEventListener('click',chkBtn_v2('비밀번호'))

//3. 실행 메세지 통일된 특징 맞춰 콜백함수 1개 제작
//3-1. 콜백함수 내 함수호출 시 다른 내용이 있으면 매개변수 제작
function chkBtn(info){
    return alert(info + '가 중복되었습니다')} //익명함수사용
function chkBtn_v2(info){
    return function(){
        alert(info + '가 중복되었습니다') //클로저함수사용
    }}
//4. 3번 콜백함수를 2번 이벤트에서 호출

//이벤트 콜백함수연습
// Q.textarea값 아무거나 입력 시 콘솔창에 '50자 이상 입력하세요' 출력
// Q2. textarea를 활성화 했을 때 테두리 빨강색
// Q3. textarea를 비활성화 했을 때 테두리 회색

const reviewText = document.querySelector('textarea#review')
console.log(reviewText)
reviewText.addEventListener ('keydown',lengthFunc)
reviewText.addEventListener ('focus',() => {borderFunc('#f00')})
reviewText.addEventListener ('blur',() => {borderFunc('#aaa')})
function lengthFunc(){return console.log('50자 이상 입력하세요')}
function borderFunc(color){
    return reviewText.style.border = `2px solid ${color}`
}
borderFunc('#aaa') //초기값
reviewText.style.outline='none'

//배경 버튼 클릭시 부모 article 배경색 변경하기
const articleTag = document.querySelector('article')
const bgBtn = document.querySelectorAll('article button')
const bgP = articleTag.querySelector('p')
articleTag.style.width = '430px'
articleTag.style.height = '90vh'
articleTag.style.backgroundColor = '#eee'
console.log(articleTag, bgBtn, bgP)
/* bgP.textContent ='현재<br>배경색상 : #eee' */

bgBtn[0].addEventListener('mouseover',bgColorFunc_v2('pink'))
bgBtn[1].addEventListener('mouseover',bgColorFunc_v2('yellow'))
bgBtn[2].addEventListener('mouseover',bgColorFunc_v2('green'))

function bgColorFunc(bgcolor){
    return articleTag.style.backgroundColor = `${bgcolor}`
}
function bgColorFunc_v2(bgcolor){
    return function(){
        articleTag.style.backgroundColor = bgcolor;
        bgP.textContent =`현재 배경색상 : ${bgcolor}`
    }
}