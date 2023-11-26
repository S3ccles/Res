// Check five: const divisible by 5
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

const divisibleBy5 = [n1, n2, n3, n4].every(n => n % 5 === 0);

console.log(`All numbers are divisible by 5: ${divisibleBy5}`);
