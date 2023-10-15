const countDisplay = document.getElementById('display-container');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const inputElement = document.getElementById('input');
let count = 0;

function counter() {
    countDisplay.textContent = count;
    if (count < 0) {
        countDisplay.style.color = 'red';
    } else {
        countDisplay.style.color = 'black';
    }
    console.log(count);
};

plusButton.addEventListener("click", () => {
    const inputVal = parseInt(inputElement.value, 10);
    count += inputVal;
    counter();
});

minusButton.addEventListener("click", () => {
    const inputVal = parseInt(inputElement.value, 10);
    count -= inputVal;
    counter();
});
counter();






