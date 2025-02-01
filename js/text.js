console.log('hi');

const bigBox = document.getElementById('con'); // The container element
const allNumbers = document.getElementById('all-number-btn'); // All numbers button
const primeNumbers = document.getElementById('prime-number-btn'); // Prime numbers button
const evenNumbers = document.getElementById('even-number-btn'); // Even numbers button
const oddNumbers = document.getElementById('odd-number-btn'); // Odd numbers button
const primeChartBtn = document.getElementById('prime-chart-btn'); // Prime Chart button

// Function to clear the container
function clearContainer() {
    bigBox.innerHTML = ''; // Clear all content in the container
}

// Function to show all numbers
function showAllNumbers() {
    clearContainer(); // Clear the container first
    for (let i = 0; i <= 100; i++) {
        const divP = document.createElement('div');
        divP.textContent = i;
        styleDiv(divP);
        bigBox.appendChild(divP);
    }
}

// Function to show even numbers
function showEvenNumbers() {
    clearContainer();
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            const divP = document.createElement('div');
            divP.textContent = i;
            styleDiv(divP);
            bigBox.appendChild(divP);
        }
    }
}

// Function to show odd numbers
function showOddNumbers() {
    clearContainer();
    for (let i = 0; i <= 100; i++) {
        if (i % 2 !== 0) {
            const divP = document.createElement('div');
            divP.textContent = i;
            styleDiv(divP);
            bigBox.appendChild(divP);
        }
    }
}

// Function to show prime numbers
function showPrimeNumbers() {
    clearContainer();
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            const divP = document.createElement('div');
            divP.textContent = i;
            styleDiv(divP);
            bigBox.appendChild(divP);
        }
    }
}

// Event listener for "All Numbers"
allNumbers.addEventListener('click', showAllNumbers);

// Event listener for "Even Numbers"
evenNumbers.addEventListener('click', showEvenNumbers);

// Event listener for "Odd Numbers"
oddNumbers.addEventListener('click', showOddNumbers);

// Event listener for "Prime Numbers"
primeNumbers.addEventListener('click', showPrimeNumbers);

// Event listener for "See Prime Chart"
primeChartBtn.addEventListener('click', function () {
    clearContainer(); // Clear previous content
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            const divP = document.createElement('div');
            divP.style.width = '30px';
            divP.style.height = '30px';
            divP.style.marginRight = '5px';
            divP.style.backgroundColor = '#28a745'; // Green for prime numbers
            divP.style.display = 'flex';
            divP.style.alignItems = 'center';
            divP.style.justifyContent = 'center';
            divP.style.color = 'white';
            divP.textContent = i;
            bigBox.appendChild(divP);
        }
    }
});

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) return false;
    }
    return true;
}

// Function to style a div element
function styleDiv(div) {
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';
    div.style.backgroundColor = '#ffeacc';
    div.style.transition = 'background-color 0.3s';

    // Add hover effect
    div.addEventListener('mouseover', function () {
        div.style.backgroundColor = '#ffd700';
    });

    div.addEventListener('mouseout', function () {
        div.style.backgroundColor = '#ffeacc';
    });
}

// Show all numbers by default on page load
showAllNumbers();
