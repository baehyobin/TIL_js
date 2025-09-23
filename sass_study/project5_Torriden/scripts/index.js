// index.js
// 작업 HTML 동적인 요소가 무엇이 있는지? 알고리즘 계획
// 1. 변수 2. 초기값 설정 3. 이벤트, 함수 설정

// 동적 요소 계획하기
// 1. 썸네일 클릭시 큰상품 이미지 변경
// 2. 썸네일 클릭시 언더바 이동(+애니메이션)
// 3. 큰 상품 이미지에 마우스 올릴시 좌우버튼 나오기(+애니메이션)
// 4. 좌우버튼 마우스 클릭시 상품 이미지 좌우변경
// 5. 수량버튼 플러스마이너스 클릭시 갯수변경
// 6-1. 선택박스 마우스 클릭시 아이콘 변경
// 6-2. 선택박스 마우스 클릭시 이전 선택버튼 아이콘 복구
// 7. 선택박스 마우스 클릭시 가격변경
// 8-1. 카트버튼 마우스 올릴시 텍스트 애니메이션
// 8-2. 카트버튼 마우스 클릭시 카트수량증가
// 9-1. 위시버튼 마우스 클릭시 ♥ in Wishlist 변경
// 9-2. 위시버튼 한번 더 마우스 클릭시 기존으로 변경
// 10-1. 인포버튼 마우스 올릴시 아이콘 변경
// 10-2. 인포버튼 마우스 클릭시 컨텐츠정보 띄우기

// 1. 썸네일 클릭시 큰 상품 이미지 변경
const overviewImg = document.querySelector('.overview_pic img')
const overview = document.querySelector('.overview_pic')
const thumbnailImg = document.querySelectorAll('.thumbnails a')
const thumbnailBar = document.querySelectorAll('a .bar')
console.log(overviewImg, thumbnailImg, thumbnailBar)

thumbnailImg[0].addEventListener('click',imgChangeFunc('0'))
thumbnailImg[1].addEventListener('click',imgChangeFunc('1'))
thumbnailImg[2].addEventListener('click',imgChangeFunc('2'))
thumbnailImg[3].addEventListener('click',imgChangeFunc('3'))
thumbnailImg[4].addEventListener('click',imgChangeFunc('4'))
thumbnailImg[5].addEventListener('click',imgChangeFunc('5'))

function imgChangeFunc(num){
    return function (e){
        e.preventDefault();
        overviewImg.src=thumbnailImg[num].children[0].src;
        resetBar()
        thumbnailBar[num].style.display = 'block';
        thumbnailBar[num].style.transform = 'scaleX(1)';
    }
}
// 2. 썸네일 클릭시 언더바 이동(+애니메이션)
function resetBar(){
    thumbnailBar[0].style.transform = 'scaleX(0)';
    thumbnailBar[1].style.transform = 'scaleX(0)';
    thumbnailBar[2].style.transform = 'scaleX(0)';
    thumbnailBar[3].style.transform = 'scaleX(0)';
    thumbnailBar[4].style.transform = 'scaleX(0)';
    thumbnailBar[5].style.transform = 'scaleX(0)';
}

// 3. 큰 상품 이미지에 마우스 올릴시 좌우버튼 나오기(+애니메이션)
// CSS로 처리함!

// 4. 좌우버튼 마우스 클릭시 상품 이미지 좌우변경
const arrowLeft = document.querySelector('.overview .left_arrow')
const arrowRight = document.querySelector('.overview .right_arrow')
console.log(arrowLeft, arrowRight)

// 나중에 해보기

// 5. 수량버튼 플러스마이너스 클릭시 갯수변경
const minusBtn = document.querySelector('.quantity_btn .minus')
const plusBtn = document.querySelector('.quantity_btn .plus')
const orderNum = document.querySelector('#order_num')
let count = 1;
orderNum.value = count;

//console.log(minusBtn, plusBtn,quantityInput)
minusBtn.addEventListener('click',()=>{
    if(count>1){
        count--;
        orderNum.value = count;
    }else{
        alert('값은 1 이상이어야 합니다')
    }
})
plusBtn.addEventListener('click',()=>{
    count++;
    orderNum.value = count;
})

// 6-1. 선택박스 마우스 클릭시 아이콘 변경
// 6-2. 선택박스 마우스 클릭시 이전 선택버튼 아이콘 복구
const purchaseBg = document.querySelectorAll('.purchase_dot')
const purchaseBtn = document.querySelectorAll('.purchaseBtn')
const subPrice = document.querySelector('.sub_price')
console.log(purchaseBtn, purchaseBg)

purchaseBtn[0].addEventListener('click',()=>{checkDotFunc(0)})
purchaseBtn[1].addEventListener('click',()=>{checkDotFunc(1)})
purchaseBtn[2].addEventListener('click',()=>{checkDotFunc(2)})
purchaseBtn[3].addEventListener('click',()=>{checkDotFunc(3)})

function resetDotFunc(){
    purchaseBg[0].style.backgroundImage = 'url(./images/emptydot.png)' ;
    purchaseBg[1].style.backgroundImage = 'url(./images/emptydot.png)' ;
    purchaseBg[2].style.backgroundImage = 'url(./images/emptydot.png)' ;
    purchaseBg[3].style.backgroundImage = 'url(./images/emptydot.png)' ;
}
function checkDotFunc(num){
    resetDotFunc()
    purchaseBg[num].style.backgroundImage = 'url(./images/checkdot.png)' ;
    if (num == '1'){
        subPrice.textContent = '$21.38 USD';
    }else if(num =='2'){
        subPrice.textContent = '$22.09 USD';
    }else if(num == '3'){
        subPrice.textContent = '$22.56 USD';
    }
}

// 7. 선택박스 마우스 클릭시 가격변경
// 6의 함수와 합침!

// 8-1. 카트버튼 마우스 올릴시 텍스트 애니메이션
// 8-2. 카트버튼 마우스 클릭시 카트수량증가