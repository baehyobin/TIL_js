// index.js
// 작업 HTML 동적인 요소가 무엇이 있는지? 알고리즘 계획
// 1. 변수 2. 초기값 설정 3. 이벤트, 함수 설정

// 동적 요소 계획하기
// 1. 상품 이미지에 마우스이벤트시 큰상품 이미지 변경
// 2. 😀저장하기 버튼 클릭 시 로그인 유무에 따라 다른결과 실행
// 3. 리뷰 클릭 시 스크롤 이동
// 4. 가격정보 (i) 클릭 시 정보 팝업 출력/숨기기
// 5. 주문 목록 초기 숨기기
// 6. 사이즈select 초기 비활성화(색상 선택 시 활성화)
// 7. 색상->사이즈 모두 선택 시 주문목록 출력(선택한 값이 출력, 주문금액 변경)
// 8. 주문목록 'x' 클릭 주문목록 삭제, 주문금액 초기화
// 9. 주문목록 + 클릭 시 재고수량까지 주문수량+주문금액 표시
// 10. 주문목록 - 클릭 시 주문수량+주문금액 감소(1이라면 경고창 출력) `1~9999개까지만 입력이 가능합니다.`
// 11. (상품 미선택 시) 장바구니, 바로구매 클릭 시 '상품을 선택하세요' 경고창 출력
// 12. 😀(상품 선택 시) 장바구니, 바로구매 클릭 시 로그인 유무에 따라 다른 페이지로 이동
// ----------------------------------------------------------
// 1. 상품 이미지에 마우스이벤트시 큰상품 이미지 변경
// 변수 -> 초기값 -> 이벤트,함수
const thumnailPic = document.querySelectorAll('.thumnail a')
const overviewPic = document.querySelector('.overview img')
console.log(thumnailPic, overviewPic)
//초기값(첫번째 썸네일a가 보이고 있다는 뜻으로 테두리가 있음)
thumnailPic[0].style.border = '2px solid #0aa5ff';
//콘솔테스트 권장 1) 두번째 썸네일 이미지 경로 출력하기
console.log(thumnailPic[1].children[0].src)
//콘솔테스트 권장 2) 큰 이미지 경로 출력하기
console.log(overviewPic.src)
//두번째 썸네일에 마우스 올리면 큰 이미지를 두번째 썸네일 이미지로 변경하기

//이미지 자연스러운 scale 변경을 위한 transition 애니메이션 설정(초기값)
thumnailPic[0].children[0].style.transition = 'transform 0.5s';
thumnailPic[1].children[0].style.transition = 'transform 0.5s';

//이벤트 함수 시작
thumnailPic[0].addEventListener('mouseover',()=>{
    //테두리 활성화 비활성화
    thumnailPic[0].style.border = '2px solid #0aa5ff';
    thumnailPic[1].style.border = '0';
    //이미지 확대
    thumnailPic[0].children[0].style.transform = 'scale(1.2)';
    thumnailPic[1].children[0].style.transform = 'scale(1)';
    //이미지 변경
    overviewPic.src = thumnailPic[0].children[0].src;
})
thumnailPic[1].addEventListener('mouseover',()=>{
    thumnailPic[1].style.border = '2px solid #0aa5ff';
    thumnailPic[0].style.border = '0';
    thumnailPic[0].children[0].style.transform = 'scale(1)';
    thumnailPic[1].children[0].style.transform = 'scale(1.2)';
    overviewPic.src = thumnailPic[1].children[0].src;
})

//로그인 정보 저장
// true == 로그인
// false == 로그아웃
localStorage.setItem('isLogin','true');

