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
const thumbnailImg = document.querySelectorAll('.thumbnails a')
console.log(overviewImg, thumbnailImg)

thumbnailImg[0].addEventListener('click',imgChangeFunc('0'))
thumbnailImg[1].addEventListener('click',imgChangeFunc('1'))
thumbnailImg[2].addEventListener('click',imgChangeFunc('2'))
thumbnailImg[3].addEventListener('click',imgChangeFunc('3'))
thumbnailImg[4].addEventListener('click',imgChangeFunc('4'))
thumbnailImg[5].addEventListener('click',imgChangeFunc('5'))

function imgChangeFunc(num){
    return function (){overviewImg.src=thumbnailImg[num].children[0].src;
}