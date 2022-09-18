const userInput = document.querySelector("#validation-input");
userInput.addEventListener("blur", validateInputByColor);

function validateInputByColor(a) {
  const validatedInput = a.currentTarget;
    const inputLength = Number(validatedInput.dataset.length);
    
  if (validatedInput.value.length === inputLength) {
    validatedInput.classList.remove("invalid");
    validatedInput.classList.add("valid");
      
  } else {
    validatedInput.classList.remove("valid");
    validatedInput.classList.add("invalid");
  }
}