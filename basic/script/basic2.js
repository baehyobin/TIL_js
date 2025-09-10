// 1일차 복습 (가계부앱 변수생성과 출력)
// 커피 1500원
// 도시락 6000원
// 대중교통 3000원
// 결과) 오늘 총 지출액은 0000원입니다.
let coffee = 1500;
let lunch = 6000;
let bus = 3000;
let total_price = coffee + lunch + bus;
// console.log(`오늘 총 지출액은 ${total_price.toLocaleString(`ko-kr`)}원입니다.`);
// console.log(`오늘 총 지출액은 ${(coffee + lunch + bus).toLocaleString(`ko-kr`)}원입니다.`);
// 숫자 3자리 간격 콤마(,) 표시하기
//10000
//10,000(최종 결과 처리)
// 위 기능 함수 : 객체.함수(); 변환객체.toLocalString()
// (객체,객체,객체).함수()

// 문자데이터 연습
// 리뷰 작성 기준 50자 이상
// 콘솔 출력) 현재 작성 리뷰 글자 수는 000자 입니다.
// let review = prompt('리뷰를 작성하세요');
// console.log(review);
// 객체.함수();
// 객체.속성;
// 글자 수 체크 속성 length
// let review_length = review.length;
// console.log(`현재 작성 글자 수는${review_length}자 입니다.`)

// 오브젝트형 데이터 - 객체
// 변수생성키워드 변수명 = {키:값, 키:값, 키:값...};
let rectangle = {
    width:300,
    height:200,
    x:0,
    y:-100,
};
// 회원정보 저장
let user_info = {
    user_name : '가을',
    user_age :3,
    gender: 'female',
    area:'서울'
};
// 쇼핑몰 상품 저장
let product = {
    name : '마스크',
    price : 1000,
    auqntity : 999,
    color : `white`,
};
// console.log(`${rectangle.height}px`); //200px
// console.log(rectangle.height, 'px'); //200px
// console.log(rectangle.height + 'px'); //200px
// 300px , 200px
// console.log(`${rectangle.width}px, ${rectangle.height}px`);

// 상품명 : 마스크(white)
// 상품가 : 1000원
// 수량 : 999개
// console.log(`상품명 : ${product.name}(${product.color})`);
// console.log(`상품가 : ${product.price.toLocaleString('ko-kr')}원`);
// console.log(`수량 : ${product.quantity}개`);

// 오브젝트 데이터 타입 2. 배열
// 변수생성키워드 변수명 = [배열값, 값2, 값3]
// 변수생성키워드 변수명 = new Array(값, 값, 값)
// 변수생성키워드 변수명 = new Array(자리값)
//const yoil = ['월', '화', '수', '목', '금', '토', '일']
//console.log(yoil);
//console.log(`오늘은 ${yoil[2]}요일`);

//const en = new Array('a', 'b', 'c', 'd', 'e', 'f')
//console.log(en, en[0], en.length);

//const year = new Array(4);
//year[0]=2025;
//year[1]=2024;
//year[2]=2023;
//year[3]=2022;
//console.log(year);

// Q1.좋아하는 색상 6개를 배열로 저장하고 그 중 가장 좋아하는 색상 2개를 콘솔에 출력하기

const color = ['red', 'yellow', 'orange', 'blue', 'mint', 'pink']
console.log(`가장 좋아하는 색상은 ${color[1]}와${color[5]}입니다`);

// Q2.좋아하는 과일 5개를 배열로 저장하고 역순으로 모두 출력하기.
const fruits = ['apple', 'grape', 'mango', 'pear', 'kiwi']
console.log(`${fruits[4]},${fruits[3]},${fruits[2]},${fruits[1]},${fruits[0]}`);

// Q3. 요일-날씨정보 출력
// 월 - 맑음
// 화 - 비
// 수 - 흐림
// 목 - 맑음
// 금 - 맑음
// 토 - 비
// 일 - 맑음

const yoil = ['월', '화', '수', '목', '금', '토', '일']
const weather = ['맑음', '비', '흐림',]
console.log(`${yoil[0]}-${weather[0]}`);
console.log(`${yoil[1]}-${weather[1]}`);
console.log(`${yoil[2]}-${weather[2]}`);
console.log(`${yoil[3]}-${weather[0]}`);
console.log(`${yoil[4]}-${weather[0]}`);
console.log(`${yoil[5]}-${weather[1]}`);
console.log(`${yoil[6]}-${weather[0]}`);

const megabox = new Array(8) //빈 좌석 준비
megabox[0] = 'A1'
megabox[1] = 'A2'
console.log(`현재 예매 좌석 : ${megabox[0]}${megabox[1]}`);
megabox[0] = ''
megabox[1] = null
console.log(`현재 예매 좌석 : ${megabox[0]}${megabox[1]}`);

// cgv 좌석 예매와 취소
const cgv = [] //빈 배열 준비
console.log(cgv.length);
// 좌석 A1 선택
cgv.push('A1')
console.log(cgv);
cgv.push('A2')
console.log(cgv);
cgv.pop()
console.log(cgv);
cgv.push('A3')
cgv.push('A4')
console.log(cgv);
cgv.shift()
console.log(cgv);
console.log(cgv.length >=8);
// 선택 좌석이 8개일 때 좌석 추가 금지'
const price = 11000
// 출력결과예시
// 선택좌석 수 : 00
// 총 결제금액 : 000원
const cgv_length = cgv.length;
const cgv_total_price = (cgv_length*price).toLocaleString('ko-kr')
console.log(`선택좌석 수 : ${cgv.length}`);
console.log(`촐 결제금액 : ${cgv_total_price}원`);

console.log('--------------------------------------------')

//연산자 연습
//1. 산술연산자
let num1 = 5;
let num2 = 2;
let result = num1 + num2
console.log(result);
result = num1 - num2
console.log(result)
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

// Q. 이항 연산자 활용 두 수를 사용자에게 입력받고 더하기만 되는 계산기 만들기

//const first_num = prompt('첫번째 수')
//const last_num = prompt('두번째 수')
//console.log(first_num, last_num)
//const total_num = first_num* last_num
//console.log(`${first_num}*${last_num}=${total_num}`)
console.log('--------------------------------------------')
// 증감연산자
let x = 5;
let y = 0;
console.log(x,y)
y = x++;
console.log(x,y) //6,5
x = ++y;
console.log(x,y) //6,6
x++;
--y;
console.log(x,y) //7,5

let a = 10
let b = 20
let c = 30
let d = 40
console.log(a,b,c,d)
//a=10, b=20, c=30, d=40
a++
b--
c++
d--
console.log(a,b,c,d)
//a=11, b=19, c=31, d=39
a = ++b
b = a++
console.log(a,b,c,d)
//a=21, b=20, c=31, d=39
c = a + b
d = ++c
console.log(a,b,c,d)
//a=21, b=20, c=42, d=42
a = ++c + 10
b = --d + 1
//a=53, b=42, c=43, d=41
console.log(a,b,c,d)

console.log('--------------------------------------------')
//연산자 3. 복합대입연산자★
let number = 10;
number += 5;
console.log(number); //15
number -= 5;
console.log(number); //10
number *= 3;
console.log(number); //30
number /= 10;
console.log(number); //3
number %= 2;
console.log(number); //1