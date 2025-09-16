//boolean.js
//거짓으로 평가되는 값
//false, null,undefined,NaN,0,""
//위 제외 모든 값 참. [] {} 포함
let a = "";
console.log(Boolean(a))
a = [];
console.log(Boolean(a))
//비교연산자
// == 일차연산, === 데이터타입까지 일치
let b = 10;
let c = "10";
let result = b == c;
console.log(Boolean(result)) //값만 비교 -> true
result = b === c;
console.log(Boolean(result)) //값+데이터타입 비교 -> false
result = b != c;
b+=5;
console.log(Boolean(result)) //값만 비교 -> false
result = b !== c;
console.log(Boolean(result)) //값+데이터타입 비교 -> true
c = Number(c) + 2;
c = 2;
result = b<c;
console.log(Boolean(result)) // false
result = b>c;
console.log(Boolean(result)) //true
b=c;
result = b <= c;
console.log(Boolean(result)) //true
result = b => c;
console.log(Boolean(result)) //true
console.log('-------------------------------------------')
//논리연산자 && || !
console.log("A" && null) // null
console.log("A" && "B") // "B"
console.log( 0 && "B") // 0
console.log( 0 || "B") // "B"
console.log( 0 || "B") // "B"
console.log( "A" || "B") // "A"
console.log( "" || {}) // {}"
console.log(!"A") // false
let d;
result = !d;
console.log(result); //true
let e = []
result = !e;
e +=['사과']
console.log(result); //false
//----------------------
console.log('조건문--------------------------------------')
//if(조건식){조건식이 참일 때 실행문}
let x = []
let y = 0
if(x){console.log('x는 참이다1');}
if(y){console.log('y는 참이다');}
if(x != true){console.log('x는 참이다2');}
if(x&&y){console.log('x,y는 참이다1');}
if(x||y){console.log('x만 참이다');}
x=7;
y=2;
if(x>y && x==y){alert('참일때 실행되는 문구1');}
//if(x>y || x==y){alert('참일때 실행되는 문구2');}
if(!x){console.log('참일때 실행되는 문구3');}
if(y || !x){console.log('참일때 실행되는 문구4');}
if(!y && x){console.log('참일때 실행되는 문구5');}
y= x++
if(y>=x){console.log('참일때 실행되는 문구!');} //false
if(y<=x){console.log('참일때 실행되는 문구!2');} //true
if(y>=x || x){console.log('참일때 실행되는 문구!3');} //true
x=y
if('x>=y'&& 0){console.log('참일때 실행되는 문구!4');} //true

//에버랜드 놀이기구 탑승조건 확인 JS
//나이 입력 후 버튼 클릭 시 10살 이하면 '탑승불가' 메세지 출력
const ageInput = document.querySelector('.everland #age')
const ageBtn = document.querySelector('.everland #age_btn')
const ageResult = document.querySelector('.everland .result')
console.log(ageBtn, ageInput, ageResult)

// console.log(ageInput.value)
// 이벤트 함수 밖에 작성하는건 초기값 확인용
// 나이 입력 후 버튼 클릭 시 콘솔에 입력한 나이값 표시
//* 버튼 클릭 시 특정동작(입력한 나이값 가져오기)이 일어나야한다
ageBtn.addEventListener('click',()=>{
    console.log(ageInput.value)
    //ageInput의 value 값이 10 이하면
    //ageResult에 '탑승불가' 메세지 출력
    if(ageInput.value<=10){
        ageResult.textContent = '탑승불가';
        ageInputReset()
    }
    //10살 초과면 '탑승가능'메세지 출력
    if(ageInput.value>10){
        ageResult.textContent = '탑승가능';
        ageInputReset()
    }
    //값 입력 안하고 클릭시 '값을 입력하세요' 메세지 출력
    if(ageInput.value == ''){ageResult.textContent = '값을 입력하세요';}
})

function ageInputReset(){
    return ageInput.value = '';
}
//인쇄 알고리즘
//인쇄하기 버튼 클릭 시 '인쇄하시겠습니까?' 물어보고 확인 누르면 인쇄창 실행
//'인쇄하시겠습니까?'물어보고(내장함수 활용 confirm())
/* const printBtn = document.querySelector('.print #print_btn')
printBtn.addEventListener('click',printFunc)
function printFunc(){
    let confirmResult = confirm('인쇄 하시겠습니까?')
    console.log(confirmResult)
    if(confirmResult){print()}
    // if(confirm('인쇄 하시겠습니까?')){print()}
    return // 함수종료위치
} */

console.log('-------------------------------------')
// 참과 거짓에 따른 결과출력 조건문
// if(조건식){참일때실행}else{거짓일때실행}
// 관리자 로그인
// 관리자(admin) 로그인사용자 아이디 admin 일 경우 '관리자님 어서오세요' 아니면 '관리자페이지 접근불가'
/* const userId = prompt('아이디')
if(userId != 'admin'){
    alert('관리자페이지 접근불가')
}else{
    alert('관리자님 어서오세요')
} */

//로그인 조건문
//아이디(미입력) 비밀번호(입력) 로그인클릭시 - 아이디입력경고 메세지 출력
//아이디(입력) 비밀번호(미입력) 로그인클릭시 -비밀번호입력경고 메세지 출력
//아이디(입력) 비밀번호(입력) 로그인클릭시 - (맞는정보기준) index.html이동
//아이디(입력) 비밀번호(입력) 로그인클릭시 - (틀린정보기준) 정보오류 메세지 출력
const userId = document.querySelector('#user_id')
const userPw = document.querySelector('#user_pw')
const loginBtn = document.querySelector('#login_btn')
const loginErrorMsg = document.querySelector('#loginFrm .error')
console.log(userId, userPw, loginBtn, loginErrorMsg)
//회원정보 저장 DB
//관리자 이름 : 봄, 나이 : 30
//일반회원 이름 : 여름, 나이 : 20
const userDb = [{
    name:'봄',
    age:30,
    pst:'관리자',
    id:'admin',
    pw:'admin1234',
},{
    name:'여름',
    age:20,
    pst:'일반회원',
    id:'summer',
    pw:'summer1234',
}]

//로그인 클릭 이벤트
loginBtn.addEventListener('click',()=>{
    //아이디 미입력 기준 에러메세지 출력
    if(userId.value == ''){
        loginErrorMsg.textContent = '아이디를 입력해주세요';
    }else if(userPw.value ==''){
        //if조건이 거짓이고 else if조건이 참일때 실행
        //비밀번호 미입력 기준 에러메세지 출력
        loginErrorMsg.textContent = '비밀번호를<br>입력해주세요';
    }else if(userId.value==userDb[0].id&&userPw.value==userDb[0].pw){
        //입력한 id가 관리자의 저장된 id와 동일시 index 이동
        //location.href = '../index.html';
        //isLogin = true;
        //console.log('로그인 성공', isLogin)
        //로컬 환경에서 확인가능한 브라우저 데이터 저장법
        localStorage.setItem('isLogin2','true')
        //localStorage.setItem('속성','값')
        //localStorage.getItem('가져오는 속성')
    }else{
        //모든 조건이 거짓일때
        loginErrorMsg.textContent = '아이디 또는 비밀번호가 잘못되었습니다. 다시 한 번 확인해주세요.';
    }
})

//boolean_common.js변수 확인
console.log(isLogin)