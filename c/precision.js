function strip(num, precision = 12) {
    return +parseFloat(num.toPrecision(precision));
}

function add(num1, num2) {
    const num1Digits = (num1.toString().split('.')[1] || '').length;
    const num2Digits = (num2.toString().split('.')[1] || '').length;
    const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
    return (num1 * baseNum + num2 * baseNum) / baseNum;
}

console.log(strip(0.3) === add(0.1, 0.2));