// 2. 😀저장하기 버튼 클릭 시 로그인 유무에 따라 다른결과 실행
const bookMark = document.querySelector('.right_icon .scrap')
console.log(bookMark)
let loginStatus = localStorage.getItem('isLogin') ;
bookMark.addEventListener('click',()=>{
    if(loginStatus == 'true'){
        //로그인시 wish.html이동
        location.href = './wish.html';
    }else if(loginStatus == 'false'){
        //로그아웃시 login.html이동
        location.href = './login.html';}
    })
    /* function bookMarkFunc(){
        //상태가져오기 변수 생성
        if(loginStatus == 'true'){
            //로그인시 wish.html이동
            location.href = './wish.html';
            }else if(loginStatus == 'false'){
                //로그아웃시 login.html이동
                location.href = './login.html';
                }
                } */
               // 3. 리뷰 클릭 시 스크롤 이동
const reviewBtn = document.querySelectorAll('.review_link')
const reviewWrap = document.querySelector('.review_wrap')
const productBtn = document.querySelector('.product_link')
const productInfo = document.querySelector('main > .product_info')

reviewBtn[0].addEventListener('click',(e)=>{e.preventDefault();contentsPstFunc(reviewWrap)})
reviewBtn[1].addEventListener('click',(e)=>{e.preventDefault();contentsPstFunc(reviewWrap)})
productBtn.addEventListener('click',(e)=>{e.preventDefault();contentsPstFunc(productInfo)})


function contentsPstFunc(target){
    return window.scrollTo(0, target.offsetTop)
}
/* function reviewBtnFunc(e){
    console.log(e)
    e.preventDefault()
    window.scrollTo(0,reviewWrap.offsetTop)
    } */
/* reviewBtn[0].addEventListener('click',(e)=>{
    e.preventDefault()
    //스크롤 이동 window 함수 scrollTo(x,y)
    console.log(reviewWrap.offsetTop)//리뷰위치 위쪽 좌표값 확인
    window.scrollTo(0,reviewWrap.offsetTop)
    })
    // sticky bar 항목 클릭 시 위치 이동
    reviewBtn[1].addEventListener('click',(e)=>{
        e.preventDefault()
        //스크롤 이동 window 함수 scrollTo(x,y)
        window.scrollTo(0,reviewWrap.offsetTop)
})
console.log(productBtn,productInfo)
productBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    //스크롤 이동 window 함수 scrollTo(x,y)
    console.log(productInfo.offsetTop)
    window.scrollTo(0,productInfo.offsetTop)
    }) */

// 4. 가격정보 (i) 클릭 시 정보 팝업 출력/숨기기
const priceInfoIcon = document.querySelector('.price_info .info_icon')
const priceInfo = document.querySelector('.price_info .info')
console.log(priceInfoIcon,priceInfo)
// (i) 클릭 시 정보 팝업 출력/숨기기
// 초기 : 숨김(false)
// 클릭 : 보이기(true) -> false->true->false...

let inforBoolean = false;

priceInfoIcon.addEventListener('click',()=>{
    //infoBoolean의 상태를 클릭 할 때마다 값 반전
    inforBoolean = !inforBoolean;
    console.log(inforBoolean);
    //return priceInfo.style.display = 'block';
    if (inforBoolean){//()조건이 참일때 자동실행
        priceInfo.style.display = 'block';
    } else{
        priceInfo.style.display = 'none';
    }
})

// 5. 주문 목록 초기 숨기기
// 6-1. 사이즈select 초기 비활성화
// 6-2. (색상 선택 시 활성화)
// 7-1. 색상->사이즈 모두 선택 시 (선택한 인덱스가 0이 아닌 것) - 콘솔 선택완료
const orderList = document.querySelector('.order_list')
const sizeSelect = document.querySelector('#size_select')
const colorSelect = document.querySelector('#color_select')
const totalPrice = document.querySelector('.num_price p')
const totalOrderPrice = document.querySelector('.order_price p em')
console.log (orderList,sizeSelect,colorSelect)

orderList.style.display = 'none';
// colorSelect.children[0].disabled = true;
sizeSelect.disabled = true;

