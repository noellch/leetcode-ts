function reverseStr(str) {
    if (str.length === 1) return str;
    return str.slice(-1) + reverseStr(str.slice(0, -1));
}

console.log(reverseStr('1234'));
