//1.
//2.
// 함수의 매개변수 활용
function story_func1(day, data='조약돌'){
    console.log(`일차 확인 : ${day}`)
    console.log(`매개변수 값 확인 : ${data}`)
    //헨젤, 그레텔 준비
    const person = ['헨젤','그레텔']
    //조약돌 준비
    //const src = '조약돌'
    //집 돌아가기 목표
    //헨젤과 그레텔이 조약돌을 이용해서 집을 찾아갔습니다.
    //1일차 헨젤과 그레텔이 조약돌을 이용해서 집을 찾아갔습니다.
    //2일차 헨젤과 그레텔이 빵부스러기를 이용해서 집을 찾아갔습니다.
    //3일차 헨젤과 그레텔이 쌀을 이용해서 집을 찾아갔습니다.
    console.log(`${day}일차 ${person[0]}과 ${person[1]}이 ${data}을(를) 이용해서 집을 찾아갔습니다.`)
}
/* 이야기의 둘째날 실패사례 */
/* function story_func2(){ 
    //헨젤, 그레텔 준비
    const person = ['헨젤','그레텔']
    //조약돌 준비
    const src = '빵부스러기'
    //집 돌아가기 목표
    //헨젤과 그레텔이 조약돌을 이용해서 집을 찾아갔습니다.
    alert(`${person[0]}과 ${person[1]}이 ${src}을 이용해서 집을 찾아갔습니다.`)
}
 */
story_func1(1); //기본값 사용시 매개변수 값 전달안함
story_func1(2,'빵부스러기'); //기본값 변경 시 매개변수 값 전달
story_func1(3,'쌀'); //기본값 변경 시 매개변수 값 전달

//커피레시피함수
function coffee_func(menu, water,espresso){
    console.log(`${menu} 레시피`)
    console.log(`${water}컵 물을 채운다.`)
    console.log(`${espresso}샷 에스프레소를 넣는다.`)
}
coffee_func('아메리카노(HOT)', 2, 1);
coffee_func('에스프레소', 0, 1);

//키오스크
//키오스크 주문 출력(배열 활용법)
function kiosk_array(hotice, coffee, amount){
    const type = ['따뜻한', '차가운']
    const menu = ['카페라떼', '아메리카노', '녹차라떼', '에스프레소']
    console.log(`${type[hotice]} ${menu[coffee]} ${amount}잔 주문 완료되었습니다`);
}
kiosk_array(0, 0, 2)
kiosk_array(1, 1, 1)
kiosk_array(0, 2, 2)
kiosk_array(1, 1, 1)
console.log('--------------------------------------------')

//키오스크 주문 출력(객체 활용법)
function kiosk_obj(hotice, coffee, amount=1){
    const coffee_menu = {
        type:['따뜻한', '차가운'],
        menu:['카페라떼', '아메리카노', '녹차라떼', '에스프레소']
    }
    console.log(`${coffee_menu.type[hotice]} ${coffee_menu.menu[coffee]} ${amount}잔 주문 완료되었습니다`);
}
kiosk_obj(0, 0, 2)
kiosk_obj(1, 1)
kiosk_obj(0, 2, 2)
kiosk_obj(1, 1)
console.log('--------------------------------------------리턴')
function plus_func1(n1,n2){
    let calc = `${n1} * ${n2} = ${n1*n2}, `
    calc += `${n1} + ${n2} = ${n1+n2}`
    /* 문제 1) 곱하기가 아닌 더하기만 나오는 문제 */
    // 대입연산자 (=) 이전 변수값 제거하고 새 값 대입
    // 이전 변수 유지하고 새 값 추가 대입 연산자는? 복합대입
    // calc += '계산식'
    return calc
}
/* function plus_func2(n1,n2){
    alert(`${n1} + ${n2} = ${n1+n2}`)
} */
console.log(plus_func1(1, 2))

// 구구단 함수 (2-9단까지)
// 출력예시 ) 변수x변수 = 결과
function dan99_func(dan){
    //복잡한식
    let dan99_total = ``;
    dan99_total += `${dan} X 1 = ${dan*1}, `
    dan99_total += `${dan} X 2 = ${dan*2}, `
    dan99_total += `${dan} X 3 = ${dan*3}, `
    dan99_total += `${dan} X 4 = ${dan*4}, `
    dan99_total += `${dan} X 5 = ${dan*5}, `
    dan99_total += `${dan} X 6 = ${dan*6}, `
    dan99_total += `${dan} X 7 = ${dan*7}, `
    dan99_total += `${dan} X 8 = ${dan*8}, `
    dan99_total += `${dan} X 9 = ${dan*9}` 
    return dan99_total
    //return 아래 작성식은 실행되지 않음
}

console.log(dan99_func(7))
//alert(dan99_func(5))
//prompt(dan99_func(6))

// 할인율 계산기
// KB국민카드는 5% 할인적용가는 ?원
// 현대카드는 10% 할인적용가는 ?원
// 삼성카드는 20% 할인적용가는 ?원

// 할인율 계산법(100-할인율 5) / 100 = 0.95
// 판매가 * 0.95

function card_func(c_choice,num){
    const card = ['KB국민카드','현대카드','삼성카드'] // 카드정보
    const price = 1051000; //원가
    const calc = (100-num)/100; //할인율 계산
    const total_price = price*calc; //할인가 계산
    const result = (`${card[c_choice]} ${num}% 할인적용가 ${total_price.toLocaleString(`ko-kr`)}원`); //출력결과
    return result
}
//현대카드 10% 할인적용가 ?원
console.log(card_func(0,5));
console.log(card_func(1,10));
console.log(card_func(2,20));

// 익명함수
// 변수 내 function 키워드를 지정해 생성하는 함수

// 일반함수와 익명함수의 차이
/* function hello1(user){
    return alert('hello' + user)
} */
//hello1('hb')

/* const hello2 = function(){
    return alert('hello'+ user)
} */
//hello2('kim')

// 익명함수 + 화살표함수 (ES6)
//변수키워드 변수명 대입연산자 (매개변수) 화살표함수 {}
const hello3 = (user) => {
    return console.log('hello'+user)
}
hello3('h');