colorSelect.addEventListener('change',()=>{
    // sizeSelect.disabled = false;
    // 색상 select에서 첫번째 value=none에 해당하는 색상을 제외한 나머지 옵션이 선택되었을 때 사이즈select 활성화하기
    if(colorSelect.selectedIndex != 0){
        sizeSelect.disabled = false;
        //사이즈 이벤트 작성위치
        sizeSelect.addEventListener('change',()=>{
            if(sizeSelect.selectedIndex!=0){
                console.log('선택완료')
                orderList.style.display = 'block';
                //선택옵션 출력
                let orderColor = colorSelect.options[colorSelect.selectedIndex].text
                let orderSize = sizeSelect.options[sizeSelect.selectedIndex].text
                //let orderColorReplace = orderColor.replace(찾는값, 변경값)
                //정규표현식 시작과 끝 표시 /검사내용/
                //괄호찾기 \찾는문자 \(.*\)
                //모든 내용.*
                let orderColorReplace = orderColor.replace(/\(.*\)/, '')
                orderList.children[0].children[0].textContent = orderColorReplace;
                let orderSizeReplace = orderSize.replace(/\(.*\)/, '')
                orderList.children[0].children[1].textContent = orderSizeReplace;
                // 7-2. 주문목록 출력(선택한 값이 출력, 주문금액 변경)
                totalPrice.textContent = `${productOptDB[0].price.toLocaleString('ko-kr')}원`
                totalOrderPrice.textContent = `${productOptDB[0].price.toLocaleString('ko-kr')}`
            }
        })
    } else {
        sizeSelect.disabled = true;
    }
})

// DB불러오기 테스트
console.log(productOptDB[0].name)//몽셸 패딩 하네스 올인원
console.log(productOptDB[0].color[0],productOptDB[0].color[1])//블랙, 라즈베리

// DB -> HTML 적용
// 1. JS에서 HTML 함수로 생성 createElement
const colorOpt1 = document.createElement('option')
const colorOpt2 = document.createElement('option')
console.log(colorOpt1,colorOpt2)
// 2. 위에서 생성한 함수에 DB 데이터 대입 innerHTML, textContent
colorOpt1.textContent = `${productOptDB[0].color[0]} (${productOptDB[0].price}원)`
colorOpt2.textContent = `${productOptDB[0].color[1]} (${productOptDB[0].price}원)`
// 3. 위에서 만든 HTML을 실제 HTML의 마지막 자식 위치로 삽입
colorSelect.appendChild(colorOpt1)
colorSelect.appendChild(colorOpt2)
// * 생성한 태그가 li면 ul/ol의 마지막 자식 위치로 삽입
// * 생성한 태그가 option이면 select의 마지막 자식 위치로 삽입

// 8. 주문목록 'x' 클릭 주문목록 삭제, 주문금액 초기화
const closeBtn = document.querySelector('.order_list .close')
console.log(closeBtn)
closeBtn.addEventListener('click',function(){
    this.parentNode.style.display = 'none';
    orderNum.value = '1';
    totalPrice.textContent = '0';
    totalOrderPrice.textContent = '0';
    colorSelect.selectedIndex = colorSelect.options[0]
    sizeSelect.selectedIndex = sizeSelect.options[0]
})

// 9. 주문목록 + 클릭 시 재고수량까지 주문수량+주문금액 표시
const minusBtn = document.querySelector('#minus_btn')
const plusBtn = document.querySelector('#plus_btn')
const orderNum = document.querySelector('#order_num')
let count = 1;

plusBtn.addEventListener('click',()=>{
    //수량증가
    orderNum.value = ++count;
    //주문금액
    let amountPrice = productOptDB[0].price*orderNum.value;
    totalPrice.textContent = `${amountPrice.toLocaleString('ko-kr')}원`
    totalOrderPrice.textContent = `${amountPrice.toLocaleString('ko-kr')}`
})