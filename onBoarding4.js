const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');

const left = document.querySelector('#left');
const middle = document.querySelector('#middle');
const right = document.querySelector('#right');

first.addEventListener('click', () => {
    left.style.display = 'block';
    middle.style.display = 'none';
    right.style.display = 'none';
    console.log("first");
});

second.addEventListener('click', () => {
    left.style.display = 'none';
    middle.style.display = 'block';
    right.style.display = 'none';
    console.log("second");
});

third.addEventListener('click', () => {
    left.style.display = 'none';
    middle.style.display = 'none';
    right.style.display = 'block';
    console.log("third");
});

console.log("You dey try")

