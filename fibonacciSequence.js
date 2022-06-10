const numberOfElements = 100
let fibonacciSequence = [];
let cycle = 0;

const title = document.querySelector('h1');
const container = document.getElementById('container');
const button = document.querySelector('.button');

document.querySelector('body').style.textAlign = 'center';
title.style.margin = '5rem 0 2rem 0';
container.style.cssText = `
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;


const fib = (n) => {
    cycle++;
    if (cycle >= 2) button.style.display = 'none';
    let number = cycle * n;
    fibonacciSequence = [];
    let newArray = new Array(number).fill(1).reduce((arr, _, i) => {
        arr.push((i <= 1) ? i : arr[i - 2] + arr[i - 1])
        return arr
    }, fibonacciSequence);
    return fibonacciSequence = newArray.slice(newArray.length - numberOfElements, newArray.length)
}

console.log('fibonacciSequence', fibonacciSequence)

const generateELements = () => {
    container.innerHTML = ''
    for (let i = 0; i < fibonacciSequence.length; i++) {
        const color = generateHex()
        const element = document.createElement('div');
        const margin = '2rem';

        element.innerHTML = `<p>${fibonacciSequence[i]}</>`;
        element.style.cssText = `
            background-color: ${i == 0 ? 'black' : i == (fibonacciSequence.length - 1) ? 'white' : color};
            color: ${i == 0 ? 'white' : 'black'};
            font-weight: bold;
            width: calc(12rem - ${margin});
            height: 6rem;
            border: ${i == (fibonacciSequence.length - 1) ? '1px solid rgb(229 231 235)' : 'none'};
            border-radius: 3rem;
            margin: ${margin};
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all .2s ease-in-out;
        `;

        element.addEventListener('mouseenter', e => {
            element.style.transform = 'scale(1.1)';
            element.style.cursor = 'pointer';
        });

        element.addEventListener('mouseleave', e => {
            element.style.transform = 'scale(1)';
        });

        container.appendChild(element);
    }
}

fib(numberOfElements);
generateELements();

button.addEventListener('click', () => {
    fib(numberOfElements);
    generateELements();
})

function generateHex() {
    const chars = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
}
