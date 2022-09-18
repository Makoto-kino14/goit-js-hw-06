const nameInGreeting = document.querySelector("#name-output");
const userInput = document.querySelector("#name-input")

userInput.addEventListener('input', newInput);

function newInput(a) {
    //console.log(a.currentTarget);
    nameInGreeting.textContent = a.currentTarget.value;

    if (a.currentTarget.value === "") {
        nameInGreeting.textContent = 'Anonymous'
    }
}

