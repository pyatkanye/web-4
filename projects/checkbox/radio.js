let radioButtons = document.querySelectorAll('[name="food"]'); //получаем список всех checkbox элементов

let btnElement = document.querySelector('.btn');
let result = document.querySelector('.result');

console.log(btnElement)

btnElement.addEventListener('click', function(){
    let cost = 0; 
    radioButtons.forEach(radioButton => {
        if (radioButton.checked){
            cost = cost + parseInt(radioButton.value)     
        }
    });   
    result.textContent = `${cost} руб.`;
})
