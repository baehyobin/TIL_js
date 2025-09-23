// todo.js
// 1. input 할일 입력 후 '추가하기' 버튼 클릭하면 ul의 마지막 자식 위치 li 추가하기
const listInput = document.querySelector('#list')
const listAddBtn = document.querySelector('#list_add')
const listWrapUl = document.querySelector('#list_wrap')
console.log(listInput, listAddBtn, listWrapUl)
listAddBtn.addEventListener('click',listAddFunc)
listInput.addEventListener('keyup',(e)=>{
    if (e.key === 'Enter'){listAddFunc()}
})
function toDoFunc(){
    listWrapUl.innerHTML += `<li>${listInput.value}<button type="button" class="close">X</button></li>`;
    listInput.value = ''
    const toDoClose = document.querySelectorAll('li .close')
    console.log(toDoClose)
    //부모 parentNode
    //삭제내장함수 remove()
    for(let i of toDoClose){
        i.addEventListener('click',()=>{
            i.parentNode.remove();
        })
    }
    return console.log('할일출력 테스트');
}

function listAddFunc(){listInput.value =='' ? alert('내용을 입력하세요') : toDoFunc() }
function removeList(){remove(toDoClose.parentNode)}