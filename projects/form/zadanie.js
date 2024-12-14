var firstName = document.getElementById("firstname");
var surName = document.getElementById("surname");
var btn = document.getElementById("btn");
var result = document.getElementById("resultElement");
btn.addEventListener('click', function() {
    if (firstName.value && surName.value) {
        result.textContent = `Здравствуйте, ${firstName.value}  ${surName.value}`;
    } else {
        result.textContent = `Поля пустые!`;
    }
});
