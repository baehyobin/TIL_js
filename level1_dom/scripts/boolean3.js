// 상하좌우 버튼 클릭 시 캐릭터 10px 이동
const moveBtn = document.querySelectorAll('#control .btn')
const character = document.querySelector('#map img')
console.log(moveBtn,character)
let num=0;

//상
moveBtn[0].addEventListener('click',()=>{
    num +=10;
    console.log(num)
    character.style.transform = `rotate(90deg) translateX(-${num}px)`
})
//하
moveBtn[1]
//좌
moveBtn[2]
//우
moveBtn[3]

// input 입력차아에 영어로 이동방향 작성시 캐릭터 10px 이동
// 이동방향 ) left, right, top, bottom
const ctrlInput = document.querySelector('#control #txt')
console.log(ctrlInput)
/* if(left){}else if(right){}else if(top){} else if(bottom){}else{오답} */
ctrlInput.addEventListener('keyup',(e)=>{
    if(e.key == 'Enter'){
        const inputVal = ctrlInput.value;
        if(inputVal == 'left' || inputVal == 'right' || inputVal == 'top' ||inputVal == 'bottom'){
            console.log(`${inputVal} 이동`)
            ctrlInput.value='';
        }else{console.log('오답')}
/*         if(ctrlInput.value === 'left'){console.log('왼쪽이동')}
        else if(ctrlInput.value === 'right'){console.log('오른쪽이동')}
        else if(ctrlInput.value === 'top'){console.log('상단이동')}
        else if(ctrlInput.value === 'bottom'){console.log('하단이동')}
        else{console.log('입력 오류')} */
    }
})

// 학점에 따라 A-F등급 나오는 프로그래밍
// 100-90 A
// 89-80 B
// 79-70 C
// 69-60 D
// 59 이하 F
// const score = prompt('학점을 입력하세요')
/* if (score < 60){console.log('F')}
else if(score < 70){console.log('D')}
else if(score < 80){console.log('C')}
else if(score < 90){console.log('B')}
else if(score < 101){console.log('A')}
else{console.log('입력 오류')} */
/* if (score>=0 && score<=100){
    if(score>=90){console.log('A')}
    else if(score>=80){console.log('B')}
    else if(score>=70){console.log('C')}
    else if(score>=60){console.log('D')}
    else {console.log('F')}
}
else{console.log('0-100값만 입력해주세요')} */
//switch-case
//쇼핑몰 검색창에 사용자가 입력한 값 조건확인
//딸기 -> 1000원
//사과 -> 2000원
//판매상품이 아닙니다.

/* const fruit = prompt('검색어를 입력하세요')
console.log(fruit); */

/* switch(fruit){
    case '딸기' : console.log('1000원'); break;
    case '사과' : console.log('2000원'); break;
    default : console.log('판매상품이 아닙니다')
} */

//전화 단축키
//const phoneNumber = prompt('단축키 입력')
// 1 엄마
// 2 아빠
// 해당 단축키가 없습니다.

/* switch(phoneNumber){
    case '1' : console.log('엄마'); break;
    case '2' : console.log('아빠'); break;
    default : console.log('해당 단축키가 없습니다.')
} */

/* if(phoneNumber == '1'){
    console.log('엄마')
}else if(phoneNumber == '2'){
    console.log('아빠')
}else {console.log('해당 단축키가 없습니다.')} */

//쇼핑몰 수량+가격 알고리즘
//-버튼 클릭 시 수량감소+가격감소(1일때 -누르면 경고)
const minustBtn = document.querySelector('#minus')
const plustBtn = document.querySelector('#plus')
const numberInput = document.querySelector('#num')
const priceP = document.querySelector('p.price')
console.log(minustBtn,plustBtn,numberInput,priceP)
let numVal = 1;
let originalPrice = 900;

numberInput.value = numVal;//초기값대입
priceP.textContent = `${numVal*originalPrice}원`//초기값대입


minustBtn.addEventListener('click',()=>{
    numVal==1 ? console.log('최소 구매 수량') : numVal--;
    totalStatus()
})

plustBtn.addEventListener('click',()=>{
    numVal<10 ? numVal++ : console.log('최대 구매 수량') ;
    totalStatus()
})

function totalStatus(){
    numberInput.value = numVal;
    priceP.textContent = `${numVal*originalPrice}원`
}