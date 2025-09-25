console.log(Math);
console.log(Math.PI);
// Math.floor, round, random
let num1 = Math.floor(3.7)
console.log(num1)
num1 = Math.floor(3.2)
console.log(num1)
console.log('-----------------------------')
let num2 = Math.round(3.7)
console.log(num2)
num2 = Math.round(3.2)
console.log(num2)
console.log('-----------------------------')
let num3 = Math.random()
console.log(num3)
num3 = Math.random()*5
console.log(num3)
num3 = Math.floor(Math.random()*10)+1;
console.log(num3)
console.log('-----------------------------')
// 10% 20% 30% 40% 50%
const couponDB = ['10%', '20%', '30%', '40%', '50%']
const couponBtn = document.querySelector('#coupon')

// 버튼 클릭 시 쿠폰 5개 중 1개가 랜덤하게 alert으로 출력메시지 실행
couponBtn.addEventListener('click',()=>{
    let randomNum = Math.floor(Math.random()*5)
    alert(`${couponDB[randomNum]} 쿠폰 당첨!`)
})

//화면 접속 시 광고 2개 랜덤 표시
const adDb =[{
    name : '크리스피크림 디저트', //alt
    src : 'https://i.pinimg.com/1200x/fc/e7/d1/fce7d1c5645a67ad0ba1d6ddabd97f07.jpg',
    link : 'https://naver.com'
},{
    name : '제로쿠키 디저트', //alt
    src : 'https://i.pinimg.com/736x/6c/bb/76/6cbb76be2ce3e3408c32e37ca0185f62.jpg',
    link : 'https://google.com'
}]
/* window.addEventListener('load',()=>{
    const ad = document.querySelector('.ad')
    const randomAd = Math.floor(Math.random()*2)
    ad.children[0].href = adDb[randomAd].link
    ad.children[0].children[0].src = adDb[randomAd].src
    ad.children[0].children[0].alt = adDb[randomAd].name
}) */

// 더치페이 계산기
// 계산하기 클릭 시 총 금액과 인원 수에 따라 계산결과 출력
// 금액이 소수점인 경우 반올림
const price = document.querySelector('#price')
const person = document.querySelector('#person')
const totalBtn = document.querySelector('#total_btn')
const result = document.querySelector('.calc .result')

totalBtn.addEventListener('click',()=>{
    const totalNum = price.value/person.value
    let dutchPay = Math.round(totalNum)
    result.children[0].textContent = dutchPay.toLocaleString('ko-kr')
})

// DB
const shopDB = [{
    shop:'쿠팡',
    id:'하루견과',
    price:'1000',
},{
    shop:'네이버 스마트스토어',
    id:'하루견과',
    price:'2000',
},{
    shop:'마켓컬리',
    id:'하루견과',
    price:'2500',
}]
// 변수
const minBtn = document.querySelector('#min_price_btn')
const minPrice = document.querySelector('.min_price')
const exList = document.querySelector('#expensive_list')
//클릭 이벤트
minBtn.addEventListener('click',()=>{
    //1. 쇼핑몰,상품명,가격을 갖는 배열에서 가격만 추출하기
    const priceMap = shopDB.map( i => i.price )
    console.log(priceMap)
    //2.추출한 가격에서 최저가 찾기
    const resultMin = Math.min(...priceMap)
    minPrice.textContent =`최저가 : ${resultMin.toLocaleString('ko-kr')}원`
    //스프레드연산자 (...배열명) 여러 배열값을 한번에 처리하는 배열처리법
    const shopsort = [...shopDB].sort((a, b)=> b.price - a.price)
    //3. 쇼핑몰별 최고가 정렬
    for(let i of shopsort){
        const dt = document.createElement('dt')
        dt.textContent = i.shop
        exList.appendChild(dt)
        const dd = document.createElement('dd')
        dd.textContent =i.price.toLocaleString('ko-kr')
        exList.appendChild(dd)
    }
})

console.log('------------------')
const shopDB2 = [{
    shop : '쿠팡',
    name : '고구마',
    price : 2000,
    delivery : 2500,
},{
    shop : '이마트몰',
    name : '고구마',
    price : 2900,
    delivery : 0,
},{
    shop : '네이버 스마트스토어',
    name : '고구마',
    price : 4000,
    delivery : 1000,
},]

const priceBtn = document.querySelector('#price_btn')
const deliveryBtn = document.querySelector('#delivery_btn')
const priceResult = document.querySelector('.result1')
const deliveryResult = document.querySelector('.result2')
const shoptList = document.querySelector('#shop_list')

/* priceBtn.addEventListener('click',()=>{
    const priceContent = shopDB2.map( i => i.price )
    const minPrice = Math.min(...priceContent)
    priceResult.textContent = `최저가 : ${minPrice.toLocaleString('ko-kr')}원`
}) */
priceBtn.addEventListener('click',()=>{
    const min = shopDB2.map( i => i.price )
    priceResult.textContent = `최저가 : ${Math.min(...min).toLocaleString('ko-kr')}원`

    //최저가 -> 최고가 오름차순 정렬하기 JS
    //매개변수 순서를 이용한 오름차순(계산속성 기준) a.price - b.price
    //매개변수 순서를 이용한 내림차순(계산속성 기준) b.price - a.price
    const sort = [...shopDB2].sort((a, b)=>a.price - b.price)
    console.log(sort)
    // 반복문 for 이용 위 sort li생성 후 ul에 최종 삽입하기
    for(let i of sort){
        const li = document.createElement('li')
        li.innerHTML = `<a href="#">${i.shop}</a>`
        li.innerHTML += `<span>${i.price}원</span>`
        li.innerHTML += `<em>배송비 : ${i.delivery}원</em>`
        shoptList.appendChild(li)
        //createElement로 생성한 JS태그는 appendChild함수로 대입
    }
})

deliveryBtn.addEventListener('click',()=>{
    const deli = shopDB2.map( i => i.delivery )
    deliveryResult.textContent = `배송비 : ${Math.min(...deli).toLocaleString('ko-kr')}원`
})

/* deliveryBtn.addEventListener('click',()=>{
    const deliveryContent = shopDB2.map( i => i.delivery )
    const mindelivery = Math.min(...deliveryContent)
    deliveryResult.textContent = `배송비 : ${mindelivery.toLocaleString('ko-kr')}원`
}) */