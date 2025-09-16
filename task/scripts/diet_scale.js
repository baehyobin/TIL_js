const userHeight = document.querySelector('#user_height')
const userWeight = document.querySelector('#user_weight')
const weightBtn = document.querySelector('#weightBtn')
const result = document.querySelector('#weight_check .result')
console.log(userHeight,userWeight, weightBtn, result)

//적정체중 = (사용자가 입력한 키-100)*0.9
//최종목표 결과예시) 적정체중은 ?kg이며 ?kg 초과되셨습니다
weightBtn.addEventListener('click',()=>{
    let properWeight = (userHeight.value-100)*0.9;
    let difference = userWeight.value-properWeight;
    result.textContent = `적정체중은 ${properWeight}kg이며 ${difference}kg 초과되셨습니다`
})
