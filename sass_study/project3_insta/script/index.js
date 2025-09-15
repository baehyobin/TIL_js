const instaMenu = document.querySelectorAll('.menu .left a')

instaMenu[0].addEventListener('click',function(e){
    e.preventDefault()
    iconFunc(this, 'like')
})
instaMenu[1].addEventListener('click',function(e){
    e.preventDefault()
    iconFunc(this, 'comment')
})
instaMenu[2].addEventListener('click',function(e){
    e.preventDefault()
    iconFunc(this, 'paper')
})

function iconFunc(target,name){
    return target.children[0].src = `./images/${name}_on.png`
}
/* instaMenu[0].addEventListener('click',iconFunc(0, 'like'))
instaMenu[1].addEventListener('click',iconFunc(1, 'comment'))
instaMenu[2].addEventListener('click',iconFunc(2, 'paper'))

function iconFunc(index,name){
    return function (e){
        e.preventDefault()
        instaMenu[index].children[0].src = `./images/${name}_on.png`}} */

/* instaMenu[0].addEventListener('click',function(e){
    e.preventDefault()
    console.log(this)
    this.children[0].src='./images/like_on.png'
})   */
//사진 클릭 시 스피커 모양 보이기
const instaPhoto = document.querySelector('main > .photo');
const volumnIcon = document.querySelector('#popup');
console.log(instaPhoto,volumnIcon)

volumnIcon.style.transition = 'opacity 1s'

instaPhoto.addEventListener('dblclick', function(){
    volumnIcon.style.opacity = '1';
})
instaPhoto.addEventListener('mouseout', function(){
    volumnIcon.style.opacity = '0';
})