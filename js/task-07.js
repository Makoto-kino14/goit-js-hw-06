const sliderPosition = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const changeFontSize = () => {
    text.style.fontSize = `${sliderPosition.value}px`;
}

sliderPosition.addEventListener('input', changeFontSize);