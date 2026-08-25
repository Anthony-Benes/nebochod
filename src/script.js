function incrementCounter() {
    let counterElement = document.getElementById('counter');
    let currentCount = parseInt(counterElement.innerText);
    counterElement.innerText = currentCount + 1;
}

document.getElementById('incrementButton').addEventListener('click', incrementCounter);
